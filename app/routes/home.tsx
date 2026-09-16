import type { Route } from "./+types/home";
import { Search } from "@carbon/react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div
      style={{
        width: 800
      }}
    >
      <Search
        closeButtonLabelText="Clear search input"
        id="search-default-1"
        labelText="Site search"
        placeholder="Placeholder text"
        size="md"
        type="search"
      />
    </div>
  )
}

