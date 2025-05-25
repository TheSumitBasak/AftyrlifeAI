import { Link, useLocation, useParams } from "@remix-run/react";
import {
  ArrowDown,
  BetweenHorizontalStart,
  BookOpenCheck,
  Bot,
  Cable,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Globe,
  Loader,
  SaveAll,
  Settings2,
  Trash2,
} from "lucide-react";
import { ReactNode, useCallback, useMemo, useState } from "react";
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

  const [isDataOpen, setIsDataOpen] = useState(false);

  const [isConfirmationDeleteOpen, setIsConfirmationDeleteOpen] =
    useState(false);

  const params = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await savePromptMessage({ promptId: params.chatId });
    setIsLoading(false);
  };

  const currentPage = useMemo(() => {
    if (location.pathname.includes("train")) {
      setIsDataOpen(true);
      return "DATA";
    }
    return "TRAIN";
  }, [location]);
  return (
    <>
      <aside
        className={`z-[1400] w-70 max-w-[90vw] lg:h-[calc(100dvh-54px)] h-[100dvh] bg-base-300 px-3 py-4 ${className}`}
      >
        {children}
        <div className="flex flex-col items-center jusitfy-center pr-5 pt-2">
          <figure className="w-20 h-20 bg-base-content/15 flex items-center justify-center rounded-full mb-1.5">
            <Bot className="size-12" />
          </figure>
          <h3 className="text-xl font-bold">{prompt?.name || "Prompt 1."}</h3>
        </div>
        <div className="overflow-auto max-h-[calc(100dvh-260px)]">
          <ul className="space-y-3 mt-5 font-[350]">
            <EditPromptModal />
            <li
              onClick={() => setIsOpen((op: boolean) => !op)}
              className="w-full items-center flex justify-start gap-4 px-3 py-2 cursor-pointer rounded-lg"
            >
              <BookOpenCheck className="size-6" strokeWidth={1.2} />
              Test Bot
            </li>
            <Link
              to={`/bot/${params.chatId}`}
              className={`w-full items-center flex justify-start gap-4 px-3 py-2 bg-base-${
                currentPage == "TRAIN" ? "100" : "200"
              } hover:bg-base-100 cursor-pointer rounded`}
            >
              <Globe className="size-6" strokeWidth={1.2} />
              Train Bot
            </Link>
            <li
              onClick={() => setIsDataOpen((op) => !op)}
              className={`${
                isDataOpen ? "mb-1 bg-base-100" : ""
              } w-full items-center flex justify-start gap-4 px-3 py-2 cursor-pointer rounded`}
            >
              <BetweenHorizontalStart className="size-6" strokeWidth={1.2} />
              <span className="flex-grow-1">Manage Data</span>
              {isDataOpen ? (
                <ChevronDown className="size-3" />
              ) : (
                <ChevronRight className="size-3" />
              )}
            </li>
            <li
              className="px-3 py-2"
              style={{ display: isDataOpen ? "block" : "none" }}
            >
              <ul className="space-y-2 ml-3 border-l border-base-content/30 pl-3">
                <li className="text-base-content/90 cursor-pointer">
                  <div
                    className="tooltip tooltip-bottom w-full"
                    data-tip="Coming soon..."
                  >
                    Scrap website
                  </div>
                </li>
                <li className="text-base-content/90 cursor-pointer">
                  <div
                    className="tooltip tooltip-bottom w-full"
                    data-tip="Coming soon..."
                  >
                    Documents
                  </div>
                </li>
                <li className="text-base-content/90 cursor-pointer">
                  <div
                    className="tooltip tooltip-bottom w-full"
                    data-tip="Coming soon..."
                  >
                    Text
                  </div>
                </li>
                <li className="text-base-content/90 cursor-pointer">
                  <div
                    className="tooltip tooltip-bottom w-full"
                    data-tip="Coming soon..."
                  >
                    Q&A
                  </div>
                </li>
              </ul>
            </li>
            <li
              data-tip="Coming soon..."
              className="tooltip tooltip-bottom w-full items-center flex justify-start gap-4 px-3 py-2 cursor-pointer rounded-lg"
            >
              <Cable className="size-6" strokeWidth={1.2} />
              Integrate Bot
            </li>
            <li
              onClick={() => setIsConfirmationDeleteOpen(true)}
              className="w-full items-center flex justify-start gap-4 px-3 py-2 cursor-pointer rounded-lg"
            >
              <Trash2 className="size-6" strokeWidth={1.2} />
              Delete Bot
            </li>
          </ul>
        </div>
        <button
          onClick={onSubmit}
          className="absolute bottom-4 btn btn-primary w-63 py-3"
        >
          {isLoading ? (
            <Loader className="size-5 stroke-base-200 spin" />
          ) : (
            <>
              <SaveAll className="mr-1" />
              Save Bot
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
