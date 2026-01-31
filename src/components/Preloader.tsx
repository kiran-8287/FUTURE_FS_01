import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(onComplete, 500);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        >
            <div className="relative flex flex-col items-center">
                {/* Branded Logo/Initials */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="text-6xl md:text-8xl font-bold tracking-tighter text-primary flex items-center gap-1">
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            S
                        </motion.span>
                        <motion.span
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-gray-400 dark:text-gray-400"
                        >
                            K
                        </motion.span>
                    </div>
                </motion.div>

                {/* Progress Indicator */}
                {/* Progress Indicator */}
                <div className="w-48 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full flex justify-start">
                    <motion.div
                        className="h-full bg-black dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>

                <motion.span
                    className="mt-4 text-xs font-mono text-muted-foreground tracking-widest uppercase"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Loading Experience {progress}%
                </motion.span>
            </div>

            {/* Background Mesh foundations - subtle */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
            </div>
        </motion.div>
    );
};

export default Preloader;
