import { Link, Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="fixed inset-0 overflow-auto grid grid-cols-2">
      <div className="relative overflow-hidden flex items-center justify-center">
        <Link className="absolute top-5 left-5" to="/">
          <h1 className="text-xl font-bold">AftyrlifeAI</h1>
        </Link>
        <h1 className="lg:text-6xl md:text-5xl text-4xl md:font-extrabold font-bold text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <div className="absolute inset-0 nav-design-container bg-base-200 -z-10"></div>
      </div>
      <div className="max-w-[90vw] w-96 mx-auto flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
}
