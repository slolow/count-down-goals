import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
