import { Link } from "@remix-run/react";
import { Loader, LogIn, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "~/context/Auth";

export default function Signup() {
  const { register: regis } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const dt = await regis(data);
    if (dt) {
      setError("email", { type: "custom", message: dt });
    }
    setIsLoading(false);
  };

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mb-2">Register.</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 w-full space-y-3"
      >
        <div>
          <label>First Name:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors?.firstName ? "border-error" : ""
            }`}
          >
            <User
              color="currentColor"
              className="size-4 stroke-base-content/65"
              strokeWidth={2}
            />
            <input
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
              })}
            />
          </label>

          {errors.firstName && (
            <p className="text-sm text-error">
              {String(errors?.firstName?.message)}
            </p>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors?.lastName ? "border-error" : ""
            }`}
          >
            <User
              color="currentColor"
              className="size-4 stroke-base-content/65"
              strokeWidth={2}
            />
            <input
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
              })}
            />
          </label>

          {errors.lastName && (
            <p className="text-sm text-error">
              {String(errors?.lastName?.message)}
            </p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors?.email ? "border-error" : ""
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
              errors?.password ? "border-error" : ""
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
              {...register("password", {
                required: "password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
                  message:
                    "Password must be 8-12 characters long, include 1 uppercase, 1 lowercase, 1 digit, and 1 special character.",
                },
              })}
            />
          </label>
          {errors.password && (
            <p className="text-sm text-error">
              {String(errors?.password?.message)}
            </p>
          )}
        </div>
        <div>
          <label>Confirm Password:</label>
          <label
            className={`input !outline-none mt-0.5 ${
              errors?.confirmPassword ? "border-error" : ""
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
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <p className="text-sm text-error">
              {String(errors?.confirmPassword?.message)}
            </p>
          )}
        </div>
        <button className="btn btn-primary text-base-200 mt-4">
          {isLoading ? (
            <Loader className="size-5 stroke-base-200 spin" />
          ) : (
            <>
              <LogIn className="size-4 stroke-base-200" strokeWidth={3} />
              Register
            </>
          )}
        </button>
      </form>
      <p className="text-center mt-2">
        Already have an account?{" "}
        <Link to="/login" className="link link-primary">
          Sign in!
        </Link>
      </p>
    </section>
  );
}
