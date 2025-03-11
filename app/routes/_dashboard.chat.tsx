import { Bot, RefreshCcw, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessageBox from "~/component/chatBot/MessageBox";
import Messages from "~/component/chatBot/Messages";

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

export default function Chat() {
  const [history, setHistory] = useState(data);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    globalThis.scrollTo({ top: globalThis.document.body.scrollHeight });
  }, []);

  return (
    <main>
      {history.length > 0 && (
        <div
          className="tooltip tooltip-bottom fixed z-10 top-20 right-5"
          data-tip="reset"
        >
          <button className="shadow-lg bg-primary/80 p-3 rounded-lg text-base-200">
            <RefreshCcw
              strokeWidth={3}
              className="size-5 stroke-text-base-200"
            />
          </button>
        </div>
      )}
      {history.length > 0 ? (
        <div className="min-h-[calc(100dvh-95px)] max-w-5xl flex flex-col mx-auto gap-y-6">
          <div className="fixed -z-10 inset-0 flex items-center justify-center">
            <figure className="h-52 w-52 bg-base-content/20 flex items-center justify-center rounded-full opacity-10 blur-[3px]">
              <Bot className="size-30" />
            </figure>
          </div>
          <Messages messages={[...history].reverse()} />
          <section className="w-full sticky bottom-5">
            <MessageBox />
          </section>
        </div>
      ) : (
        <div className="min-h-[calc(100dvh-95px)] flex items-center justify-center max-w-5xl text-center mx-auto -mt-6">
          <div className="flex items-center justify-center flex-col w-full gap-y-2">
            <figure className="w-40 h-40 bg-base-content/15 flex items-center justify-center rounded-full mb-1.5">
              <Bot className="size-24" />
            </figure>
            <h1 className="font-extrabold text-4xl">Prompt 1.</h1>
            <p className="max-w-[600px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quas aperiam dolor, tenetur modi sed aut natus sit itaque deserunt
              perferendis, molestiae voluptatum necessitatibus nisi, magni
              soluta explicabo. Ipsa, at!
            </p>
            <section className="w-full md:mt-10 mt-7">
              <MessageBox />
            </section>
          </div>
        </div>
      )}
      <div ref={endRef} id="end"></div>
    </main>
  );
}
