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

// Generate dot-matrix land points for Stripe-style globe
const generateLandPoints = (): [number, number][] => {
  const points: [number, number][] = [];
  const step = 2.2; // Denser dots for refined pixel effect
  
  const landMasses: { minLat: number; maxLat: number; minLon: number; maxLon: number; shape?: (lat: number, lon: number) => boolean }[] = [
    // North America
    { minLat: 25, maxLat: 72, minLon: -170, maxLon: -55, shape: (lat, lon) => {
      if (lat > 60) return lon > -170 && lon < -60;
      if (lat > 50) return lon > -130 && lon < -55;
      if (lat > 40) return lon > -130 && lon < -65;
      if (lat > 30) return lon > -125 && lon < -75;
      return lon > -120 && lon < -80;
    }},
    // Central America
    { minLat: 7, maxLat: 25, minLon: -120, maxLon: -75, shape: (lat, lon) => {
      return lon > -105 - (25 - lat) * 0.5 && lon < -80 + (25 - lat) * 0.3;
    }},
    // South America
    { minLat: -56, maxLat: 12, minLon: -82, maxLon: -34, shape: (lat, lon) => {
      if (lat > 0) return lon > -80 && lon < -50;
      if (lat > -20) return lon > -75 && lon < -40;
      if (lat > -35) return lon > -72 && lon < -40;
      return lon > -75 && lon < -60;
    }},
    // Europe
    { minLat: 35, maxLat: 72, minLon: -10, maxLon: 40, shape: (lat, lon) => {
      if (lat > 65) return lon > 5 && lon < 35;
      if (lat > 55) return lon > -5 && lon < 40;
      return lon > -10 && lon < 35;
    }},
    // Africa
    { minLat: -35, maxLat: 37, minLon: -18, maxLon: 52, shape: (lat, lon) => {
      if (lat > 25) return lon > -18 && lon < 35;
      if (lat > 10) return lon > -18 && lon < 52;
      if (lat > -5) return lon > -10 && lon < 45;
      if (lat > -20) return lon > 10 && lon < 45;
      return lon > 15 && lon < 35;
    }},
    // Middle East / Arabia
    { minLat: 12, maxLat: 42, minLon: 35, maxLon: 65, shape: (lat, lon) => {
      if (lat > 35) return lon > 35 && lon < 55;
      if (lat > 25) return lon > 35 && lon < 60;
      return lon > 40 && lon < 60;
    }},
    // Russia/North Asia
    { minLat: 50, maxLat: 78, minLon: 40, maxLon: 180, shape: (lat, lon) => {
      if (lat > 70) return lon > 60 && lon < 180;
      return lon > 40 && lon < 180;
    }},
    // South/Southeast Asia
    { minLat: 8, maxLat: 50, minLon: 65, maxLon: 145, shape: (lat, lon) => {
      if (lat > 40) return lon > 70 && lon < 135;
      if (lat > 30) return lon > 65 && lon < 125;
      if (lat > 20) return lon > 70 && lon < 110;
      return lon > 95 && lon < 110;
    }},
    // China/East Asia
    { minLat: 18, maxLat: 55, minLon: 100, maxLon: 145, shape: (lat, lon) => {
      if (lat > 45) return lon > 115 && lon < 145;
      if (lat > 35) return lon > 105 && lon < 145;
      return lon > 100 && lon < 125;
    }},
    // Japan
    { minLat: 30, maxLat: 46, minLon: 128, maxLon: 146 },
    // Indonesia
    { minLat: -10, maxLat: 6, minLon: 95, maxLon: 142 },
    // Australia
    { minLat: -45, maxLat: -10, minLon: 112, maxLon: 155, shape: (lat, lon) => {
      if (lat > -20) return lon > 120 && lon < 150;
      if (lat > -30) return lon > 115 && lon < 155;
      return lon > 115 && lon < 150;
    }},
    // New Zealand
    { minLat: -48, maxLat: -34, minLon: 166, maxLon: 180 },
  ];

  for (let lat = -80; lat <= 80; lat += step) {
    for (let lon = -180; lon <= 180; lon += step) {
      for (const land of landMasses) {
        if (lat >= land.minLat && lat <= land.maxLat && 
            lon >= land.minLon && lon <= land.maxLon) {
          if (!land.shape || land.shape(lat, lon)) {
            points.push([lat, lon]);
            break;
          }
        }
      }
    }
  }
  return points;
};

const landPoints = generateLandPoints();

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

  // Pre-compute land point positions
  const landPointPositions = useMemo(() => {
    return landPoints.map(([lat, lon]) => latLonToSphere(lat, lon));
  }, []);

  // Connection pairs: [sourceIndex, destinationIndex]
  const connectionPairs: [number, number][] = useMemo(() => [
    [5, 0], [5, 1], [5, 3],
    [6, 0], [6, 1], [6, 2],
    [7, 2], [7, 3], [7, 4],
    [8, 0], [8, 2],
    [9, 0], [9, 1], [9, 2],
    [10, 1], [10, 3],
    [11, 0], [11, 1],
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

      // Dark globe background
      const oceanGrad = ctx.createRadialGradient(
        cx - globeSize * 0.2, cy - globeSize * 0.2, globeSize * 0.05,
        cx, cy, globeSize
      );
      oceanGrad.addColorStop(0, "hsla(220, 30%, 12%, 0.9)");
      oceanGrad.addColorStop(0.6, "hsla(220, 25%, 8%, 0.95)");
      oceanGrad.addColorStop(1, "hsla(220, 20%, 5%, 1)");
      
      ctx.beginPath();
      ctx.arc(cx, cy, globeSize, 0, Math.PI * 2);
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // Atmosphere glow
      const glowGrad = ctx.createRadialGradient(cx, cy, globeSize * 0.85, cx, cy, globeSize * 1.25);
      glowGrad.addColorStop(0, "hsla(172, 50%, 40%, 0.03)");
      glowGrad.addColorStop(0.5, "hsla(172, 66%, 50%, 0.06)");
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

      // Draw dot-matrix land points
      landPointPositions.forEach((pos) => {
        const proj = project(pos, rot, globeSize, cx, cy);
        if (proj.z < -0.1) return; // Behind the globe
        
        const alpha = Math.max(0, Math.min(1, (proj.z + 0.2) * 1.5));
        const dotSize = 0.9 * proj.scale * (0.6 + alpha * 0.4);
        
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(172, 60%, 55%, ${0.75 * alpha})`;
        ctx.fill();
      });

      // Project all partner locations
      const projected = points.map((p) => ({ ...p, proj: project(p.pos, rot, globeSize, cx, cy) }));

      // Draw connection arcs with particles
      connectionPairs.forEach(([srcIdx, dstIdx], pathIdx) => {
        const src = projected[srcIdx];
        const dst = projected[dstIdx];
        
        if (src.proj.z <= -0.35 && dst.proj.z <= -0.35) return;

        const a = src.proj;
        const b = dst.proj;

        const dist = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        const arcHeight = Math.min(globeSize * 0.35, dist * 0.4);
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - arcHeight;

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

            const particleGrad = ctx.createRadialGradient(px, py, 0, px, py, 10);
            particleGrad.addColorStop(0, `hsla(172, 80%, 75%, ${0.9 * avgVisibility})`);
            particleGrad.addColorStop(0.4, `hsla(172, 70%, 60%, ${0.4 * avgVisibility})`);
            particleGrad.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(px, py, 10, 0, Math.PI * 2);
            ctx.fillStyle = particleGrad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(172, 90%, 90%, ${avgVisibility})`;
            ctx.fill();

            particle.progress += particle.speed;
            if (particle.progress > 1) particle.progress = 0;
          });
      });

      // Draw partner location points
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
  }, [points, connectionPairs, landPointPositions]);

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
    <section className="bg-section-dark pt-40 pb-56 relative gradient-fade-to-light">
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
    </section>
  );
};

export default DataPartnersSection;