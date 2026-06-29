import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepProps } from "../types";
import { ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const FOODS = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "French Fries", emoji: "🍟" },
  { name: "Fried Chicken", emoji: "🍗" },
  { name: "Noodles", emoji: "🍜" },
  { name: "Fried Rice", emoji: "🍚" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Steak", emoji: "🥩" },
  { name: "Taco", emoji: "🌮" },
  { name: "Shawarma", emoji: "🥙" },
  { name: "Sushi", emoji: "🍣" },
  { name: "Momos", emoji: "🥟" },
  { name: "Hot Dog", emoji: "🌭" },
  { name: "Cake", emoji: "🍰" },
  { name: "Donut", emoji: "🍩" },
  { name: "Ice Cream", emoji: "🍦" },
  { name: "Cold Drinks", emoji: "🥤" },
  { name: "Coffee", emoji: "☕" },
  { name: "Juice", emoji: "🍹" },
];

export function FoodStep({ state, updateState, onNext, onPrev }: StepProps) {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (state.foods.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    onNext();
  };

  const toggleFood = (food: string) => {
    const current = state.foods;
    const updated = current.includes(food)
      ? current.filter((f) => f !== food)
      : [...current, food];
    updateState({ foods: updated });
    if (updated.length > 0) setError(false);
  };

  return (
    <div className="w-full flex flex-col h-full relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute -top-2 -left-2 z-10 text-muted-foreground hover:text-foreground"
        onClick={onPrev}
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <div className="flex-grow flex flex-col items-center pt-8 space-y-4">
        <h2 className="text-2xl font-bold text-foreground px-8">What would you like to eat?</h2>
        <p className="text-sm text-muted-foreground">Select as many as you want!</p>

        <ScrollArea className="h-[280px] w-full px-1">
          <div className="grid grid-cols-3 gap-3 pb-4">
            {FOODS.map((food, i) => {
              const isSelected = state.foods.includes(food.name);
              return (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  key={food.name}
                  onClick={() => toggleFood(food.name)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-md scale-105"
                      : "border-border/40 bg-white/40 dark:bg-black/20 hover:bg-white/60 dark:hover:bg-black/40 hover:border-primary/50"
                  }`}
                >
                  <span className="text-3xl mb-2">{food.emoji}</span>
                  <span className="text-xs font-medium text-foreground">{food.name}</span>
                </motion.button>
              );
            })}
          </div>
        </ScrollArea>

        {error && <p className="text-sm text-destructive font-medium">Please select at least one item 🍽️</p>}
      </div>

      <div className="pt-4 w-full mt-auto">
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
