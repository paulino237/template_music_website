"use client"
import { motion } from "framer-motion";

export default function MotionFlipReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -12, scale: 0.99 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.05, margin: "-10% 0% -10% 0%" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" as any }}
    >
      {children}
    </motion.div>
  );
}