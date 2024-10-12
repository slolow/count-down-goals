export type Goal = {
  id: string;
  content: string;
  days: number;
  status: "pending" | "created";
  selected: boolean;
  createdAt: number;
  remainingDays: number;
  reached: boolean;
};

export type Goals = Goal[];
