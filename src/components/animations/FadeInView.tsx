import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directionOffset[direction]?.y,
        x: isInView ? 0 : directionOffset[direction]?.x,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;