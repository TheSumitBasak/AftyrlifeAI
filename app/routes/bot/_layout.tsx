import { Outlet, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "react-router";
import DashboardTrainNavbar from "~/component/trainBot/DashboardTrainNavbar";
import SideBar from "~/component/trainBot/SideDrawer";
import TestPrompt from "~/component/trainBot/TestPrompt";
import DashboardProvider from "~/context/Dashboard";
import TrainBotProvider from "~/context/TrainBot";
import { getRequest } from "~/utility/api";

export async function loader({ params, request }: LoaderFunctionArgs) {
  try {
    const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) {
      return false;
    }

    const token = Object.fromEntries(
      cookieHeader
        .split("; ")
        .map((cookie) => cookie.split("="))
        .map(([key, value]) => [key, decodeURIComponent(value)])
    ).token;

    if (!token) {
      return "";
    }

    const res = await getRequest(`/user-prompt/${params.chatId}`, token);
    if (!res?.data) return false;

    return Response.json(res?.data);
  } catch (err) {
    console.log(err);
    return false;
  }
}

export default function TrainLayout() {
  const res: any = useLoaderData();

  return (
    <DashboardProvider>
      <TrainBotProvider>
        <DashboardTrainNavbar />
        <div>
          <SideBar className="fixed left-0 lg:block hidden border-r border-base-content/50" />
          <TestPrompt prompt={res?.data} />
          <main className="lg:pl-75 p-5 relative">
            <Outlet />
          </main>
          <div className="fixed -bottom-10 left-10 bg-primary h-32 w-32 -z-10 blur-[160px]"></div>
          <div className="fixed top-10 -right-10 bg-primary h-32 w-32 -z-10 blur-[160px]"></div>
        </div>
      </TrainBotProvider>
    </DashboardProvider>
  );
}
