import { Link } from "@remix-run/react";
import { LayoutDashboardIcon, LogIn, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>(() => {
    // Initialize theme from localStorage, default to 'winter'
    return globalThis?.localStorage?.getItem?.("site-theme") || "winter";
  });

  // Themes array for easy switching
  const themes = ["winter", "night"];

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

  useEffect(() => {
    // Update localStorage and html attribute when theme changes
    globalThis?.localStorage?.setItem?.("site-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div
      data-at-top={isTop}
      className={`group fixed inset-x-0 z-[60] flex justify-center transition-transform duration-500 sm:container ${
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
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-square"
            aria-label="Toggle Theme"
          >
            {theme === "night" ? (
              <Sun className="size-6" />
            ) : (
              <Moon className="size-6" />
            )}
          </button>
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
