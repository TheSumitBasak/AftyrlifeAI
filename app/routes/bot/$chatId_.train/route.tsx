import { useMatches } from "@remix-run/react";

export default function TrainBot() {
  const matches = useMatches();

  const res: any =
    matches.find((match) => match.id === "routes/bot/_layout")?.data || {};

  return <h1>Train Bot</h1>;
}
