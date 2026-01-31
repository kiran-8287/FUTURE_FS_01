import { motion } from 'framer-motion';

const MeshBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="mesh-blob w-[600px] h-[600px] top-[-10%] left-[-10%] bg-blue-500/30"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="mesh-blob w-[500px] h-[500px] top-[20%] right-[-5%] bg-purple-500/20"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="mesh-blob w-[700px] h-[700px] bottom-[-10%] left-[20%] bg-teal-500/20"
                />
            </div>
            <div className="noise-overlay" />
        </div>
    );
};

export default MeshBackground;
