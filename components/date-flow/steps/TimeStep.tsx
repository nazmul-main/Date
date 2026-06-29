import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepProps } from "../types";
import { ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const TIMES = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", 
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
];

export function TimeStep({ state, updateState, onNext, onPrev }: StepProps) {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.time) {
      setError(true);
      return;
    }
    setError(false);
    onNext();
  };

  return (
    <div className="w-full flex flex-col h-full relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute -top-2 -left-2 text-muted-foreground hover:text-foreground"
        onClick={onPrev}
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <div className="flex-grow flex flex-col items-center pt-8 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">What time works for you?</h2>
        
        <ScrollArea className="h-[250px] w-full rounded-2xl border border-border/50 bg-white/30 dark:bg-black/10 p-4">
          <div className="grid grid-cols-2 gap-3">
            {TIMES.map((time, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={time}
              >
                <Button
                  variant={state.time === time ? "default" : "outline"}
                  className={`w-full rounded-xl transition-all ${
                    state.time === time 
                      ? "bg-primary text-primary-foreground shadow-md scale-105" 
                      : "bg-white/50 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/60"
                  }`}
                  onClick={() => {
                    updateState({ time });
                    setError(false);
                  }}
                >
                  {time}
                </Button>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
        
        {error && <p className="text-sm text-destructive font-medium">Please select a time ⏰</p>}
      </div>

      <div className="pt-6 w-full mt-auto">
        <Button
          onClick={handleNext}
          className="w-full glass-button h-14 rounded-2xl text-lg font-semibold"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
