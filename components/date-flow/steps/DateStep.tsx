import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { StepProps } from "../types";
import { ArrowLeft } from "lucide-react";
import { addDays, isBefore, startOfDay } from "date-fns";

export function DateStep({ state, updateState, onNext, onPrev }: StepProps) {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.date) {
      setError(true);
      return;
    }
    setError(false);
    onNext();
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfDay(new Date()));
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

      <div className="flex-grow flex flex-col items-center justify-center space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-foreground">When are you free?</h2>
        
        <div className="p-2 bg-white/50 dark:bg-black/20 rounded-3xl border border-border/50">
          <Calendar
            mode="single"
            selected={state.date}
            onSelect={(date) => {
              updateState({ date });
              setError(false);
            }}
            disabled={isDateDisabled}
            className="rounded-2xl"
          />
        </div>
        
        {error && <p className="text-sm text-destructive font-medium">Please pick a date ✨</p>}
      </div>

      <div className="pt-8 w-full mt-auto">
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
