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
  { name: "Zurich", lat: 47.3769, lon: 8.5417, region: "Europe" },
  { name: "New York", lat: 40.7128, lon: -74.006, region: "Americas" },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194, region: "Americas" },
];

// Simplified world map continent outlines (lat, lon points)
const continents = {
  europe: [
    [71, -25], [71, 40], [60, 60], [45, 40], [36, -10], [40, -10], [45, 0], [50, -5], [55, -10], [60, -10], [71, -25]
  ],
  africa: [
    [37, -10], [35, 40], [10, 50], [-35, 20], [-35, 15], [5, -15], [15, -20], [30, -10], [37, -10]
  ],
  asia: [
    [70, 60], [70, 180], [50, 140], [35, 140], [10, 120], [0, 100], [10, 80], [25, 65], [35, 45], [45, 40], [60, 60], [70, 60]
  ],
  northAmerica: [
    [70, -170], [70, -60], [50, -55], [25, -80], [15, -90], [20, -105], [30, -120], [50, -130], [60, -140], [70, -170]
  ],
  southAmerica: [
    [12, -70], [5, -35], [-10, -35], [-55, -70], [-50, -75], [-20, -80], [0, -80], [12, -70]
  ],
  australia: [
    [-10, 115], [-10, 155], [-45, 150], [-40, 115], [-10, 115]
  ],
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

// Particle system for data flow
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

  // Initialize particles
  useEffect(() => {
    const connectionPairs = [[0, 1], [0, 2], [0, 3], [4, 5], [2, 4]];
    particlesRef.current = connectionPairs.flatMap((_, idx) => 
      Array.from({ length: 3 }, (_, i) => ({
        progress: (i / 3),
        speed: 0.003 + Math.random() * 0.002,
        pathIndex: idx,
      }))
    );
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

    const connectionPairs: [number, number][] = [[0, 1], [0, 2], [0, 3], [4, 5], [2, 4]];

    const draw = (now: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;
      const globeSize = Math.min(width, height) * 0.38;
      const rot = now * 0.00015;

      // Globe body gradient
      const globeGrad = ctx.createRadialGradient(
        cx - globeSize * 0.3, cy - globeSize * 0.3, globeSize * 0.1,
        cx, cy, globeSize
      );
      globeGrad.addColorStop(0, "hsla(220, 70%, 18%, 0.5)");
      globeGrad.addColorStop(1, "hsla(220, 70%, 8%, 0.9)");
      
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.fillStyle = globeGrad;
      ctx.fill();

      // Outer glow
      const glowGrad = ctx.createRadialGradient(cx, cy, globeSize * 0.9, cx, cy, globeSize * 1.4);
      glowGrad.addColorStop(0, "hsla(172, 66%, 50%, 0.08)");
      glowGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Clip to globe
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.clip();

      // Draw continents
      ctx.fillStyle = "hsla(172, 50%, 40%, 0.25)";
      ctx.strokeStyle = "hsla(172, 66%, 50%, 0.4)";
      ctx.lineWidth = 1;

      Object.values(continents).forEach((continent) => {
        const projectedContinent = continent.map(([lat, lon]) => {
          const pos = latLonToSphere(lat, lon);
          return project(pos, rot, globeSize, cx, cy);
        });

        // Only draw if mostly visible
        const avgZ = projectedContinent.reduce((sum, p) => sum + p.z, 0) / projectedContinent.length;
        if (avgZ < -0.3) return;

        ctx.beginPath();
        projectedContinent.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.globalAlpha = Math.max(0, Math.min(1, (avgZ + 0.5) * 1.2));
        ctx.fill();
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Grid lines
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "hsla(172, 66%, 50%, 0.1)";

      for (let i = 1; i < 6; i++) {
        const y = cy - globeSize + (2 * globeSize * i) / 6;
        const radiusAtY = Math.sqrt(Math.max(0, globeSize * globeSize - Math.pow(y - cy, 2)));
        ctx.beginPath();
        ctx.ellipse(cx, y, radiusAtY, radiusAtY * 0.12, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Project partner locations
      const projected = points
        .map((p) => ({ ...p, proj: project(p.pos, rot, globeSize, cx, cy) }))
        .filter((p) => p.proj.z > -0.15);

      // Connection lines with particles
      ctx.lineWidth = 1.5;
      connectionPairs.forEach(([i, j], pathIdx) => {
        const a = project(points[i].pos, rot, globeSize, cx, cy);
        const b = project(points[j].pos, rot, globeSize, cx, cy);
        if (a.z <= -0.2 || b.z <= -0.2) return;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - globeSize * 0.18;

        // Draw connection line
        const lineGrad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        lineGrad.addColorStop(0, "hsla(172, 66%, 50%, 0.2)");
        lineGrad.addColorStop(0.5, "hsla(172, 66%, 60%, 0.35)");
        lineGrad.addColorStop(1, "hsla(172, 66%, 50%, 0.2)");
        ctx.strokeStyle = lineGrad;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
        ctx.stroke();

        // Draw particles on this path
        particlesRef.current
          .filter(p => p.pathIndex === pathIdx)
          .forEach(particle => {
            const t = particle.progress;
            // Quadratic bezier point calculation
            const px = (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * mx + t * t * b.x;
            const py = (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * my + t * t * b.y;

            // Particle glow
            const particleGrad = ctx.createRadialGradient(px, py, 0, px, py, 8);
            particleGrad.addColorStop(0, "hsla(172, 80%, 70%, 0.9)");
            particleGrad.addColorStop(0.5, "hsla(172, 70%, 60%, 0.4)");
            particleGrad.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(px, py, 8, 0, Math.PI * 2);
            ctx.fillStyle = particleGrad;
            ctx.fill();

            // Particle core
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "hsl(172, 80%, 85%)";
            ctx.fill();

            // Update particle position
            particle.progress += particle.speed;
            if (particle.progress > 1) particle.progress = 0;
          });
      });

      // Draw location points with pulse
      projected.forEach((p) => {
        const { x, y, scale } = p.proj;

        // Outer pulse
        const phase = (now * 0.001 + p.lat * 0.1) % 1;
        ctx.beginPath();
        ctx.arc(x, y, (8 + 16 * phase) * scale, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(172, 66%, 50%, ${0.3 * (1 - phase)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner glow
        const pointGrad = ctx.createRadialGradient(x, y, 0, x, y, 5 * scale);
        pointGrad.addColorStop(0, "hsl(172, 70%, 80%)");
        pointGrad.addColorStop(1, "hsl(172, 66%, 50%)");
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
  { icon: Globe, value: "4+", label: "Countries" },
  { icon: Building2, value: "50+", label: "Data Partners" },
  { icon: Users, value: "Millions", label: "Patient Records" },
  { icon: MapPin, value: "6", label: "Key Locations" },
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
                in multiple countries.
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
