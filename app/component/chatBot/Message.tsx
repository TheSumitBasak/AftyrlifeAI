import { Bot, User } from "lucide-react";

export default function Message({ message }: { message: any }) {
  return (
    <>
      {message.role == "model" ? (
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-base-content/15 place-content-center">
              <Bot className="size-7 mx-auto" />
            </div>
          </div>
          <div className="chat-header mb-0.5">Prompt 1</div>
          <div className="chat-bubble">{message.message}</div>
          <div className="chat-footer opacity-50">
            {new Date().toLocaleDateString()} 12:45 PM
          </div>
        </div>
      ) : (
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full bg-base-content/15 place-content-center">
              <User className="size-7 mx-auto" />
            </div>
          </div>
          <div className="chat-header mb-0.5">Anakin</div>
          <div className="chat-bubble">{message.message}</div>
          <div className="chat-footer opacity-50">
            {new Date().toLocaleDateString()} 12:45 PM
          </div>
        </div>
      )}
    </>
  );
}
