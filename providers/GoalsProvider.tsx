import { createContext, ReactNode } from "react";
import { type Goals } from "@/data/goals";

type GoalsProviderProps = {
  children: ReactNode;
  value: { getGoals: () => Goals; updateGoals: (goals: Goals) => void };
};

export const GoalsContext = createContext<{
  getGoals: () => Goals;
  updateGoals: (goals: Goals) => void;
} | null>(null);

export const GoalsProvider = ({ children, value }: GoalsProviderProps) => (
  <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
);
