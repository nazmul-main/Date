export interface DateState {
  name: string;
  date: Date | undefined;
  time: string;
  foods: string[];
  message: string;
}

export type StepProps = {
  state: DateState;
  updateState: (updates: Partial<DateState>) => void;
  onNext: () => void;
  onPrev: () => void;
};
