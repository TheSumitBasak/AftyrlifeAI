import { createContext, ReactNode, useContext, useState } from "react";

const TrainBotContext = createContext<any>({});

export default function TrainBotProvider({
  children,
}: {
  children: Readonly<ReactNode>;
  }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const value = {isOpen, setIsOpen};
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
