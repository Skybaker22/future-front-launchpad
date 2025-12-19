import React, { useEffect, useMemo, useRef } from "react";
import { Globe, Users, Building2, MapPin } from "lucide-react";

type PartnerLocation = {
  name: string;
  lat: number;
  lon: number;
  region: string;
};

const partnerLocations: PartnerLocation[] = [
  { name: "Munich", lat: 48.1351, lon: 11.582, region: "Europe" },
  { name: "Berlin", lat: 52.52, lon: 13.405, region: "Europe" },
  { name: "London", lat: 51.5074, lon: -0.1278, region: "Europe" },
  { name: "Paris", lat: 48.8566, lon: 2.3522, region: "Europe" },
  { name: "Zurich", lat: 47.3769, lon: 8.5417, region: "Europe" },
  { name: "Amsterdam", lat: 52.3676, lon: 4.9041, region: "Europe" },
  { name: "New York", lat: 40.7128, lon: -74.006, region: "Americas" },
  { name: "Boston", lat: 42.3601, lon: -71.0589, region: "Americas" },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194, region: "Americas" },
  { name: "Toronto", lat: 43.6532, lon: -79.3832, region: "Americas" },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503, region: "Asia Pacific" },
  { name: "Singapore", lat: 1.3521, lon: 103.8198, region: "Asia Pacific" },
  { name: "Sydney", lat: -33.8688, lon: 151.2093, region: "Asia Pacific" },
  { name: "Seoul", lat: 37.5665, lon: 126.978, region: "Asia Pacific" },
];

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function latLonToSphere(lat: number, lon: number) {
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
  const cos = Math.cos(rotY);
  const sin = Math.sin(rotY);
  const x = p.x * cos + p.z * sin;
  const z = -p.x * sin + p.z * cos;
  const y = p.y;
  const scale = perspective / (perspective - z);
  return { x: cx + x * size * scale, y: cy + y * size * scale, z, scale };
}

const InteractiveGlobe: React.FC = () => {
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

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Fixed HSL colors
    const accent = "hsl(172, 66%, 50%)";
    const accentLight = "hsl(172, 66%, 70%)";

    const draw = (now: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const globeSize = Math.min(width, height) * 0.38;
      const rot = now * 0.0002;

      // Globe body gradient
      const globeGrad = ctx.createRadialGradient(
        cx - globeSize * 0.3, cy - globeSize * 0.3, globeSize * 0.1,
        cx, cy, globeSize
      );
      globeGrad.addColorStop(0, "hsla(220, 70%, 15%, 0.4)");
      globeGrad.addColorStop(1, "hsla(220, 70%, 8%, 0.8)");
      
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.fillStyle = globeGrad;
      ctx.fill();

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, globeSize * 0.9, cx, cy, globeSize * 1.3);
      glowGrad.addColorStop(0, "hsla(172, 66%, 50%, 0.1)");
      glowGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Grid lines
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.clip();

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "hsla(172, 66%, 50%, 0.15)";

      // Latitude lines
      for (let i = 1; i < 8; i++) {
        const y = cy - globeSize + (2 * globeSize * i) / 8;
        const radiusAtY = Math.sqrt(globeSize * globeSize - Math.pow(y - cy, 2));
        ctx.beginPath();
        ctx.ellipse(cx, y, radiusAtY, radiusAtY * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI + rot;
        ctx.beginPath();
        ctx.ellipse(cx, cy, globeSize * Math.abs(Math.cos(angle)), globeSize, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Project and draw points
      const projected = points
        .map((p) => ({ ...p, proj: project(p.pos, rot, globeSize, cx, cy) }))
        .filter((p) => p.proj.z > -0.15);

      // Connection lines
      const pairs: [number, number][] = [
        [0, 1], [0, 2], [0, 4], [2, 3], [6, 7], [7, 8], [10, 11], [11, 12]
      ];

      ctx.lineWidth = 1;
      pairs.forEach(([i, j]) => {
        const a = project(points[i].pos, rot, globeSize, cx, cy);
        const b = project(points[j].pos, rot, globeSize, cx, cy);
        if (a.z <= -0.2 || b.z <= -0.2) return;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - globeSize * 0.15;

        const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        lineGrad.addColorStop(0, "hsla(172, 66%, 50%, 0.3)");
        lineGrad.addColorStop(0.5, "hsla(172, 66%, 60%, 0.5)");
        lineGrad.addColorStop(1, "hsla(172, 66%, 50%, 0.3)");
        ctx.strokeStyle = lineGrad;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();
      });

      // Draw points with pulse effect
      projected.forEach((p) => {
        const { x, y, scale } = p.proj;

        // Outer pulse
        const phase = (now * 0.001 + p.lat * 0.1) % 1;
        ctx.beginPath();
        ctx.arc(x, y, (6 + 12 * phase) * scale, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(172, 66%, 50%, ${0.25 * (1 - phase)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glow
        const pointGrad = ctx.createRadialGradient(x, y, 0, x, y, 4 * scale);
        pointGrad.addColorStop(0, accentLight);
        pointGrad.addColorStop(1, accent);
        ctx.beginPath();
        ctx.arc(x, y, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = pointGrad;
        ctx.fill();
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
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
};

const stats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Building2, value: "200+", label: "Data Partners" },
  { icon: Users, value: "500M+", label: "Patient Records" },
  { icon: MapPin, value: "14", label: "Key Locations" },
];

const DataPartnersSection: React.FC = () => {
  return (
    <section className="bg-section-dark py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Global Network
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
                Data Partners<br />
                <span className="text-primary">Worldwide</span>
              </h2>
              <p className="text-gray-400 text-lg mt-6 max-w-lg">
                Access real-world healthcare data from trusted partners across the globe. 
                Our network spans hospitals, research institutions, and healthcare systems 
                in over 50 countries.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glassmorphism p-5 rounded-xl group hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Globe */}
          <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
            <InteractiveGlobe />
          </div>
        </div>
      </div>

      {/* Angled divider to next section */}
      <div className="angled-divider-to-light" />
    </section>
  );
};

export default DataPartnersSection;
