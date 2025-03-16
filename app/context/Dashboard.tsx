import { useBlocker, useNavigate } from "@remix-run/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useNotifications } from "reapop";
import { Prompt } from "~/types/prompt";
import { deleteRequest, getRequest, postRequest } from "~/utility/api";

const DashboardContext = createContext<any>({});

export default function DashboardProvider({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [profile, setProfile] = useState<any>({});
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [session, setSession] = useState("");
  const { notify } = useNotifications();

  const [isSaved, setIsSaved] = useState(true);

  useBlocker(({ currentLocation, nextLocation }) => {
    if (
      nextLocation.search.includes("save") ||
      nextLocation.search.includes("deleted")
    )
      return false;
    return (
      !isSaved &&
      globalThis.confirm(
        "If you leave this page before saving, your data will be lost.\nAre you sure??"
      ) == false
    );
  });

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
      setProfile((res?.data as any)?.data);
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
      navigate(`/train-prompt/${createRes?.data?.data?._id}`);
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

  const resetChatMessage = async ({ promptId }: { promptId: string }) => {
    try {
      if (!cookies.token) return [];
      const res = await deleteRequest(`/chat/${promptId}`, cookies?.token);
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      globalThis.window.location.reload();
      return true;
    } catch (err: any) {
      notify(err?.response?.data?.message || err.message, "error");
      return false;
    }
  };

  const getPromptMessages = async ({
    promptId,
    page = 1,
  }: {
    promptId: string;
    page: number;
  }) => {
    try {
      if (!cookies.token) return [];
      const res = await getRequest(
        `/user-prompt/prompt-chat/${promptId}?page=${page}${
          session ? "&session=" + session : ""
        }`,
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

  const sendPromptMessage = async ({
    promptId,
    message,
  }: {
    promptId: string;
    message: string;
  }) => {
    try {
      if (!cookies.token) return;
      const dt: any = {
        message,
      };
      if (session) dt.session = session;
      const res = await postRequest(
        `/user-prompt/generate-prompt/${promptId}`,
        dt,
        cookies.token
      );
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      if ((res?.data as any)?.session) setSession((res?.data as any)?.session);
      return res.data;
    } catch (err: any) {
      console.log(err);
      notify(
        err?.response?.data?.message || err.message || "Internal server error",
        "error"
      );
    }
  };

  const savePromptMessage = async ({ promptId }: { promptId: string }) => {
    try {
      if (!cookies.token) return;
      if (!session) {
        notify("Prompt already saved!", "info");
        return;
      }
      const res = await postRequest(
        `/user-prompt/save-prompt/${promptId}`,
        { session },
        cookies?.token
      );
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      notify("Prompt saved successfully", "success");
      navigate(`/chat/${promptId}?saved=true`);
      return true;
    } catch (err: any) {
      notify(err?.response?.data?.message || err.message, "error");
      return false;
    }
  };

  const deleteUserPrompt = async ({ promptId }: { promptId: string }) => {
    try {
      if (!cookies.token) return [];
      const res = await deleteRequest(
        `/user-prompt/${promptId}`,
        cookies?.token
      );
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      notify("Prompt deleted successfully", "success");
      navigate("/dashboard?deleted=true");
      return true;
    } catch (err: any) {
      notify(err?.response?.data?.message || err.message, "error");
      return false;
    }
  };

  const getTrainMessages = async ({
    promptId,
    page = 1,
  }: {
    promptId: string;
    page: number;
  }) => {
    try {
      if (!cookies.token) return [];
      const res = await getRequest(
        `/user-prompt/test-prompt/${promptId}?page=${page}${
          session ? "&session=" + session : ""
        }`,
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

  const sendTrainMessage = async ({
    promptId,
    message,
  }: {
    promptId: string;
    message: string;
  }) => {
    try {
      if (!cookies.token) return;
      const dt: any = {
        message,
      };
      if (session) dt.session = session;
      const res = await postRequest(
        `/user-prompt/test-prompt/${promptId}`,
        dt,
        cookies.token
      );
      if (!res) {
        notify("Internal server error", "error");
        return false;
      }
      if ((res?.data as any)?.session) setSession((res?.data as any)?.session);
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
    resetChatMessage,
    prompt,
    setPrompt,
    getPromptMessages,
    sendPromptMessage,
    savePromptMessage,
    setIsSaved,
    deleteUserPrompt,
    getTrainMessages,
    sendTrainMessage,
    setSession,
    session
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
