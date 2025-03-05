import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "~/component/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <main className="h-[100dvh] relative flex justify-center items-center overflow-x-clip">
        <div className="-z-10 absolute w-[70px] h-[1600px] -top-[640px] -rotate-[35deg] bg-primary/80 blur-[175px]"></div>
        <div className="max-w-6xl px-5 mx-auto flex flex-col items-center space-y-4">
          <div className="badge badge-primary font-semibold text-white mb-6">
            Lorem Ipsum
          </div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl md:font-extrabold font-bold text-center">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="md:text-lg text-base text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            architecto? Tempore, aliquam beatae.
          </p>
          <Link to="/dashboard" className="mt-3 relative bg-gradient-to-br from-primary via-info to-accent rounded-full px-6 py-2 text-xl font-bold shadow-lg">
            <span className="absolute inset-0 rounded-full bg-white m-1"></span>
            <span className="relative bg-gradient-to-r from-primary via-info to-accent bg-clip-text text-transparent">
              Get Started
            </span>
          </Link>
        </div>
      </main>
      <section className="h-[500dvh]"></section>
    </>
  );
}
