"use client";

import type { PointerEvent, ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.25,
  });

  return <motion.div className="page-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function AmbientLights() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient-lights" aria-hidden="true">
      <motion.div
        className="ambient-light light-one"
        animate={reduceMotion ? undefined : { x: [0, 38, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-light light-two"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, 34, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="ambient-light light-three"
        animate={reduceMotion ? undefined : { x: [0, 22, -18, 0], y: [0, 18, -12, 0], rotate: [-10, 4, -6, -10] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 2.4 }}
      />
      <motion.div
        className="light-beam"
        animate={reduceMotion ? undefined : { opacity: [0.22, 0.38, 0.22], rotate: [-9, -5, -9] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}

export function RevealSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.992 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.72, ease }}
    >
      {children}
    </motion.section>
  );
}

export function HeroReveal({
  children,
  className,
  delay = 0,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  ariaLabel?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.82, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MicroscopeMotion({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(45);
  const rotateX = useSpring(rotateXValue, { stiffness: 160, damping: 24, mass: 0.4 });
  const rotateY = useSpring(rotateYValue, { stiffness: 160, damping: 24, mass: 0.4 });
  const innerX = useTransform(rotateY, [-7, 7], [-8, 8]);
  const innerY = useTransform(rotateX, [-7, 7], [8, -8]);
  const scrollOffset = useTransform(scrollYProgress, [0, 0.42], [0, 54]);
  const smoothScrollOffset = useSpring(scrollOffset, { stiffness: 90, damping: 24, mass: 0.35 });
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,.7), rgba(217,245,109,.18) 18%, transparent 48%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    rotateYValue.set((px - 0.5) * 14);
    rotateXValue.set((0.5 - py) * 14);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    glareX.set(50);
    glareY.set(45);
  };

  return (
    <motion.div
      className="microscope-field"
      style={{ rotateX, rotateY, y: reduceMotion ? 0 : smoothScrollOffset, transformPerspective: 1100 }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.16, ease }}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <motion.div className="microscope-inner" style={{ x: innerX, y: innerY }}>
        {children}
      </motion.div>
      <motion.div className="microscope-glare" style={{ background: glare }} aria-hidden="true" />
    </motion.div>
  );
}

export function DepthCard({
  children,
  className,
  index = 0,
}: {
  children: ReactNode;
  className: string;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const rotateX = useSpring(rotateXValue, { stiffness: 220, damping: 28, mass: 0.45 });
  const rotateY = useSpring(rotateYValue, { stiffness: 220, damping: 28, mass: 0.45 });
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(217,245,109,.16), transparent 42%)`;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    rotateYValue.set((px - 0.5) * 5);
    rotateXValue.set((0.5 - py) * 5);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.article
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={reduceMotion ? false : { opacity: 0, y: 26, x: index % 2 === 0 ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.58, delay: Math.min(index * 0.04, 0.16), ease }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
    >
      <motion.span className="depth-glow" style={{ background: glow }} aria-hidden="true" />
      <div className="depth-content">{children}</div>
    </motion.article>
  );
}
