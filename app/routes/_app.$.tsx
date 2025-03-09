import { Link } from "@remix-run/react";

export default function NotFound() {
    return (
      <main className="min-h-[calc(100dvh-95px)] flex items-center justify-center flex-col gap-6">
        <h1 className="px-5 text-4xl font-extrabold text-center">404: Page Not Found</h1>
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