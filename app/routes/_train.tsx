import { Outlet } from "@remix-run/react";
import DashboardTrainNavbar from "~/component/trainBot/DashboardTrainNavbar";
import DashboardProvider from "~/context/Dashboard";
import TrainBotProvider from "~/context/TrainBot";

export default function TrainLayout() {
  return (
    <DashboardProvider>
      <TrainBotProvider>
        <DashboardTrainNavbar />
        <div>
          <Outlet />
          <div className="fixed -bottom-10 left-10 bg-primary h-32 w-32 -z-10 blur-[120px]"></div>
          <div className="fixed top-10 -right-10 bg-primary h-32 w-32 -z-10 blur-[160px]"></div>
        </div>
      </TrainBotProvider>
    </DashboardProvider>
  );
}
