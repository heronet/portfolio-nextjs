import {
  Preload,
  useTexture,
  Float,
  Decal,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function ItemCanvas({ icon }: { icon: string }) {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      fallback={
        <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
      }
    >
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Item icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function Item({ icon }: { icon: string }) {
  const map = useTexture(icon);
  return (
    <Float floatIntensity={5} speed={5}>
      <ambientLight />
      <directionalLight position={[0, 0, 1]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"white"}
          polygonOffset
          polygonOffsetFactor={-4}
          flatShading
        />
        <Decal
          map={map}
          scale={0.8}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
}
