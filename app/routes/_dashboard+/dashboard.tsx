import { Link } from "@remix-run/react";
import { Loader, MessageCirclePlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CreatePromptModal from "~/component/CreatePromptModal";
import InfiniteScroll from "~/component/InfiniteScroll";
import PromptCard from "~/component/PromptCard";
import { useDashboardContext } from "~/context/Dashboard";
import { Prompt } from "~/types/prompt";

export default function Dashboard() {
  const { getPrompts } = useDashboardContext();

  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPrompt();
  }, []);

  const getPrompt = async (page = 1) => {
    const promptRes = await getPrompts(page);
    if (promptRes) {
      setTotalPages(promptRes?.metadata?.totalPage || 1);
      setTotalRecords(promptRes?.metadata?.totalRecords || 0);
      setcurrentPage(page);
      if (page == 1) {
        setPrompts(promptRes?.data || []);
      } else {
        setPrompts((pr) => [...pr, ...(promptRes?.data || [])]);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Prompts.</h1>
        <CreatePromptModal/>
      </div>
      {isLoading ? (
        <div className="mx-auto grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:px-15 px-5 mt-10">
          <div className="2xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 flex justify-center">
            <Loader className="size-7 stroke-text-content spin" />
          </div>
        </div>
      ) : (
        <InfiniteScroll
          next={() => getPrompt(currentPage + 1)}
          hasMore={currentPage != totalPages}
          loader={
            <div className="2xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 flex justify-center">
              <Loader className="size-7 stroke-text-content spin" />
            </div>
          }
          endMessage={
            <div className="2xl:col-span-4 lg:col-span-3 sm:col-span-2 col-span-1 flex justify-center">
              No more prompts!
            </div>
          }
          dataLength={prompts.length}
          className="mx-auto grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:px-15 px-5 mt-10"
        >
          {prompts.map((ele) => (
            <PromptCard key={ele._id} data={ele} />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
