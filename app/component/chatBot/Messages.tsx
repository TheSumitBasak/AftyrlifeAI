import { Bot, Loader } from "lucide-react";
import InfiniteScroll from "../InfiniteScroll";
import Message from "./Message";
import { Prompt } from "~/types/prompt";
import MessageLoader from "./MessageLoader";

export default function Messages({
  messages,
  next = async () => {},
  hasMore = false,
  prompt,
  isLoading = false,
}: {
  messages: any[];
  next?: () => Promise<void>;
  hasMore?: boolean;
  prompt?: Prompt;
  isLoading: boolean;
}) {
  return (
    <InfiniteScroll
      dataLength={messages.length}
      hasMore={hasMore}
      endMessage=""
      next={next}
      loader={
        <div className="mx-auto mb-5">
          <Loader className="size-5 stroke-base-content spin" />
        </div>
      }
      className="flex flex-col-reverse flex-grow-1"
    >
      {isLoading && (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-base-content/15 place-content-center">
              <Bot className="size-7 mx-auto" />
            </div>
          </div>
          <div className="chat-header mb-0.5">{prompt?.name || "Prompt 1"}</div>
          <div className="chat-bubble prose">
            <MessageLoader />
          </div>
        </div>
      )}
      {messages.map((message, index) => (
        <Message key={index} message={message} prompt={prompt} />
      ))}
    </InfiniteScroll>
  );
}
