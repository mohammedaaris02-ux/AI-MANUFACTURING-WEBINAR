import React from 'react';
import { motion } from 'framer-motion';

export const RevealOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 24,
  className = '',
  once = true
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeUp = ({ children, delay = 0, duration = 0.55, className = '' }) => (
  <RevealOnScroll direction="up" delay={delay} duration={duration} className={className}>
    {children}
  </RevealOnScroll>
);

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => (
  <RevealOnScroll direction="none" delay={delay} duration={duration} className={className}>
    {children}
  </RevealOnScroll>
);

export const ScaleReveal = ({ children, delay = 0, duration = 0.6, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);
