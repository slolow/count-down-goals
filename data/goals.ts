export type Goal = {
  id: string;
  content: string;
  days: number;
  status: "pending" | "created";
};

export type Goals = Goal[];
