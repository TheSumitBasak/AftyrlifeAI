import { json, LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData, useNavigate } from "@remix-run/react";
import { Bot, RefreshCcw, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MessageBox from "~/component/chatBot/MessageBox";
import Messages from "~/component/chatBot/Messages";
import { useDashboardContext } from "~/context/Dashboard";
import { Message } from "~/types/message";
import { getRequest } from "~/utility/api";

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

export async function loader({ params, request }: LoaderFunctionArgs) {
  try {
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) {
      return false;
    }

    const token = Object.fromEntries(
      cookieHeader
        .split("; ")
        .map((cookie) => cookie.split("="))
        .map(([key, value]) => [key, decodeURIComponent(value)])
    ).token;

    if (!token) {
      return "";
    }

    const res = await getRequest(`/user-prompt/${params.chatId}`, token);
    if (!res?.data) return false;

    return Response.json(res?.data);
  } catch (err) {
    console.log(err);
    return false;
  }
  // return json(await fakeDb.invoices.findAll());
}

export default function Chat() {
  const { getChatMessages, sendChatMessage, resetChatMessage } =
    useDashboardContext();
  const res = useLoaderData<typeof loader>();

  const [history, setHistory] = useState<Message[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);
  const [isMsgLoading, setMsgIsLoading] = useState(false);

  const [isNewMsg, setIsNewMsg] = useState(true);

  useEffect(() => {
    if (!res.data) {
      navigate("/dashboard");
    } else {
      getMessages();
    }
  }, [res.data]);

  useEffect(() => {
    if (isNewMsg) {
      globalThis.scrollTo({ top: globalThis.document.body.scrollHeight });
      setIsNewMsg(false);
    }
  }, [history]);

  const getMessages = async (page = 1) => {
    const prevScrollHeight = document.body.scrollHeight;
    const messageRes = await getChatMessages({
      page,
      promptId: res?.data?._id,
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
    const msgRes = await sendChatMessage({
      message: text,
      promptId: res?.data?._id,
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
    <main>
      {history.length > 0 && (
        <div
          className="tooltip tooltip-bottom fixed z-10 top-20 right-5"
          data-tip="reset"
        >
          <button
            onClick={() => resetChatMessage({ promptId: res.data._id })}
            className="shadow-lg bg-primary/80 p-3 rounded-lg text-base-200 cursor-pointer"
          >
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
          <Messages
            hasMore={currentPage != totalPages}
            messages={history}
            next={async () => getMessages(currentPage + 1)}
            prompt={res.data}
            isLoading={isMsgLoading}
          />
          <section className="w-full sticky bottom-5">
            <MessageBox onSubmit={onSubmit} />
          </section>
        </div>
      ) : (
        <div className="min-h-[calc(100dvh-95px)] flex items-center justify-center max-w-5xl text-center mx-auto -mt-6">
          <div className="flex items-center justify-center flex-col w-full gap-y-2">
            <figure className="w-40 h-40 bg-base-content/15 flex items-center justify-center rounded-full mb-1.5">
              <Bot className="size-24" />
            </figure>
            <h1 className="font-extrabold text-4xl">{res?.data?.name}</h1>
            <p className="max-w-[600px]">{res?.data?.description}</p>
            <section className="w-full md:mt-10 mt-7">
              <MessageBox onSubmit={onSubmit} />
            </section>
          </div>
        </div>
      )}
      <div ref={endRef} id="end"></div>
    </main>
  );
}
