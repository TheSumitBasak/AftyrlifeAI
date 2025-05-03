import { Bot } from "lucide-react";

export default function UseCase() {
  const data = [
    {
      title: "AI Customer Support Agents",
      description: `
      Deploy intelligent bots that provide instant, personalized
      customer support, reducing response times and increasing
      customer satisfaction — all without the need for complex
      programming.`,
    },
    {
      title: "Sales and Lead Generation Bots",
      description: `
      Build conversational agents that engage visitors, qualify leads,
      and guide potential customers through your sales funnel effortlessly,
      boosting conversions around the clock.`,
    },
    {
      title: "Healthcare Virtual Assistants",
      description: `
      Create bots that help patients schedule appointments, answer health
      queries, and provide pre-screening support — improving efficiency
      and patient experiences.`,
    },
    {
      title: "Financial Advisory Bots",
      description: `
      Launch bots that assist clients with financial planning, investment
      insights, and basic banking queries while maintaining high levels of
      compliance and data security.`,
    },
    {
      title: "E-commerce Shopping Assistants",
      description: `
      Offer personalized shopping experiences with bots that recommend
      products, answer queries, and help customers make faster purchase
      decisions.`,
    },
    {
      title: "HR and Employee Support Bots",
      description: `
      Automate HR tasks like onboarding, answering policy-related questions,
      and providing employee support with AI bots that keep your workforce
      informed and engaged.`,
    },
    {
      title: "Education and Training Assistants",
      description: `
      Empower learners with interactive bots that answer questions,
      deliver study materials, and guide them through customized
      learning paths.`,
    },
    {
      title: "Event Management and RSVP Bots",
      description: `
      Simplify event coordination with bots that manage registrations,
      provide event updates, and collect attendee feedback seamlessly.`,
    },
  ];

  return (
    <main className="pt-30 relative flex justify-center items-center overflow-x-clip">
      <div className="-z-10 absolute w-[45px] h-[1600px] -top-[640px] -rotate-[35deg] bg-primary/80 blur-[175px]"></div>
      <div className="max-w-7xl px-5 mx-auto ">
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
        <section className="lg:space-y-15 space-y-12 max-w-5xl mx-auto py-8 md:py-12 xl:py-16 2xl:py-24 px-5">
          {data.map((ele, index) => (
            <div
              key={index}
              className="p-[1px] bg-gradient-to-tl from-primary via-info to-accent rounded-2xl overflow-hidden"
            >
              <div className="flex md:flex-row flex-col-reverse items-stretch justify-center rounded-2xl bg-base-200">
                <div className="card-body flex-grow-1 flex flex-col justify-around">
                  <div>
                    <h3 className="text-4xl font-semibold mb-7">{ele.title}</h3>
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
                      {ele.description}
                    </p>
                  </div>
                  <div>
                    <div className="tooltip tooltip-bottom">
                      <div className="tooltip-content">
                        <div className="px-5 py-2">Coming soon</div>
                      </div>
                      <button className="btn btn-primary text-base-100 !cursor-not-allowed">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
                <figure className="bg-base-content/15 py-20 px-12">
                  <Bot className="size-36 mx-auto" />
                </figure>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
