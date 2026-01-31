import { useState } from 'react';
import Skeleton from './Skeleton';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectImageProps {
    src: string;
    alt: string;
    className?: string;
}

const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <AnimatePresence>
                {!isLoaded && (
                    <div className="absolute inset-0 z-10">
                        <Skeleton width="100%" height="100%" borderRadius={0} />
                    </div>
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full h-full object-cover transition-transform duration-500`}
            />
        </div>
    );
};

export default ProjectImage;
