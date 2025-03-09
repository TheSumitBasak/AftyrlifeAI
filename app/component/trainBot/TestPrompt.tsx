import { Bot, X } from "lucide-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import Messages from "../chatBot/Messages";
import MessageBox from "../chatBot/MessageBox";
import { useTrainBotContext } from "~/context/TrainBot";

export default function TestPrompt() {
  const { isOpen, setIsOpen } = useTrainBotContext();
  const [history, setHistory] = useState([]);
  const endRef = useRef<HTMLDivElement>(null);

  return (
    <div className="drawer">
      <input
        id="train-chat-drawer"
        className="drawer-toggle"
        type="checkbox"
        checked={isOpen}
      />
      <div className="drawer-side z-[1500]">
        <label
          onClick={() => setIsOpen(false)}
          htmlFor="train-chat-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="h-[100dvh] w-[100vw] bg-base-200 max-w-5xl relative">
          <div className="py-2.5 sticky top-0 border-b border-base-content/40 text-lg font-semibold px-5 flex justify-between items-center">
            <span>Test prompt</span>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-sm btn-square btn-primary"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="absolute -z-10 inset-0 flex items-center justify-center">
            <figure className="h-52 w-52 bg-base-content/20 flex items-center justify-center rounded-full opacity-10 blur-[3px]">
              <Bot className="size-30" />
            </figure>
          </div>
          <div className="flex flex-col gap-y-6 h-full px-5">
            <Messages messages={[...history].reverse()} />
            <section className="w-full sticky bottom-5">
              <MessageBox />
            </section>
            <div ref={endRef} id="end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
