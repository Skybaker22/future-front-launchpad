import React, { useEffect, useMemo, useRef } from "react";

type PartnerLocation = {
  name: string;
  lat: number;
  lon: number;
};

const partnerLocations: PartnerLocation[] = [
  { name: "Munich", lat: 48.1351, lon: 11.582 },
  { name: "Berlin", lat: 52.52, lon: 13.405 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Zurich", lat: 47.3769, lon: 8.5417 },
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Boston", lat: 42.3601, lon: -71.0589 },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093 },
];

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function latLonToSphere(lat: number, lon: number) {
  // Spherical coordinates → unit sphere (Y up)
  const phi = degToRad(90 - lat);
  const theta = degToRad(lon + 180);

  const x = -Math.sin(phi) * Math.cos(theta);
  const z = Math.sin(phi) * Math.sin(theta);
  const y = Math.cos(phi);

  return { x, y, z };
}

function project(
  p: { x: number; y: number; z: number },
  rotY: number,
  size: number,
  cx: number,
  cy: number,
  perspective = 2.4
) {
  // rotate around Y
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  const x = p.x * cos + p.z * sin;
  const z = -p.x * sin + p.z * cos;
  const y = p.y;

  const scale = perspective / (perspective - z); // z in [-1,1]
  return {
    x: cx + x * size * scale,
    y: cy + y * size * scale,
    z,
    scale,
  };
}

function readCssVarHsl(varName: string, fallbackHsl: string) {
  if (typeof window === "undefined") return fallbackHsl;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return raw ? `hsl(${raw})` : fallbackHsl;
}

function toHsla(hslColor: string, alpha: number) {
  // Supports both: "hsl(215 80% 8%)" and "hsl(215, 80%, 8%)"
  const m = hslColor
    .trim()
    .match(/hsl\(\s*([\d.]+)[,\s]+([\d.]+)%[,\s]+([\d.]+)%\s*\)/i);

  if (!m) return hslColor; // fallback (shouldn't happen)

  const [, h, s, l] = m;
  return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
}

const DigitalGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const points = useMemo(() => {
    return partnerLocations.map((p) => ({
      ...p,
      pos: latLonToSphere(p.lat, p.lon),
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const accent = readCssVarHsl("--primary", "hsl(172 66% 50%)");
    const bg = readCssVarHsl("--background", "hsl(222 47% 11%)");

    const draw = (now: number) => {
      const dt = now - t0;
      t0 = now;

      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const globeSize = Math.min(width, height) * 0.32;

      const rot = now * 0.00025;

      // subtle vignette
      const vignette = ctx.createRadialGradient(cx, cy, globeSize * 0.2, cx, cy, globeSize * 1.3);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, toHsla(bg, 0.35));
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // globe body
      const globeGrad = ctx.createRadialGradient(cx - globeSize * 0.25, cy - globeSize * 0.25, globeSize * 0.2, cx, cy, globeSize);
      globeGrad.addColorStop(0, toHsla(bg, 0.15));
      globeGrad.addColorStop(1, toHsla(bg, 0.65));
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.fillStyle = globeGrad;
      ctx.fill();

      // grid (digitized look)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.clip();

      ctx.lineWidth = 1;
      ctx.strokeStyle = toHsla(accent, 0.12);
      const gridCount = 10;
      for (let i = 1; i < gridCount; i++) {
        const y = cy - globeSize + (2 * globeSize * i) / gridCount;
        ctx.beginPath();
        ctx.ellipse(cx, y, globeSize, globeSize * 0.22, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(cx, cy, globeSize, globeSize * Math.cos(a) * 0.95, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // project points
      const projected = points
        .map((p) => ({
          ...p,
          proj: project(p.pos, rot, globeSize, cx, cy),
        }))
        .filter((p) => p.proj.z > -0.2);

      // connection arcs (simple: connect a few)
      const pairs: Array<[number, number]> = [
        [0, 1],
        [0, 2],
        [0, 4],
        [5, 7],
        [8, 9],
        [7, 9],
      ];

      ctx.lineWidth = 1;
      ctx.strokeStyle = toHsla(accent, 0.18);
      pairs.forEach(([i, j]) => {
        const a = project(points[i].pos, rot, globeSize, cx, cy);
        const b = project(points[j].pos, rot, globeSize, cx, cy);
        if (a.z <= -0.25 || b.z <= -0.25) return;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - globeSize * 0.12;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();
      });

      // points + pulse
      projected.forEach((p) => {
        const { x, y, scale } = p.proj;

        // glow
        ctx.beginPath();
        ctx.arc(x, y, 2.2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();

        // pulse ring
        const phase = (now * 0.002 + x * 0.01 + y * 0.01) % 1;
        ctx.beginPath();
        ctx.arc(x, y, (4 + 10 * phase) * scale, 0, Math.PI * 2);
        ctx.strokeStyle = toHsla(accent, 0.3 * (1 - phase));
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [points]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default DigitalGlobe;
