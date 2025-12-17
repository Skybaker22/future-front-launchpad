import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// Partner locations (lat, lon)
const partnerLocations = [
  { name: 'Munich', lat: 48.1351, lon: 11.5820, region: 'Europe' },
  { name: 'Berlin', lat: 52.5200, lon: 13.4050, region: 'Europe' },
  { name: 'London', lat: 51.5074, lon: -0.1278, region: 'Europe' },
  { name: 'Paris', lat: 48.8566, lon: 2.3522, region: 'Europe' },
  { name: 'Zurich', lat: 47.3769, lon: 8.5417, region: 'Europe' },
  { name: 'New York', lat: 40.7128, lon: -74.0060, region: 'Americas' },
  { name: 'Boston', lat: 42.3601, lon: -71.0589, region: 'Americas' },
  { name: 'San Francisco', lat: 37.7749, lon: -122.4194, region: 'Americas' },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503, region: 'Asia' },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198, region: 'Asia' },
  { name: 'Sydney', lat: -33.8688, lon: 151.2093, region: 'Oceania' },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

function GlobeGrid() {
  const gridLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    const radius = 2;
    
    // Latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      for (let lon = 0; lon <= 360; lon += 5) {
        points.push(latLonToVector3(lat, lon, radius));
      }
      lines.push(points);
    }
    
    // Longitude lines
    for (let lon = 0; lon < 360; lon += 30) {
      const points: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLonToVector3(lat, lon, radius));
      }
      lines.push(points);
    }
    
    return lines;
  }, []);

  return (
    <>
      {gridLines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#2dd4bf"
          lineWidth={0.5}
          opacity={0.15}
          transparent
        />
      ))}
    </>
  );
}

function PartnerPoints() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 2.02;

  const points = useMemo(() => {
    return partnerLocations.map(loc => ({
      ...loc,
      position: latLonToVector3(loc.lat, loc.lon, radius),
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <group key={i} position={point.position}>
          {/* Glowing point */}
          <mesh>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#2dd4bf" />
          </mesh>
          {/* Pulse ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.06, 0.08, 32]} />
            <meshBasicMaterial color="#2dd4bf" transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const radius = 2.02;
  
  const connections = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    
    // Create some connections between partners
    const connectionPairs = [
      [0, 1], [0, 2], [0, 4], [1, 2], [2, 3], [3, 4],
      [5, 6], [5, 7], [6, 7],
      [8, 9], [9, 10],
      [0, 5], [4, 8], [7, 9],
    ];
    
    connectionPairs.forEach(([i, j]) => {
      const start = latLonToVector3(
        partnerLocations[i].lat,
        partnerLocations[i].lon,
        radius
      );
      const end = latLonToVector3(
        partnerLocations[j].lat,
        partnerLocations[j].lon,
        radius
      );
      lines.push({ start, end });
    });
    
    return lines;
  }, []);

  return (
    <>
      {connections.map((conn, i) => {
        // Create curved arc
        const mid = new THREE.Vector3()
          .addVectors(conn.start, conn.end)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(2.3);
        
        const curve = new THREE.QuadraticBezierCurve3(conn.start, mid, conn.end);
        const points = curve.getPoints(30);
        
        return (
          <Line
            key={i}
            points={points}
            color="#2dd4bf"
            lineWidth={1}
            opacity={0.3}
            transparent
          />
        );
      })}
    </>
  );
}

function RotatingGlobe() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Globe sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshBasicMaterial
          color="#0a1628"
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[2.01, 64, 64]}>
        <meshBasicMaterial
          color="#2dd4bf"
          transparent
          opacity={0.05}
        />
      </Sphere>
      
      <GlobeGrid />
      <PartnerPoints />
      <ConnectionLines />
    </group>
  );
}

const Globe: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
};

export default Globe;
