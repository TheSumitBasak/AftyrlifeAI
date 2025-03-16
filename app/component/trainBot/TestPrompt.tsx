import { Bot, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Messages from "../chatBot/Messages";
import MessageBox from "../chatBot/MessageBox";
import { useTrainBotContext } from "~/context/TrainBot";
import { useDashboardContext } from "~/context/Dashboard";
import { useNavigate, useParams } from "@remix-run/react";
import { Message } from "~/types/message";
import { Prompt } from "~/types/prompt";

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

export default function TestPrompt({
  prompt,
  msgLength,
}: {
  prompt: Prompt;
  msgLength: number;
}) {
  const { isOpen, setIsOpen } = useTrainBotContext();
  const chatRef = useRef<HTMLDivElement>(null);

  const { getTrainMessages, sendTrainMessage, resetChatMessage } =
    useDashboardContext();

  const [history, setHistory] = useState<Message[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const params = useParams();

  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [isMsgLoading, setMsgIsLoading] = useState(false);

  const [isNewMsg, setIsNewMsg] = useState(true);

  useEffect(() => {
    if (isOpen && chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight });
    }
  }, [isOpen, history]);

  useEffect(() => {
    if (msgLength > 0) getMessages();
  }, [msgLength]);

  const getMessages = async (page = 1) => {
    const prevScrollHeight = document.body.scrollHeight;
    const messageRes = await getTrainMessages({
      page,
      promptId: params.chatId,
    });
    if (messageRes) {
      setTotalPages(messageRes?.metadata?.totalPage || 1);
      setTotalRecords(messageRes?.metadata?.totalRecords || 0);
      setcurrentPage(page);
      if (page == 1) {
        setIsNewMsg(true);
        setHistory(messageRes?.data || []);
      } else {
        setHistory((pr) => {
          const newMessages = messageRes?.data || [];
          const uniqueMessages = newMessages.filter(
            (msg: Message) =>
              !pr.some((existingMsg) => existingMsg.message === msg.message)
          );
          return [...pr, ...uniqueMessages];
        });
        const newScrollHeight = document.body.scrollHeight;
        window.scrollTo(
          0,
          window.scrollY + (newScrollHeight - prevScrollHeight)
        );
      }
    }
    setIsLoading(false);
  };

  const onSubmit = async (text: string) => {
    setMsgIsLoading(true);
    setIsNewMsg(true);
    setHistory((pr) => [
      {
        role: "user",
        message: text,
        _id: "Demo",
        createdAt: new Date().toISOString(),
      },
      ...pr,
    ]);
    const msgRes = await sendTrainMessage({
      message: text,
      promptId: params.chatId,
    });
    if (msgRes?.message) {
      setIsNewMsg(true);
      setHistory((pr) => [
        {
          role: "model",
          message: msgRes?.message,
          _id: "Demo",
          createdAt: new Date().toISOString(),
        },
        ...pr,
      ]);
    }
    setMsgIsLoading(false);
  };

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
          className="h-[100dvh] overflow-auto w-[100vw] bg-base-200 max-w-5xl relative"
        >
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
            <Messages
              hasMore={currentPage != totalPages}
              messages={history}
              next={async () => getMessages(currentPage + 1)}
              prompt={prompt}
              isLoading={isMsgLoading}
            />
            <section className="w-full sticky bottom-5">
              <MessageBox onSubmit={onSubmit} />
            </section>
            <div ref={endRef} id="end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
