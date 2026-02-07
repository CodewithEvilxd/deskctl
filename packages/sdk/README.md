# @deskctl/sdk

SDK for [Deskctl Bridge](https://deskctl.online) devices. REST/WebSocket client and React hooks for controlling your PC over the local network.

## Documentation

- [Getting Started](https://deskctl.online/docs/sdk/getting-started)
- [Hooks Reference](https://deskctl.online/docs/sdk/hooks)
- [Custom Storage](https://deskctl.online/docs/sdk/custom-persistence)
- [Changelog](https://deskctl.online/docs/sdk/changelog)

## Install

```bash
npm install @deskctl/sdk @tanstack/react-query
# or
pnpm add @deskctl/sdk @tanstack/react-query
# or
yarn add @deskctl/sdk @tanstack/react-query
# or
bun add @deskctl/sdk @tanstack/react-query
```

## Quick Start

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BridgesProvider, useBridges, useSystemStats, useMedia } from "@deskctl/sdk";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BridgesProvider>
        <Dashboard />
      </BridgesProvider>
    </QueryClientProvider>
  );
}

function Dashboard() {
  const { bridges, addBridge } = useBridges();

  // Add a bridge
  const id = addBridge({ config: { host: "192.168.1.100", port: 9990 }, name: "My PC" });

  // Use hooks with bridgeId
  const { data: stats } = useSystemStats(id);
  const { data: media, control } = useMedia(id);

  return <div>{stats?.cpu_usage}% CPU</div>;
}
```

## Hooks

All hooks take a `bridgeId` as the first argument.

| Hook                  | Description                                 |
| --------------------- | ------------------------------------------- |
| `useSystemStats(id)`  | Real-time CPU, RAM, GPU stats via WebSocket |
| `useSystemInfo(id)`   | Static system info (OS, hardware) via REST  |
| `useMedia(id)`        | Media playback state + controls             |
| `useProcesses(id)`    | Running processes + kill/launch             |
| `usePower(id)`        | Shutdown, restart, sleep, hibernate         |
| `useBridgeStatus(id)` | Connection status                           |

## Low-Level Client

Use `@deskctl/sdk/client` for direct API access without React:

```ts
import { createBridgeClient } from "@deskctl/sdk/client";

const client = createBridgeClient({ host: "192.168.1.100", port: 9990 });
const info = await client.getSystemInfo();
await client.mediaControl("play_pause");
```

## Types

Import types separately:

```ts
import type { SystemInfo, MediaStatus, ProcessInfo } from "@deskctl/sdk/types";
```

## License

MIT
