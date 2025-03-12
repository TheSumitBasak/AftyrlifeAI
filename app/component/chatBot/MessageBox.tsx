import { SendHorizonal } from "lucide-react";
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useMemo,
  useState,
} from "react";

export default function MessageBox({
  onSubmit = async () => {},
}: {
  onSubmit?: (text: string) => Promise<void>;
}) {
  const [message, setMessage] = useState("");

  const totalLines = useMemo(
    () => Math.max(message.split(/\r\n|\r|\n/).length, 1),
    [message]
  );

  const onKeyDown = useCallback((ev: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!ev.shiftKey && ev.key === "Enter") {
      ev.preventDefault();
      onSubmit(ev.currentTarget.value);
    }
  }, []);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(message);
      }}
      className="bg-base-300 rounded-xl w-full pl-5 pr-2 py-2 pt-3 flex justify-center items-center"
    >
      <textarea
        style={{ height: `${Math.min(totalLines, 4) * 24 + 16}px` }}
        className={`px-2 py-1 rounded-xl flex-1 resize-none border-0 outline-0 flex-grow-1`}
        placeholder="Enter message..."
        onChange={(ev) => setMessage(ev.target.value)}
        onKeyDown={onKeyDown}
        rows={1}
        required
      />
      <button className="p-2 btn btn-ghost rounded-xl">
        <SendHorizonal className="size-7 mt-1" />
      </button>
    </form>
  );
}
