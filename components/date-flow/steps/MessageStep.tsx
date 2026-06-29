import { Button } from "@/components/ui/button";
import { StepProps } from "../types";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export function MessageStep({ state, updateState, onNext, onPrev }: StepProps) {
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
        <h2 className="text-2xl font-bold text-foreground">Anything you'd like to say?</h2>
        <p className="text-sm text-muted-foreground">(Optional)</p>
        
        <div className="w-full">
          <Textarea
            value={state.message}
            onChange={(e) => updateState({ message: e.target.value })}
            placeholder="I'm excited already ❤️"
            className="min-h-[150px] resize-none rounded-2xl bg-white/50 dark:bg-black/20 border-2 border-border/50 focus-visible:ring-primary text-base p-4"
          />
        </div>
      </div>

      <div className="pt-8 w-full mt-auto">
        <Button
          onClick={onNext}
          className="w-full glass-button h-14 rounded-2xl text-lg font-semibold"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
