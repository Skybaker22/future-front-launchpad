import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Partner locations (lat, lon)
const partnerLocations = [
  { name: 'Munich', lat: 48.1351, lon: 11.5820 },
  { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'Zurich', lat: 47.3769, lon: 8.5417 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Boston', lat: 42.3601, lon: -71.0589 },
  { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

function GlobeWireframe() {
  const wireframeRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 2);
    const wireframe = new THREE.WireframeGeometry(geo);
    return wireframe;
  }, []);

  return (
    <lineSegments ref={wireframeRef} geometry={geometry}>
      <lineBasicMaterial color="#2dd4bf" transparent opacity={0.15} />
    </lineSegments>
  );
}

function PartnerPoints() {
  const radius = 2.02;

  const points = useMemo(() => {
    return partnerLocations.map(loc => ({
      ...loc,
      position: latLonToVector3(loc.lat, loc.lon, radius),
    }));
  }, []);

  return (
    <group>
      {points.map((point, i) => (
        <mesh key={i} position={point.position}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#2dd4bf" />
        </mesh>
      ))}
    </group>
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
        <meshBasicMaterial color="#0a1628" transparent opacity={0.85} />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[2.01, 64, 64]}>
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.03} />
      </Sphere>
      
      <GlobeWireframe />
      <PartnerPoints />
    </group>
  );
}

const Globe3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
};

export default Globe3D;
