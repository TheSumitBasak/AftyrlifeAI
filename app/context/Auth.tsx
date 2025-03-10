import { redirect, useNavigate, useNavigation } from "@remix-run/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useNotifications } from "reapop";
import { postRequest } from "~/utility/api";

const AuthContext = createContext<any>({});

export default function AuthProvider({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const { notify } = useNotifications();
  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      notify("Already logged in!", "info");
      navigate("/dashboard");
    }
  }, []);

  const register = async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      await postRequest("/auth/register", {
        email,
        password,
        firstName,
        lastName,
      });
      notify("Registration successfull", "success");
      navigate("/login");
    } catch (err: any) {
      return err?.response?.data?.message || err.message;
    }
  };

  const login = async ({
    email,
    password,
  }: {
    email: String;
    password: string;
  }) => {
    try {
      const loginRes: any = await postRequest("/auth/login", {
        email,
        password,
      });

      if (!loginRes?.data?.token) {
        return "Invalid credential";
      }
      setCookie("token", loginRes?.data?.token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
      notify("Login successfull", "success");
      navigate("/dashboard");
    } catch (err: any) {
      return err?.response?.data?.message || err.message;
    }
  };

  const value = { login, register };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext not found");
  return context;
}
