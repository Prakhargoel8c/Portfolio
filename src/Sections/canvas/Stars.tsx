import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useRef, useState } from "react";

const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current === null) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;