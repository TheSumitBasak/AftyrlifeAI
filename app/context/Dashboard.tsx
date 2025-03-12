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

  const [profile, setProfile] = useState<any>({});
  const { notify } = useNotifications();

  useEffect(() => {
    if (!cookies.token) {
      navigate("/login");
      notify("Session expired", "info");
    } else {
      getProfile();
    }
  }, [cookies]);

  const getProfile = async () => {
    try {
      if (!cookies.token) return;
      const res = await getRequest("/profile", cookies.token);
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      setProfile(res.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const getPrompts = async (page = 1) => {
    try {
      if (!cookies.token) return;
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
      if (!cookies.token) return;
      const createRes: any = await postRequest(
        "/user-prompt",
        {
          name,
          description,
        },
        cookies?.token
      );

      if (!createRes?.data) {
        return "Internal server error";
      }
      notify("Prompt created successfully", "success");
      navigate("/train-prompt");
    } catch (err: any) {
      return err?.response?.data?.message || err.message;
    }
  };

  const getChatMessages = async ({
    promptId,
    page = 1,
  }: {
    promptId: string;
    page: number;
  }) => {
    try {
      if (!cookies.token) return [];
      const res = await getRequest(
        `/chat/${promptId}?page=${page}`,
        cookies?.token
      );
      if (!res) {
        notify("Internal server error", "error");
        return [];
      }
      return res.data;
    } catch (err: any) {
      notify(err?.response?.data?.message || err.message, "error");
      return [];
    }
  };

  const sendChatMessage = async ({
    promptId,
    message,
  }: {
    promptId: string;
    message: string;
  }) => {
    try {
      if (!cookies.token) return;
      const res = await postRequest(
        `/chat/${promptId}`,
        { message },
        cookies.token
      );
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

  const value = {
    getPrompts,
    createPrompt,
    getChatMessages,
    profile,
    sendChatMessage,
  };
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
