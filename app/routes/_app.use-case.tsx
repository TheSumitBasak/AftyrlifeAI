import { Bot } from "lucide-react";

export default function UseCase() {
  return (
    <main className="pt-30 max-w-7xl px-5 mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Unlock Limitless Possibilities with AI-Driven Solutions
        </h1>
        <p className="text-lg max-w-4xl font-extralight mx-auto">
          Explore real-world use cases where our intelligent bots empower
          industries to innovate faster, <br />
          operate smarter, and deliver exceptional results.
        </p>
      </div>
      <section className="space-y-12 max-w-5xl mx-auto py-8 md:py-12 xl:py-16 2xl:py-24 px-5">
        <div className="p-[1px] bg-gradient-to-tl from-primary via-info to-accent rounded-2xl">
          <div className="flex items-stretch justify-center rounded-2xl overflow-hidden bg-base-200">
            <div className="card-body flex-grow-1 flex flex-col justify-around">
              <div>
                <h3 className="text-4xl font-semibold mb-7">
                  AI Customer Support Agents
                </h3>
                <div
                  className="h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, oklch(0.72 0.18 350.05 / 0.36) 50%, rgba(255, 255, 255, 0) 100%)",
                  }}
                ></div>
              </div>
              <div className="flex-grow-1 place-content-center">
                <p className="lg:w-[80%] my-auto text-lg font-extralight">
                  Deploy intelligent bots that provide instant, personalized
                  customer support, reducing response times and increasing
                  customer satisfaction — all without the need for complex
                  programming.
                </p>
              </div>
            </div>
            <figure className="bg-base-content/15 py-15 px-12">
              <Bot className="size-36" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
