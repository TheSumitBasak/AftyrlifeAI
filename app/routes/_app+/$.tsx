import { Link } from "@remix-run/react";

export default function NotFound() {
    return (
      <main className="relative min-h-[100dvh] flex items-center justify-center flex-col gap-6">
        <div className="-z-10 absolute w-[45px] h-[1600px] -top-[640px] -rotate-[35deg] bg-primary/80 blur-[175px]"></div>
        <h1 className="px-5 text-4xl font-extrabold text-center">
          404: Page Not Found
        </h1>
        <Link
          to="/"
          className="mt-3 relative bg-gradient-to-br from-primary via-info to-accent rounded-full px-6 py-2 text-lg font-bold shadow-lg"
        >
          <span className="absolute inset-0 rounded-full bg-white m-1"></span>
          <span className="relative bg-gradient-to-r from-primary via-info to-accent bg-clip-text text-transparent">
            Go to homepage
          </span>
        </Link>
      </main>
    );
}