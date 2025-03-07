import { Link } from "@remix-run/react";
import { LogIn, User } from "lucide-react";

export default function Signup() {
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mb-2">Register.</h1>
      <form className="grid grid-cols-1 w-full space-y-3">
        <div>
          <label>First Name:</label>
          <label className="input !outline-none mt-0.5 w-full validator">
            <User color="currentColor" className="size-4 stroke-base-content/65" strokeWidth={2}/>
            <input placeholder="First Name" required />
          </label>
        </div>
        <div>
          <label>Last Name:</label>
          <label className="input !outline-none mt-0.5 w-full validator">
            <User color="currentColor" className="size-4 stroke-base-content/65" strokeWidth={2}/>
            <input placeholder="Last Name" required />
          </label>
        </div>
        <div>
          <label>Email:</label>
          <label className="input !outline-none mt-0.5 w-full validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
        </div>
        <div>
          <label>Password:</label>
          <label className="input !outline-none mt-0.5 validator">
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
              required
              placeholder="Password"
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
        </div>
        <button className="btn btn-primary text-base-200 mt-4">
          <LogIn
            className="tooltip size-4 stroke-base-200"
            data-tip="Login"
            strokeWidth={3}
          />
          Register
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
