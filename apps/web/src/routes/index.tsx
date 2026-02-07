import { BridgesProvider } from "@deskctl/sdk";
import { createFileRoute } from "@tanstack/react-router";
import BridgesControl from "~/components/bridges-contrl";
import { ThemeToggle } from "~/components/theme-toggle";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <BridgesProvider autoConnect={false}>
      <div className="flex min-h-svh flex-col items-center justify-center gap-3 p-2">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold sm:text-4xl">Deskctl Bridge SDK Test</h1>
          <p className="text-foreground/80 text-sm">
            Default data layer:{" "}
            <span className="font-mono font-semibold">Zustand + localStorage</span>
          </p>
        </div>
        <BridgesControl />
        <div className="flex flex-col items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </BridgesProvider>
  );
}
