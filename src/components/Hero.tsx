import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
    const ref = useRef<THREE.Points>(null);

    // Generate random points in a sphere
    const positions = useMemo(() => {
        const count = 5000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 20 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#0088FF"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleField />
                </Canvas>
            </div>

            <div className="relative z-10 w-full text-center pointer-events-none mix-blend-difference text-white">
                <h1 className="text-[15vw] leading-none font-black tracking-tighter select-none">
                    AYAN
                </h1>
                <div className="flex justify-between w-full max-w-5xl mx-auto px-4 mt-4 font-mono text-xs md:text-sm text-accent tracking-widest opacity-80">
                    <span>AI ENGINEER</span>
                    <span>AVAILABLE FOR HIRE</span>
                </div>
            </div>
        </section>
    );
};
