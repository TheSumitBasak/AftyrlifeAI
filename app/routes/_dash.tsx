import { Outlet } from "@remix-run/react";
import DashboardProvider from "~/context/Dashboard";

export default function DashLayout() {

  return (
    <DashboardProvider>
      <Outlet />
    </DashboardProvider>
  );
}
