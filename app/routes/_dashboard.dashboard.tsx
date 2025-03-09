import { Link } from "@remix-run/react";
import { MessageCirclePlusIcon } from "lucide-react";
import PromptCard from "~/component/PromptCard";

const data = [
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },

  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
  {
    name: "Prompt 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in ex rerum quis consectetur rem, tenetur hic? Magni impedit, aperiam vitae praesentium explicabo eaque dolore libero dicta? Sed, quia doloremque!",
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Prompts.</h1>
        <Link to="/train-prompt" className="btn btn-primary text-base-100">
          <MessageCirclePlusIcon /> Create Prompt
        </Link>
      </div>
      <main className="mx-auto grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:px-15 px-5 mt-10">
        {data.map((ele) => (
          <PromptCard data={ele} />
        ))}
      </main>
    </>
  );
}
