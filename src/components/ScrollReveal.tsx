import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: '0px 0px -10% 0px',
  });

  useEffect(() => {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug('[ScrollReveal]', { inView, direction, top: entry?.boundingClientRect.top });
    }
  }, [inView, direction, entry]);

  const offset = {
    up: { x: 0, y: 32 },
    down: { x: 0, y: -32 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  }[direction];

  const x = inView ? 0 : offset.x;
  const y = inView ? 0 : offset.y;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
