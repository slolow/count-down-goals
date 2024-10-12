export type Goal = {
  id: string;
  content: string;
  days: number;
  status: "pending" | "created";
  selected: boolean;
  createdAt: number;
};

export type Goals = Goal[];
