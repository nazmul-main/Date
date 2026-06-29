import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepProps } from "../types";

export function WelcomeStep({ onNext }: StepProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-primary/10 p-4 rounded-full"
      >
        <Heart className="w-12 h-12 text-primary fill-primary" />
      </motion.div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Date With Me ❤️
        </h1>
        <p className="text-muted-foreground font-medium">
          Someone special wants to spend time with you.
        </p>
      </div>
      <div className="pt-8 w-full">
        <Button
          onClick={onNext}
          size="lg"
          className="w-full glass-button text-lg font-semibold h-14 rounded-2xl"
        >
          Start
        </Button>
      </div>
    </div>
  );
}
