import { useEffect } from "react";
import { StepProps } from "../types";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SuccessStep({ state }: StepProps) {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ff69b4", "#ffb6c1"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ff69b4", "#ffb6c1"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <Card className="glass-card overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-8 text-center relative border-0 shadow-2xl">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="mb-8"
      >
        <Heart className="w-24 h-24 text-primary fill-primary animate-pulse" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold text-foreground">
          Thank you, {state.name} ❤️
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          I can't wait to spend this special time with you. <br />
          See you soon! 😊
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 text-sm font-semibold text-primary/80 uppercase tracking-widest"
      >
        You just made someone very happy.
      </motion.p>
    </Card>
  );
}
