"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundParticles() {
  const [particles, setParticles] = useState<
    { id: number; size: number; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100, // percentage of screen width
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10, // 10 to 20 seconds
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-10%] text-pink-500/30 dark:text-pink-400/20"
          initial={{ x: `${p.x}vw`, y: "0vh", opacity: 0, scale: 0 }}
          animate={{
            y: "-110vh",
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            fontSize: `${p.size}px`,
            left: `${p.x}vw`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
