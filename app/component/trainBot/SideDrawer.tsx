import { useParams } from "@remix-run/react";
import {
  BookOpenCheck,
  Bot,
  Loader,
  SaveAll,
  Settings2,
  Trash2,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { useDashboardContext } from "~/context/Dashboard";
import { useTrainBotContext } from "~/context/TrainBot";
import ConfirmationModal from "../ConfirmationModal";
import EditPromptModal from "../EditPromptModal";

export default function SideBar({
  className = "",
  children = <></>,
}: {
  className?: string;
  children?: Readonly<ReactNode>;
}) {
  const { prompt, savePromptMessage, deleteUserPrompt } = useDashboardContext();
  const { isOpen, setIsOpen } = useTrainBotContext();

  const [isConfirmationDeleteOpen, setIsConfirmationDeleteOpen] =
    useState(false);

  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await savePromptMessage({ promptId: params.chatId });
    setIsLoading(false);
  };
  return (
    <>
      <aside
        className={`w-70 max-w-[90vw] lg:h-[calc(100dvh-54px)] h-[100dvh] bg-base-300 px-3 py-4 ${className}`}
      >
        {children}
        <div className="flex flex-col items-center jusitfy-center pr-5 pt-2">
          <figure className="w-20 h-20 bg-base-content/15 flex items-center justify-center rounded-full mb-1.5">
            <Bot className="size-12" />
          </figure>
          <h3 className="text-xl font-bold">{prompt?.name || "Prompt 1."}</h3>
        </div>
        <ul className="space-y-3 mt-5 font-[350]">
          <EditPromptModal />
          <li
            onClick={() => setIsOpen((op: boolean) => !op)}
            className="w-full items-center flex justify-start gap-4 px-3 py-2 bg-base-200 hover:bg-base-100 cursor-pointer rounded-lg"
          >
            <BookOpenCheck className="size-7" strokeWidth={1.2} />
            Test Prompt
          </li>
          <li
            onClick={() => setIsConfirmationDeleteOpen(true)}
            className="w-full items-center flex justify-start gap-4 px-3 py-2 bg-base-200 hover:bg-base-100 cursor-pointer rounded-lg"
          >
            <Trash2 className="size-7" strokeWidth={1.2} />
            Delete Prompt
          </li>
        </ul>
        <button
          onClick={onSubmit}
          className="absolute bottom-4 btn btn-primary w-63 py-3"
        >
          {isLoading ? (
            <Loader className="size-5 stroke-base-200 spin" />
          ) : (
            <>
              <SaveAll className="mr-1" />
              Save Prompt
            </>
          )}
        </button>
      </aside>
      <ConfirmationModal
        isOpen={isConfirmationDeleteOpen}
        onOk={async () => {
          await deleteUserPrompt({ promptId: params.chatId });
        }}
        title="Confirmation"
        message={
          "Are you sure you want to delete this prompt?\nThis action cannot be undone."
        }
        onClose={() => setIsConfirmationDeleteOpen(false)}
      />
    </>
  );
}
