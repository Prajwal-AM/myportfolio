import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Text3D, Center } from '@react-three/drei';
import type { Mesh } from 'three';

function WireframeCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial color="#39ff14" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <WireframeCube />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}
