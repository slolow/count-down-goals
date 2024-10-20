import React, { createContext, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
  value: {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  };
};

export const AuthContext = createContext<AuthProviderProps["value"] | null>(
  null,
);

export const AuthProvider = ({ children, value }: AuthProviderProps) => (
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
);
