import { Outlet } from "@remix-run/react";
import Navbar from "~/component/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
