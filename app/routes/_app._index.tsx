import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Bot, ChartNoAxesCombined, RefreshCcw, Sparkle } from "lucide-react";
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
      <main className="min-h-[100dvh] relative flex justify-center items-center overflow-x-clip">
        <div className="-z-10 absolute w-[70px] h-[1600px] -top-[640px] -rotate-[35deg] bg-primary/80 blur-[175px]"></div>
        <div className="max-w-6xl px-5 mx-auto flex flex-col items-center space-y-4 pt-20">
          <div className="badge badge-primary badge-lg font-semibold text-white mb-3 py-2">
            <Bot className="size-5" />
            Aftyrlife AI
          </div>
          <h1 className="leading-[1.1] lg:text-6xl md:text-5xl text-4xl md:font-extrabold font-bold text-center">
            AI-Powered Prompt Generation for Limitless Creativity
          </h1>
          <p className="md:text-lg text-base text-center max-w-2xl">
            Transform your ideas into powerful AI-driven prompts. Generate,
            refine, and optimize prompts effortlessly to unlock the full
            potential of AI.
          </p>
          <Link
            to="/login"
            className="mt-3 relative bg-gradient-to-br from-primary via-info to-accent rounded-full px-6 py-2 text-xl font-bold shadow-lg"
          >
            <span className="absolute inset-0 rounded-full bg-white m-1"></span>
            <span className="relative bg-gradient-to-r from-primary via-info to-accent bg-clip-text text-transparent">
              Get Started
            </span>
          </Link>
        </div>
      </main>
      <section className="py-8 md:py-12 xl:py-16 2xl:py-24 max-w-7xl px-5 mx-auto">
        <div className="text-center">
          <h2 className="mt-4 md:text-5xl text-3xl font-semibold mb-1">
            Crafting Tomorrow's Innovative Solutions
          </h2>
          <p className="text-base-content/70 text-lg mt-3 inline-block max-w-2xl">
            We're consistently pushing the boundaries of innovation to create
            groundbreaking solutions that effectively meet today's challenges.
          </p>
        </div>
        <div className="container mx-auto w-full rounded-xl mt-15 p-[1px] bg-gradient-to-tl from-primary via-info to-accent">
          <div className="p-12 grid lg:grid-cols-3 grid-cols-1 bg-base-200 rounded-xl">
            <div className="lg:border-r lg:border-b-0 border-b flex flex-col lg:py-0 py-6 gap-y-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent w-14 h-14 rounded-full">
                <Sparkle strokeWidth={2.5} className="size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
                <p className="text-base-content/70 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="lg:border-r lg:border-b-0 border-b flex flex-col lg:pl-10 pl-0 lg:py-0 py-6 gap-y-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent w-14 h-14 rounded-full">
                <ChartNoAxesCombined strokeWidth={2.5} className="size-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
                <p className="text-base-content/70 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:pl-10 pl-0 lg:py-0 py-6 gap-y-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent w-14 h-14 rounded-full">
                <RefreshCcw strokeWidth={2.5} className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
                <p className="text-base-content/70 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 xl:py-16 2xl:py-24 max-w-7xl px-5 mx-auto grid grid-cols-12 gap-12">
        <aside className="col-span-7">
          <h2 className="mt-4 md:text-5xl text-3xl font-semibold mb-1">
            Transformative Solutions Across the Spectrum
          </h2>
          <p className="text-base-content/70 text-lg mt-3 inline-block max-w-2xl">
            Our range of solutions tailored to meet the unique needs of diverse
            industries, driving transformation across the entire spectrum.
          </p>
          <div className="space-y-6">
            <div></div>
          </div>
        </aside>
        <aside></aside>
      </section>
    </>
  );
}
