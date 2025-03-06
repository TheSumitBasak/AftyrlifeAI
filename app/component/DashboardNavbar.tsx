import { Link } from "@remix-run/react";
import { CircleUser, LogIn } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function DashboardNavbar() {
  return (
    <nav
      style={{
        backdropFilter: "blur(18px)",
      }}
      className={`border-b bg-base-100/70 border-base-content/50 sticky top-0 z-[60]`}
    >
      <div className="flex w-full items-center justify-between rounded-full px-6 py-3 lg:py-1.5">
        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="text-xl font-bold">AftyrlifeAI</h1>
          </Link>
        </div>
        <div className="inline-flex items-center gap-3">
          <ThemeToggle />
          {globalThis?.localStorage?.getItem("token") ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn !bg-transparent btn-sm border-0 btn-square"
              >
                <CircleUser
                  className="tooltip size-6 stroke-base-content"
                  data-tip="Dashboard"
                  strokeWidth={1.5}
                />{" "}
              </div>
              <ul
                data-theme="winter"
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-lg z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn btn-primary btn-sm btn-square" to="/login">
              <LogIn
                className="tooltip size-4 stroke-base-200"
                data-tip="Login"
                strokeWidth={3}
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
