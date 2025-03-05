import { Link } from "@remix-run/react";
import { LayoutDashboardIcon, LogIn, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsTop(currentScrollPos < 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      data-at-top={isTop}
      className={`group fixed inset-x-0 z-[60] flex justify-center transition-transform duration-500 data-[scrolling=down]:-top-full sm:container ${
        visible ? "translate-y-0 pt-4" : "-translate-y-full"
      }`}
    >
      <div className="group-data-[at-top=false]:bg-base-100 group-data-[at-top=false]:dark:bg-base-200 flex w-full items-center justify-between rounded-full px-6 py-3 transition-[width] duration-500 group-data-[at-top=false]:w-[800px] group-data-[at-top=false]:shadow group-data-[at-top=false]:max-sm:mx-2 lg:py-1.5">
        <div className="flex items-center gap-2">
          <div className="flex-none lg:hidden">
            <div className="drawer">
              <input
                id="demo-drawer"
                className="drawer-toggle"
                type="checkbox"
              />
              <div className="drawer-content">
                <label
                  htmlFor="demo-drawer"
                  className="btn drawer-button btn-ghost btn-square btn-sm"
                >
                  <Menu className="size-4.5" />
                </label>
              </div>
              <div className="drawer-side z-[50]">
                <label
                  htmlFor="demo-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <h1 className="text-xl font-bold">AftyrlifeAI</h1>
          </Link>
        </div>
        <div className="gap-3">
          <ul className="menu menu-horizontal hidden gap-2 px-1 lg:inline-flex">
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </div>
        <div className="inline-flex items-center gap-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="winter"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <Link className="btn btn-primary btn-sm btn-square" to="/login">
            {globalThis?.localStorage?.getItem("token") ? (
              <LayoutDashboardIcon
                className="tooltip size-4 stroke-base-200"
                data-tip="Dashboard"
                strokeWidth={3}
              />
            ) : (
              <LogIn
                className="tooltip size-4 stroke-base-200"
                data-tip="Login"
                strokeWidth={3}
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
