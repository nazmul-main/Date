"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DateState } from "./types";
import { WelcomeStep } from "./steps/WelcomeStep";
import { NameStep } from "./steps/NameStep";
import { DateStep } from "./steps/DateStep";
import { TimeStep } from "./steps/TimeStep";
import { FoodStep } from "./steps/FoodStep";
import { MessageStep } from "./steps/MessageStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { SuccessStep } from "./steps/SuccessStep";
import { Card } from "@/components/ui/card";

const QUOTES = [
  "Every love story begins with one beautiful yes. ❤️",
  "I hope this becomes our favorite memory. ✨",
  "You make ordinary days feel extraordinary. 🌸",
  "Some people are worth melting for. ⛄",
  "Together is my favorite place to be. 🏡",
];

export function FlowContainer() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [state, setState] = useState<DateState>({
    name: "",
    date: undefined,
    time: "",
    foods: [],
    message: "",
  });
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, [step]);

  const updateState = (updates: Partial<DateState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 8));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const steps = [
    <WelcomeStep key={1} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <NameStep key={2} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <DateStep key={3} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <TimeStep key={4} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <FoodStep key={5} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <MessageStep key={6} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <ConfirmationStep key={7} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
    <SuccessStep key={8} state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />,
  ];

  if (step === 8) {
    return <>{steps[7]}</>; // Success screen takes over
  }

  return (
    <div className="w-full max-w-md mx-auto relative">
      <Card className="glass-card overflow-hidden min-h-[400px] flex flex-col relative border-0 shadow-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex-grow flex flex-col items-center justify-center h-full text-center"
          >
            {steps[step - 1]}
          </motion.div>
        </AnimatePresence>
      </Card>

      <motion.p
        key={quote}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-sm mt-6 text-foreground/60 italic font-medium px-4"
      >
        "{quote}"
      </motion.p>
    </div>
  );
}
