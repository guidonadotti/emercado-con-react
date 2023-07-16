import React, { createContext } from "react";
import useActiveUser from "../hooks/useActiveUser";
import useUsers from "../hooks/useUsers";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  return (
    <LoginContext.Provider
      value={{
        ...useActiveUser(),
        ...useUsers(),
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
