import { Outlet } from "@remix-run/react";
import DashboardNavbar from "~/component/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <>
      <DashboardNavbar />
      <div className="container mx-auto p-5">
        <Outlet />
        <div className="fixed -bottom-10 left-10 bg-primary h-32 w-32 -z-10 blur-[120px]"></div>
        <div className="fixed top-10 -right-10 bg-primary h-32 w-32 -z-10 blur-[160px]"></div>
      </div>
    </>
  );
}
