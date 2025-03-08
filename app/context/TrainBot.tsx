import { createContext, ReactNode, useContext } from "react";

const TrainBotContext = createContext({});

export default function TrainBotProvider({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const value = {};
  return (
    <TrainBotContext.Provider value={value}>
      {children}
    </TrainBotContext.Provider>
  );
}

export function useTrainBotContext() {
  const context = useContext(TrainBotContext);
  if (!context) throw new Error("TrainBotContext not found");
  return context;
}
