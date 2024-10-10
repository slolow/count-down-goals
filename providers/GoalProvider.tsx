import { createContext, ReactNode } from "react";
import { Goals } from "@/app/_layout";

type GoalsProviderProps = {
  children: ReactNode;
  value: { getGoals: () => Goals };
};

export const GoalsContext = createContext<{ getGoals: () => Goals } | null>(
  null,
);

export const GoalsProvider = ({ children, value }: GoalsProviderProps) => (
  <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
);
