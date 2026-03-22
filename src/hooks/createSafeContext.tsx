import { createContext, useContext } from "react";
export function createSafeContext<T>() {
  const context = createContext<T | undefined>(undefined);

  function useSafeContext() {
    const value = useContext(context);
    if (value === undefined) {
      throw new Error("Context must be used within its Provider");
    }
    return value;
  }
  return [context, useSafeContext] as const;
}
