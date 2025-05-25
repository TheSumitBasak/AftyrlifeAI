import { SendHorizonal } from "lucide-react";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

export default function MessageBox({
  onSubmit = async () => {},
}: {
  onSubmit?: (text: string) => Promise<void>;
}) {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const totalLines = useMemo(
    () => Math.max(message.split(/\r\n|\r|\n/).length, 1),
    [message]
  );

  const onKeyDown = useCallback(
    async (ev: KeyboardEvent<HTMLTextAreaElement>) => {
      if (!ev.shiftKey && ev.key === "Enter") {
        ev.preventDefault();
        const msg = ev.currentTarget.value;
        if (textRef.current) {
          textRef.current.value = "";
          textRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        }
        setMessage("");
        setIsLoading(true);
        await onSubmit(msg);
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <form
      onSubmit={async (ev) => {
        ev.preventDefault();
        setMessage("");
        if (textRef.current) {
          textRef.current.value = "";
          textRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        }
        setIsLoading(true);
        await onSubmit(message);
        setIsLoading(false);
      }}
      className="bg-base-300 rounded-xl w-full pl-5 pr-2 py-2 pt-3 flex justify-center items-center"
    >
      <textarea
        ref={textRef}
        style={{ height: `${Math.min(totalLines, 4) * 24 + 16}px` }}
        className={`px-2 py-1 rounded-xl flex-1 resize-none border-0 outline-0 flex-grow-1`}
        placeholder="Enter message..."
        onChange={(ev) => setMessage(ev.target.value)}
        onKeyDown={onKeyDown}
        rows={1}
        disabled={isLoading}
        required
      />
      <button className="p-2 btn btn-ghost rounded-xl">
        <SendHorizonal className="size-7 mt-1" />
      </button>
    </form>
  );
}
