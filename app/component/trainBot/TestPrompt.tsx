import { Bot, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Messages from "../chatBot/Messages";
import MessageBox from "../chatBot/MessageBox";
import { useTrainBotContext } from "~/context/TrainBot";

const data = [
  {
    role: "user",
    message: "Hello!",
  },
  {
    role: "model",
    message: "Hello! How can i be your assitence!",
  },
  {
    role: "user",
    message: "Can you tell me a joke?",
  },
  {
    role: "model",
    message:
      "Sure! Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    role: "user",
    message: "That's funny!",
  },
  {
    role: "model",
    message: "I'm glad you liked it!",
  },
  {
    role: "user",
    message: "Hello!",
  },
  {
    role: "model",
    message: "Hello! How can i be your assitence!",
  },
  {
    role: "user",
    message: "Can you tell me a joke?",
  },
  {
    role: "model",
    message:
      "Sure! Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    role: "user",
    message: "That's funny!",
  },
  {
    role: "model",
    message: "I'm glad you liked it!",
  },
  {
    role: "user",
    message: "Hello!",
  },
  {
    role: "model",
    message: "Hello! How can i be your assitence!",
  },
  {
    role: "user",
    message: "Can you tell me a joke?",
  },
  {
    role: "model",
    message:
      "Sure! Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    role: "user",
    message: "That's funny!",
  },
  {
    role: "model",
    message: "I'm glad you liked it!",
  },
  {
    role: "user",
    message: "Hello!",
  },
  {
    role: "model",
    message: "Hello! How can i be your assitence!",
  },
  {
    role: "user",
    message: "Can you tell me a joke?",
  },
  {
    role: "model",
    message:
      "Sure! Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    role: "user",
    message: "That's funny!",
  },
  {
    role: "model",
    message: "I'm glad you liked it!",
  },
  {
    role: "user",
    message: "Hello!",
  },
  {
    role: "model",
    message: "Hello! How can i be your assitence!",
  },
  {
    role: "user",
    message: "Can you tell me a joke?",
  },
  {
    role: "model",
    message:
      "Sure! Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    role: "user",
    message: "That's funny!",
  },
  {
    role: "model",
    message: "I'm glad you liked it!",
  },
];


export default function TestPrompt() {
  const { isOpen, setIsOpen } = useTrainBotContext();
  const [history, setHistory] = useState(data);
  const endRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight });
    }
  }, [isOpen])

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
        <div
          ref={chatRef}
          className="h-[100dvh] overflow-auto w-[100vw] bg-base-200 max-w-5xl relative">
          <div className="bg-base-200/80 py-2.5 sticky top-0 z-[60] border-b border-base-content/40 text-lg font-semibold px-5 flex justify-between items-center">
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
          <div className="flex flex-col gap-y-6 min-h-[92%] px-5">
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
