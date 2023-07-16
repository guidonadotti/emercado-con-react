import { createContext, useState } from "react";
export const EstrellasContext = createContext();

export function EstrellasProvider({ children }) {
  const [chequeado, setChequeado] = useState("");

  return (
    <EstrellasContext.Provider value={{ chequeado, setChequeado }}>
      {children}
    </EstrellasContext.Provider>
  );
}
