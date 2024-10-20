import React, { createContext, ReactNode } from "react";
import { type Goals } from "@/data/goals";

type GoalsProviderProps = {
  children: ReactNode;
  value: {
    goals: Goals;
    setGoals: React.Dispatch<React.SetStateAction<Goals>>;
  };
};

export const GoalsContext = createContext<GoalsProviderProps["value"] | null>(
  null,
);

export const GoalsProvider = ({ children, value }: GoalsProviderProps) => (
  <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
);
