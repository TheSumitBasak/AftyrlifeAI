import { createContext, ReactNode, useContext, useState } from "react";

const DashboardContext = createContext<any>({});

export default function DashboardProvider({
  children,
}: {
  children: Readonly<ReactNode>;
  }) {
  const value = {};
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("DashboardContext not found");
  return context;
}
