import { useNavigate } from "@remix-run/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useNotifications } from "reapop";
import { getRequest, postRequest } from "~/utility/api";

const DashboardContext = createContext<any>({});

export default function DashboardProvider({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const { notify } = useNotifications();

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      notify("Session expired", "info");
    }
  }, [cookies]);

  const getPrompts = async (page = 1) => {
    try {
      const res = await getRequest(`/user-prompt?page=${page}`, cookies.token);
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      return res.data;
    } catch (err: any) {
      console.log(err);
      notify(
        err?.response?.data?.message || err.message || "Internal server error",
        "error"
      );
    }
  };

  const createPrompt = async ({
    name,
    description,
  }: {
    name: String;
    description: string;
  }) => {
    try {
      const loginRes: any = await postRequest("/user-prompt", {
        name,
        description,
      }, cookies?.token);

      if (!loginRes?.data) {
        return "Internal server error";
      }
      notify("Prompt created successfully", "success");
      navigate("/train-prompt");
    } catch (err: any) {
      return err?.response?.data?.message || err.message;
    }
  };

  const value = { getPrompts, createPrompt };
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("DashboardContext not found");
  return context;
}
