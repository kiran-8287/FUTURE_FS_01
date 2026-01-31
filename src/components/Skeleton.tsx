import { motion } from 'framer-motion';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
}

const Skeleton = ({ className = "", width, height, borderRadius = "0.75rem" }: SkeletonProps) => {
    return (
        <motion.div
            className={`relative overflow-hidden bg-muted/20 ${className}`}
            style={{ width, height, borderRadius }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </motion.div>
    );
};

export default Skeleton;
