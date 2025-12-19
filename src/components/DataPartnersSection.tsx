import React, { useEffect, useMemo, useRef } from "react";
import { Globe, Users, Building2, MapPin } from "lucide-react";

type PartnerLocation = {
  name: string;
  lat: number;
  lon: number;
  type: "source" | "destination";
};

// Data sources and destinations
const partnerLocations: PartnerLocation[] = [
  // Destinations (Europe & US)
  { name: "Paris", lat: 48.8566, lon: 2.3522, type: "destination" },
  { name: "Berlin", lat: 52.52, lon: 13.405, type: "destination" },
  { name: "New York", lat: 40.7128, lon: -74.006, type: "destination" },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194, type: "destination" },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437, type: "destination" },
  // Sources
  { name: "Beijing", lat: 39.9042, lon: 116.4074, type: "source" },
  { name: "Mumbai", lat: 19.076, lon: 72.8777, type: "source" },
  { name: "Mexico City", lat: 19.4326, lon: -99.1332, type: "source" },
  { name: "Montevideo", lat: -34.9011, lon: -56.1645, type: "source" },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333, type: "source" },
  { name: "Kuala Lumpur", lat: 3.139, lon: 101.6869, type: "source" },
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473, type: "source" },
  { name: "Riyadh", lat: 24.7136, lon: 46.6753, type: "source" },
];

// More detailed continent outlines for realistic Earth look
const continents = {
  northAmerica: [
    [60, -140], [70, -140], [72, -100], [70, -85], [60, -80], [55, -60], [45, -65],
    [40, -70], [30, -80], [25, -80], [20, -90], [18, -100], [22, -105], [25, -110],
    [30, -115], [35, -120], [40, -125], [48, -125], [55, -130], [60, -140]
  ],
  centralAmerica: [
    [18, -100], [20, -90], [15, -85], [10, -85], [8, -80], [10, -75], [8, -77],
    [15, -90], [18, -100]
  ],
  southAmerica: [
    [10, -75], [12, -70], [10, -65], [5, -55], [0, -50], [-5, -35], [-15, -40],
    [-25, -45], [-35, -55], [-45, -65], [-55, -68], [-55, -70], [-50, -75],
    [-40, -73], [-30, -72], [-20, -70], [-15, -75], [-5, -80], [0, -80], [5, -77], [10, -75]
  ],
  europe: [
    [70, -10], [72, 25], [70, 30], [68, 28], [60, 30], [55, 20], [55, 10],
    [50, 5], [45, -5], [36, -10], [36, 0], [38, 5], [42, 3], [43, 8],
    [45, 10], [45, 15], [42, 18], [40, 20], [42, 28], [45, 30], [48, 22],
    [52, 22], [55, 25], [58, 28], [62, 30], [70, -10]
  ],
  africa: [
    [37, -10], [35, 10], [32, 32], [30, 32], [22, 37], [12, 44], [10, 50],
    [0, 42], [-10, 40], [-20, 35], [-25, 32], [-35, 20], [-35, 18],
    [-30, 15], [-20, 12], [-10, 8], [0, 5], [5, -5], [5, -10], [10, -15],
    [15, -17], [20, -17], [25, -15], [30, -10], [35, -5], [37, -10]
  ],
  middleEast: [
    [42, 28], [40, 45], [38, 48], [32, 48], [28, 48], [24, 52], [22, 55],
    [18, 52], [15, 45], [12, 44], [22, 37], [28, 35], [32, 32], [35, 36],
    [38, 40], [40, 42], [42, 28]
  ],
  asia: [
    [72, 60], [78, 100], [75, 140], [70, 180], [65, 170], [55, 140],
    [50, 145], [45, 142], [40, 140], [35, 135], [35, 130], [38, 125],
    [40, 120], [35, 120], [25, 120], [22, 115], [20, 110], [15, 110],
    [10, 105], [5, 103], [1, 104], [-5, 105], [-8, 115], [-8, 120],
    [5, 120], [10, 118], [18, 120], [22, 120], [28, 105], [25, 95],
    [28, 90], [22, 88], [20, 92], [15, 80], [10, 78], [8, 77], [10, 72],
    [22, 70], [25, 65], [30, 62], [35, 52], [42, 45], [45, 50], [50, 55],
    [55, 60], [60, 60], [65, 70], [70, 70], [72, 60]
  ],
  australia: [
    [-12, 130], [-12, 142], [-18, 146], [-25, 153], [-35, 150], [-38, 145],
    [-38, 140], [-35, 135], [-32, 130], [-30, 115], [-25, 114], [-20, 118],
    [-15, 125], [-12, 130]
  ],
  indonesia: [
    [-5, 95], [-8, 105], [-8, 115], [-5, 120], [-2, 125], [0, 130], [0, 140],
    [-5, 145], [-8, 140], [-5, 135], [-2, 130], [-5, 120], [-8, 115],
    [-5, 105], [-5, 95]
  ]
};

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

interface Particle {
  progress: number;
  speed: number;
  pathIndex: number;
}

const InteractiveGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const points = useMemo(() => {
    return partnerLocations.map((p) => ({
      ...p,
      pos: latLonToSphere(p.lat, p.lon),
    }));
  }, []);

  // Connection pairs: [sourceIndex, destinationIndex] - data flows FROM source TO destination
  const connectionPairs: [number, number][] = useMemo(() => [
    // China to destinations
    [5, 0], [5, 1], [5, 3],
    // India to destinations
    [6, 0], [6, 1], [6, 2],
    // Mexico to US
    [7, 2], [7, 3], [7, 4],
    // Uruguay to Europe/US
    [8, 0], [8, 2],
    // Brazil to destinations
    [9, 0], [9, 1], [9, 2],
    // Malaysia to destinations
    [10, 1], [10, 3],
    // South Africa to Europe
    [11, 0], [11, 1],
    // Saudi Arabia to Europe/US
    [12, 0], [12, 1], [12, 2],
  ], []);

  useEffect(() => {
    particlesRef.current = connectionPairs.flatMap((_, idx) => 
      Array.from({ length: 2 }, (_, i) => ({
        progress: (i / 2),
        speed: 0.002 + Math.random() * 0.0015,
        pathIndex: idx,
      }))
    );
  }, [connectionPairs]);

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

    const draw = (now: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const globeSize = Math.min(width, height) * 0.4;
      const rot = now * 0.00012;

      // Ocean gradient
      const oceanGrad = ctx.createRadialGradient(
        cx - globeSize * 0.25, cy - globeSize * 0.25, globeSize * 0.05,
        cx, cy, globeSize
      );
      oceanGrad.addColorStop(0, "hsla(210, 60%, 25%, 0.7)");
      oceanGrad.addColorStop(0.5, "hsla(215, 55%, 18%, 0.85)");
      oceanGrad.addColorStop(1, "hsla(220, 50%, 12%, 0.95)");
      
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // Atmosphere glow
      const glowGrad = ctx.createRadialGradient(cx, cy, globeSize * 0.85, cx, cy, globeSize * 1.25);
      glowGrad.addColorStop(0, "hsla(200, 70%, 60%, 0.05)");
      glowGrad.addColorStop(0.5, "hsla(172, 66%, 50%, 0.08)");
      glowGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize * 1.25, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Clip to globe
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.clip();

      // Draw continents with DataX brand teal/green colors
      const landColor = "hsla(172, 45%, 30%, 0.8)";
      const landBorder = "hsla(172, 55%, 45%, 0.6)";
      
      Object.entries(continents).forEach(([name, continent]) => {
        const projectedContinent = continent.map(([lat, lon]) => {
          const pos = latLonToSphere(lat, lon);
          return project(pos, rot, globeSize, cx, cy);
        });

        const avgZ = projectedContinent.reduce((sum, p) => sum + p.z, 0) / projectedContinent.length;
        if (avgZ < -0.25) return;

        const alpha = Math.max(0, Math.min(1, (avgZ + 0.4) * 1.5));
        
        ctx.beginPath();
        let started = false;
        projectedContinent.forEach((p, i) => {
          if (p.z > -0.3) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          }
        });
        ctx.closePath();
        
        ctx.fillStyle = landColor.replace("0.75", String(0.75 * alpha));
        ctx.fill();
        ctx.strokeStyle = landBorder.replace("0.5", String(0.5 * alpha));
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Subtle grid
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "hsla(200, 50%, 50%, 0.08)";
      for (let i = 1; i < 6; i++) {
        const y = cy - globeSize + (2 * globeSize * i) / 6;
        const radiusAtY = Math.sqrt(Math.max(0, globeSize * globeSize - Math.pow(y - cy, 2)));
        ctx.beginPath();
        ctx.ellipse(cx, y, radiusAtY, radiusAtY * 0.1, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Project all locations
      const projected = points.map((p) => ({ ...p, proj: project(p.pos, rot, globeSize, cx, cy) }));

      // Draw connection arcs with particles
      connectionPairs.forEach(([srcIdx, dstIdx], pathIdx) => {
        const src = projected[srcIdx];
        const dst = projected[dstIdx];
        
        if (src.proj.z <= -0.35 && dst.proj.z <= -0.35) return;

        const a = src.proj;
        const b = dst.proj;

        // Arc control point (higher arc for longer distances)
        const dist = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        const arcHeight = Math.min(globeSize * 0.35, dist * 0.4);
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - arcHeight;

        // Connection line with gradient
        const avgVisibility = (Math.max(0, a.z + 0.3) + Math.max(0, b.z + 0.3)) / 2;
        if (avgVisibility < 0.1) return;

        ctx.lineWidth = 1;
        const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        lineGrad.addColorStop(0, `hsla(172, 66%, 50%, ${0.15 * avgVisibility})`);
        lineGrad.addColorStop(0.5, `hsla(172, 66%, 60%, ${0.25 * avgVisibility})`);
        lineGrad.addColorStop(1, `hsla(172, 66%, 50%, ${0.15 * avgVisibility})`);
        ctx.strokeStyle = lineGrad;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();

        // Particles flowing along path
        particlesRef.current
          .filter(p => p.pathIndex === pathIdx)
          .forEach(particle => {
            const t = particle.progress;
            const px = (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * mx + t * t * b.x;
            const py = (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * my + t * t * b.y;

            // Particle glow
            const particleGrad = ctx.createRadialGradient(px, py, 0, px, py, 10);
            particleGrad.addColorStop(0, `hsla(172, 80%, 75%, ${0.9 * avgVisibility})`);
            particleGrad.addColorStop(0.4, `hsla(172, 70%, 60%, ${0.4 * avgVisibility})`);
            particleGrad.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(px, py, 10, 0, Math.PI * 2);
            ctx.fillStyle = particleGrad;
            ctx.fill();

            // Particle core
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(172, 90%, 90%, ${avgVisibility})`;
            ctx.fill();

            particle.progress += particle.speed;
            if (particle.progress > 1) particle.progress = 0;
          });
      });

      // Draw location points
      projected.forEach((p) => {
        if (p.proj.z < -0.2) return;
        
        const { x, y, scale } = p.proj;
        const alpha = Math.max(0, Math.min(1, (p.proj.z + 0.3) * 2));
        const isDestination = p.type === "destination";

        // Pulse effect
        const phase = (now * 0.0012 + p.lat * 0.05) % 1;
        ctx.beginPath();
        ctx.arc(x, y, (8 + 14 * phase) * scale, 0, Math.PI * 2);
        ctx.strokeStyle = isDestination 
          ? `hsla(45, 90%, 60%, ${0.35 * (1 - phase) * alpha})`
          : `hsla(172, 66%, 50%, ${0.3 * (1 - phase) * alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Point glow
        const pointGrad = ctx.createRadialGradient(x, y, 0, x, y, 6 * scale);
        if (isDestination) {
          pointGrad.addColorStop(0, `hsla(45, 95%, 75%, ${alpha})`);
          pointGrad.addColorStop(1, `hsla(45, 90%, 55%, ${alpha})`);
        } else {
          pointGrad.addColorStop(0, `hsla(172, 75%, 75%, ${alpha})`);
          pointGrad.addColorStop(1, `hsla(172, 66%, 50%, ${alpha})`);
        }
        ctx.beginPath();
        ctx.arc(x, y, 4 * scale, 0, Math.PI * 2);
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
  }, [points, connectionPairs]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
};

const stats = [
  { icon: Globe, value: "4+", label: "Countries" },
  { icon: Building2, value: "50+", label: "Data Partners" },
  { icon: Users, value: "Millions", label: "Patient Records" },
  { icon: MapPin, value: "6", label: "Key Locations" },
];

const DataPartnersSection: React.FC = () => {
  return (
    <section className="bg-section-dark pt-24 pb-40 relative">
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
                across Asia, Latin America, Africa, and the Middle East flowing to Europe and the US.
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
