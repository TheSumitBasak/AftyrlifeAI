import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  Bot,
  ChartNoAxesCombined,
  HeartPulse,
  RefreshCcw,
  Sparkle,
} from "lucide-react";

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
        <div
          className="absolute bottom-0 h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
        <div className="-z-10 absolute w-[45px] h-[1600px] -top-[640px] -rotate-[35deg] bg-primary/80 blur-[175px]"></div>
        <div className="absolute -z-10 inset-0 h-[100dvh] pt-30 overflow-hidden pointer-events-none">
          <img
            src="/assets/hero.png"
            alt="hero"
            className="max-w-4xl opacity-50 mx-auto hero-img"
          />
        </div>
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
            className="mt-3 relative bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto rounded-full px-6 py-2 text-xl font-bold shadow-lg"
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
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto w-14 h-14 rounded-full">
                <Sparkle strokeWidth={2.5} className="size-7 stroke-white " />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
                <p className="text-base-content/70 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="lg:border-r lg:border-b-0 border-b flex flex-col lg:pl-10 pl-0 lg:py-0 py-6 gap-y-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto w-14 h-14 rounded-full">
                <ChartNoAxesCombined
                  strokeWidth={2.5}
                  className="size-7 stroke-white "
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lorem ipsum dolor sit</h3>
                <p className="text-base-content/70 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:pl-10 pl-0 lg:py-0 py-6 gap-y-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto w-14 h-14 rounded-full">
                <RefreshCcw strokeWidth={2.5} className="size-6 stroke-white" />
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
      <section className="py-8 md:py-12 xl:py-16 2xl:py-24 max-w-7xl px-5 mx-auto lg:grid grid-cols-12 gap-12">
        <aside className="lg:col-span-7 col-span-12 lg:text-left text-center">
          <h2 className="mt-4 md:text-5xl text-3xl font-semibold mb-1">
            Transformative Solutions Across the Spectrum
          </h2>
          <p className="text-base-content/70 text-lg mt-3 inline-block max-w-2xl">
            Our range of solutions tailored to meet the unique needs of diverse
            industries, driving transformation across the entire spectrum.
          </p>
          <div className="space-y-6 mt-7">
            <div>
              <div className="bg-[linear-gradient(0deg,_var(--color-base-200)_0%,_var(--color-primary)_100%)] w-full rounded-lg p-[.9px]">
                <div className="p-7 bg-base-200/30 bg-[radial-gradient(50%_50%_at_12.1%_21.8%,_color-mix(in_oklab,var(--color-primary)_10%,var(--color-base-100))_0%,_var(--color-base-100)_100%)] flex-grow-1 h-full rounded-lg flex flex-col align-start justify-center gap-3">
                  <div className="bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto rounded-full w-12 h-12 border-[.1px] flex items-center justify-center">
                    <HeartPulse
                      className="size-7 stroke-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-5">Healthcare</h3>
                    <div
                      className="h-[1px] w-[50%]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    ></div>
                  </div>
                  <p>
                    Streamlining processes, enhancing patient care, and
                    improving outcomes technology and insights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[linear-gradient(0deg,_var(--color-base-200)_0%,_var(--color-primary)_100%)] w-full rounded-lg p-[.9px]">
                <div className="p-7 bg-base-200/30 bg-[radial-gradient(50%_50%_at_12.1%_21.8%,_color-mix(in_oklab,var(--color-primary)_10%,var(--color-base-100))_0%,_var(--color-base-100)_100%)] flex-grow-1 h-full rounded-lg flex flex-col align-start justify-center gap-3">
                  <div className="bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto rounded-full w-12 h-12 border-[.1px] flex items-center justify-center">
                    <HeartPulse
                      className="size-7 stroke-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-5">Healthcare</h3>
                    <div
                      className="h-[1px] w-[50%]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    ></div>
                  </div>
                  <p>
                    Streamlining processes, enhancing patient care, and
                    improving outcomes technology and insights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[linear-gradient(0deg,_var(--color-base-200)_0%,_var(--color-primary)_100%)] w-full rounded-lg p-[.9px]">
                <div className="p-7 bg-base-200/30 bg-[radial-gradient(50%_50%_at_12.1%_21.8%,_color-mix(in_oklab,var(--color-primary)_10%,var(--color-base-100))_0%,_var(--color-base-100)_100%)] flex-grow-1 h-full rounded-lg flex flex-col align-start justify-center gap-3">
                  <div className="bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto rounded-full w-12 h-12 border-[.1px] flex items-center justify-center">
                    <HeartPulse
                      className="size-7 stroke-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-5">Healthcare</h3>
                    <div
                      className="h-[1px] w-[50%]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    ></div>
                  </div>
                  <p>
                    Streamlining processes, enhancing patient care, and
                    improving outcomes technology and insights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[linear-gradient(0deg,_var(--color-base-200)_0%,_var(--color-primary)_100%)] w-full rounded-lg p-[.9px]">
                <div className="p-7 bg-base-200/30 bg-[radial-gradient(50%_50%_at_12.1%_21.8%,_color-mix(in_oklab,var(--color-primary)_10%,var(--color-base-100))_0%,_var(--color-base-100)_100%)] flex-grow-1 h-full rounded-lg flex flex-col align-start justify-center gap-3">
                  <div className="bg-gradient-to-br from-primary via-info to-accent md:mx-0 mx-auto rounded-full w-12 h-12 border-[.1px] flex items-center justify-center">
                    <HeartPulse
                      className="size-7 stroke-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-5">Healthcare</h3>
                    <div
                      className="h-[1px] w-[50%]"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    ></div>
                  </div>
                  <p>
                    Streamlining processes, enhancing patient care, and
                    improving outcomes technology and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside className="col-span-5 lg:block hidden">
          <img
            src="/assets/transform.png"
            alt="transforn"
            className="rounded-xl sticky top-10"
            style={{
              filter: `brightness(${
                localStorage.getItem("site-theme") == "winter" ? 1.2 : 1
              })`,
            }}
          />
        </aside>
      </section>
    </>
  );
}
