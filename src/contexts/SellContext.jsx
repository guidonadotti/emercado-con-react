import { createContext } from "react";

export const SellContext = createContext();

export function SellProvider({ children }) {
  return <SellContext.Provider>{children}</SellContext.Provider>;
}
