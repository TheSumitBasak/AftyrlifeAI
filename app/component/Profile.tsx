import { Link, useNavigate } from "@remix-run/react";
import { CircleUser } from "lucide-react";
import { useCookies } from "react-cookie";

export default function Profile() {
  const [cookies, setCookie, deleteCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const logout = () => {
    deleteCookie("token");
    navigate("/");
  };
  return (
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
        data-theme="fantasy"
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-lg z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              logout();
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
