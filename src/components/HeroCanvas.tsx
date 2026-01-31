import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingLogo() {
    const mesh = useRef<THREE.Mesh>(null!);

    // Create a subtle geometric shape
    const torusGeometry = useMemo(() => new THREE.TorusGeometry(10, 3, 16, 100), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = t * 0.2;
        mesh.current.rotation.y = t * 0.3;
        mesh.current.position.y = Math.sin(t) * 0.5;
    });

    return (
        <mesh ref={mesh} geometry={torusGeometry}>
            <meshNormalMaterial opacity={0.1} transparent />
        </mesh>
    );
}

const HeroCanvas = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingLogo />
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
