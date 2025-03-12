import { Loader } from "lucide-react";
import InfiniteScroll from "../InfiniteScroll";
import Message from "./Message";
import { Prompt } from "~/types/prompt";

export default function Messages({
  messages,
  next = async () => {},
  hasMore = false,
  prompt,
}: {
  messages: any[];
  next?: () => Promise<void>;
  hasMore?: boolean;
  prompt?: Prompt;
}) {
  return (
    <InfiniteScroll
      dataLength={history.length}
      hasMore={hasMore}
      endMessage=""
      next={next}
      loader={<Loader className="mx-auto size-5 stroke-base-200 spin" />}
      className="flex flex-col-reverse flex-grow-1"
    >
      {messages.map((message, index) => (
        <Message key={index} message={message} prompt={prompt} />
      ))}
    </InfiniteScroll>
  );
}
