import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StepProps } from "../types";
import { ArrowLeft, CalendarHeart, Clock, User, Utensils, MessageCircleHeart, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ConfirmationStep({ state, onNext, onPrev }: StepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    setIsSubmitting(true);
    
    // Format the date properly
    const dateStr = state.date ? format(state.date, "EEEE, MMMM do, yyyy") : "TBD";
    
    // Create the message text
    const messageText = `Hi NAZMUL! ❤️ I'd love to go on a date with you!

✨ Name: ${state.name}
📅 Date: ${dateStr}
⏰ Time: ${state.time}
🍽️ Food: ${state.foods.join(", ")}
${state.message ? `💬 Message: ${state.message}` : ""}

Can't wait! 😊`;

    // 🔴 YOUR TELEGRAM DETAILS HERE 🔴
    // 1. Create a bot via BotFather on Telegram to get your BOT_TOKEN
    // 2. Message your bot, then go to https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates to get your CHAT_ID
    const BOT_TOKEN = "8821134053:AAG4B7bxum_mGBDF8emVzQhx0bkx5ahBpgc"; 
    const CHAT_ID = "7023549858";
    
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    try {
      if (BOT_TOKEN && CHAT_ID) {
        await fetch(telegramUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: messageText,
          }),
        });
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    } finally {
      setIsSubmitting(false);
      // Go to the success screen quietly
      onNext();
    }
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

      <div className="flex-grow flex flex-col items-center pt-8 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Are we all set?</h2>
        
        <ScrollArea className="w-full h-[280px] bg-white/40 dark:bg-black/20 rounded-2xl p-4 border border-border/50 text-left">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Name</p>
                <p className="font-medium text-foreground">{state.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CalendarHeart className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Date</p>
                <p className="font-medium text-foreground">
                  {state.date ? format(state.date, "EEEE, MMMM do, yyyy") : ""}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Time</p>
                <p className="font-medium text-foreground">{state.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Utensils className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Food</p>
                <p className="font-medium text-foreground flex flex-wrap gap-1">
                  {state.foods.join(", ")}
                </p>
              </div>
            </div>

            {state.message && (
              <div className="flex items-start gap-3">
                <MessageCircleHeart className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Message</p>
                  <p className="font-medium text-foreground italic">"{state.message}"</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="pt-6 w-full mt-auto">
        <Button
          onClick={handleConfirm}
          className="w-full glass-button h-14 rounded-2xl text-lg font-semibold"
        >
          Confirm Our Date ❤️
        </Button>
      </div>
    </div>
  );
}
