import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StepProps } from "../types";
import { ArrowLeft } from "lucide-react";

export function NameStep({ state, updateState, onNext, onPrev }: StepProps) {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!state.name.trim()) {
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

      <div className="flex-grow flex flex-col items-center justify-center space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-foreground">What should I call you?</h2>
        <div className="w-full space-y-2">
          <Input
            value={state.name}
            onChange={(e) => {
              setError(false);
              updateState({ name: e.target.value });
            }}
            placeholder="Enter your name"
            className={`h-14 text-center text-lg rounded-2xl bg-white/50 dark:bg-black/20 border-2 transition-colors ${
              error ? "border-destructive focus-visible:ring-destructive" : "border-border/50 focus-visible:ring-primary"
            }`}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNext();
            }}
          />
          {error && <p className="text-sm text-destructive font-medium">Please tell me your name ❤️</p>}
        </div>
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
