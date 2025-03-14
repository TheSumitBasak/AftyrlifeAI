import { Bot, User } from "lucide-react";
import Markdown from "react-markdown";
import { useDashboardContext } from "~/context/Dashboard";
import { Prompt } from "~/types/prompt";

export default function Message({
  message,
  prompt,
}: {
  message: any;
  prompt?: Prompt;
}) {
  const { profile } = useDashboardContext();

  const getDateString = (dateString: string) => {
    try {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "";
      }

      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      return `${formattedDate} ${formattedTime}`;
    } catch (err) {
      return "";
    }
  };
  return (
    <>
      {message.role == "model" ? (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-base-content/15 place-content-center">
              <Bot className="size-7 mx-auto" />
            </div>
          </div>
          <div className="chat-header mb-0.5">{prompt?.name || "Prompt 1"}</div>
          <div className="chat-bubble prose">
            <Markdown>{message.message.replace(/\n/g, "  \n")}</Markdown>
          </div>
          <div className="chat-footer opacity-50">
            {getDateString(message?.createdAt)}
          </div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-base-content/15 place-content-center">
              <User className="size-7 mx-auto" />
            </div>
          </div>
          <div className="chat-header mb-0.5">{profile?.firstName || ""}</div>
          <div className="chat-bubble prose">
            <Markdown>{message.message.replace(/\n/g, "  \n")}</Markdown>
          </div>
          <div className="chat-footer opacity-50">
            {getDateString(message?.createdAt)}
          </div>
        </div>
      )}
    </>
  );
}
