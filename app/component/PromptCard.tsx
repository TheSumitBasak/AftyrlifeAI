import { Bot, MessageCircleMore, Settings2 } from "lucide-react";

export default function PromptCard({ data }: { data: any }) {
  return (
    <>
      <div className="group relative card bg-base-100 group border border-base-content/20 max-w-[304px] mx-auto">
        <figure className="bg-base-content/40 py-6">
          <Bot className="size-36" />
        </figure>
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h2 className="font-semibold truncate">
              {data?.name || "Not Available"}
            </h2>
          </div>
          <p className="line-clamp-4 min-h-[85px] mt-1">{data?.description}</p>
          <div className="card-actions justify-end mt-3">
            <div className="absolute inset-x-0 h-[50%] rounded-box bottom-0 overflow-hidden pointer-events-none">
              <div className="dark:block hidden w-12 h-12 bg-accent absolute bottom-0 left-5 blur-[70px]"></div>
            </div>
            <div className="tooltip  tooltip-bottom" data-tip="Chat">
              <button className="btn btn-primary btn-sm btn-square">
                <MessageCircleMore className="size-4 stroke-base-100" />
              </button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Edit">
              <button className="btn btn-primary btn-sm btn-square">
                <Settings2 className="size-4 stroke-base-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
