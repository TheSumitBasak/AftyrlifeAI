import { Link } from "@remix-run/react";
import { Loader, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import { useAuthContext } from "~/context/Auth";

export default function Login() {
  const { forgotPassword, verifyOtp, resetPassword } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isResendLoading, setIsResendLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpErr, setOtpErr] = useState("");
  const [token, setToken] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      if (currentSection == 0) {
        const res = await forgotPassword(data.email);
        if (res) {
          setError("email", { type: "custom", message: res });
          setIsLoading(false);
          return;
        }
        setEmail(data.email);
        setCurrentSection(1);
        setOtp("");
        setOtpErr("");
      } else if (currentSection == 1) {
        const res = await verifyOtp({ email, otp });
        if (typeof res == "string") {
          setOtpErr(res);
          setIsLoading(false);
          return;
        }
        setToken(res.resetToken);
        setCurrentSection(2);
      } else if (currentSection == 2) {
        const res = await resetPassword({
          email,
          otp,
          password: data.password,
          resetToken: token,
        });
        if (res) {
          setError("confirmPassword", { type: "custom", message: res });
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      setError("email", { message: error });
    }
    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setIsResendLoading(true);
    try {
      const res = await forgotPassword(email);
      if (res) {
        setError("email", { type: "custom", message: res });
      } else {
        setOtp("");
        setOtpErr("");
        setResendCooldown(30); // 30 seconds cooldown
      }
    } catch (error: any) {
      setError("email", { message: error });
    }
    setIsResendLoading(false);
  };

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  return (
    <section>
      <h1 className="text-3xl text-center font-bold mb-3">Forgot Password.</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 w-full space-y-3"
      >
        {currentSection == 0 && (
          <div className="space-y-3">
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
        )}
        {currentSection == 1 && (
          <div className="space-y-3">
            <label>OTP:</label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={{
                width: "100%",
                gap: "20px",
                marginTop: "5px",
              }}
              renderInput={(props) => (
                <input
                  required
                  {...props}
                  type="number"
                  className="input flex-grow-1 text-lg !outline-none"
                />
              )}
            />
            {otpErr && <p className="text-sm text-error">{otpErr}</p>}
            <p className="mt-5 text-center">
              Didn't receive OTP?{" "}
              <span
                onClick={isResendLoading ? () => {} : handleResendOtp}
                className={`${
                  resendCooldown > 0 || isResendLoading
                    ? "text-base-content/80 cursor-default"
                    : "link link-primary "
                }`}
              >
                {resendCooldown > 0
                  ? `Resend OTP (${resendCooldown}s)`
                  : "Resend OTP"}
              </span>
            </p>
          </div>
        )}
        {currentSection == 2 && (
          <div className="space-y-3">
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
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
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
                    <circle
                      cx="16.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
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
          </div>
        )}
        <button className="btn btn-primary text-base-200 mt-4">
          {isLoading ? (
            <Loader className="size-5 stroke-base-200 spin" />
          ) : (
            <>
              <LogIn className="size-4 stroke-base-200" strokeWidth={3} />
              {currentSection == 0 && "Send OTP"}
              {currentSection == 1 && "Verify OTP"}
              {currentSection == 2 && "Reset"}
            </>
          )}
        </button>
      </form>
      <p className="text-center mt-2">
        Remember password?{" "}
        <Link to="/login" className="link link-primary">
          Sign in!
        </Link>
      </p>
    </section>
  );
}
