export type Goal = {
  id: string;
  content: string;
  days: number;
  status: "pending" | "created";
  selected: boolean;
};

export type Goals = Goal[];
