import { Outlet } from "@remix-run/react";
import Footer from "~/component/Footer";
import Navbar from "~/component/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
