
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload } from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

interface TShirtModelProps {
  color: string;
  logoTexture?: string | null;
}

const TShirtModel: React.FC<TShirtModelProps> = ({ color, logoTexture }) => {
  const shirtRef = useRef<THREE.Mesh>(null);

  // Convert hex color to Three.js color
  const threeColor = new THREE.Color(color);
  
  // Optional texture for logo
  const logoMap = logoTexture ? useTexture(logoTexture) : null;
  if (logoMap) {
    logoMap.wrapS = THREE.RepeatWrapping;
    logoMap.wrapT = THREE.RepeatWrapping;
  }

  useFrame((state) => {
    if (!shirtRef.current) return;
    // Add subtle animation
    shirtRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });

  return (
    <group>
      {/* T-shirt body */}
      <mesh ref={shirtRef} castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1, 2, 32]} />
        <meshStandardMaterial 
          color={threeColor} 
          roughness={0.8} 
          metalness={0.1}
          map={logoTexture ? logoMap : null}
        />
      </mesh>
      
      {/* Sleeves */}
      <mesh position={[0.9, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.4, 0.3, 1, 16]} />
        <meshStandardMaterial color={threeColor} roughness={0.8} metalness={0.1} />
      </mesh>
      
      <mesh position={[-0.9, 0.2, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.4, 0.3, 1, 16]} />
        <meshStandardMaterial color={threeColor} roughness={0.8} metalness={0.1} />
      </mesh>
      
      {/* Collar */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color={threeColor} roughness={0.8} metalness={0.1} />
      </mesh>
    </group>
  );
};

interface TShirt3DModelProps {
  color: string;
  logoTexture?: string | null;
}

const TShirt3DModel: React.FC<TShirt3DModelProps> = ({ color, logoTexture }) => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[1, 3, 2]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight 
          position={[-3, 1, 0]} 
          intensity={0.5} 
          angle={0.3} 
          penumbra={1} 
          castShadow 
        />
        <TShirtModel color={color} logoTexture={logoTexture} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={isMobile ? 0.7 : 0.5}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TShirt3DModel;
