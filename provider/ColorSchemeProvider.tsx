import type { ReactNode } from "react";
import React, { createContext } from "react";

export type ColorSchemeProviderProps = {
  children: ReactNode;
  value: { toggleTheme: () => void };
};

export const ColorSchemeContext = createContext<{
  toggleTheme: () => void;
} | null>(null);

export const ColorSchemeProvider = ({
  children,
  value,
}: ColorSchemeProviderProps) => (
  <ColorSchemeContext.Provider value={value}>
    {children}
  </ColorSchemeContext.Provider>
);
