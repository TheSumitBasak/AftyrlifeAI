import { Link } from "@remix-run/react";
import { Loader, LogIn } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "~/context/Auth";

export default function Login() {
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const dt = await login(data);
    if (dt) {
      setError("password", { type: "custom", message: dt });
      setError("email", { type: "custom", message: "" });
    }
    setIsLoading(false);
  };

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mb-2">Login.</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 w-full space-y-3"
      >
        <div>
          <label>Email:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors.email ? "border-error" : ""
            }`}
          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
          </label>
          {errors.email && (
            <p className="text-sm text-error">
              {String(errors?.email?.message)}
            </p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors.password ? "border-error" : ""
            }`}
          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "password is required" })}
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          {errors.password && (
            <p className="text-sm text-error">
              {String(errors?.password?.message)}
            </p>
          )}
          <Link to="/forgot-password" className="text-right w-full block text-sm link link-primary mt-1">Forgot Password</Link>
        </div>
        <button className="btn btn-primary text-base-200 mt-4">
          {isLoading ? (
            <Loader className="size-5 stroke-base-200 spin" />
          ) : (
            <>
              <LogIn className="size-4 stroke-base-200" strokeWidth={3} />
              Login
            </>
          )}
        </button>
      </form>
      <p className="text-center mt-2">
        Don't have an account?{" "}
        <Link to="/signup" className="link link-primary">
          Sign up!
        </Link>
      </p>
    </section>
  );
}
