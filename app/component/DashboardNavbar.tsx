import { Link } from "@remix-run/react";
import { CircleUser, LogIn } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Profile from "./Profile";

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
          {globalThis?.document?.cookie?.includes?.("token") ? (
            <Profile />
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
