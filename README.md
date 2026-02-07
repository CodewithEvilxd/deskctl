<h1 align="center">Deskctl</h1>

<p align="center">
	Cross-platform desktop control suite with a local programmable API, dashboards, and SDK.
</p>

<p align="center">
	<a href="https://github.com/codewithevilxd/deskctl/actions/workflows/release-bridge.yml">Bridge Release</a>
	·
	<a href="https://github.com/codewithevilxd/deskctl">Repository</a>
</p>

## Overview

Deskctl combines a local desktop agent with web dashboards and a TypeScript SDK. The Bridge app exposes a local HTTP/WebSocket API, while the web apps provide operational control, monitoring, and documentation for the ecosystem.

## Monorepo Layout

### Apps

| App                        | Role                                      |
| -------------------------- | ----------------------------------------- |
| [apps/bridge](apps/bridge) | Tauri desktop agent with local API server |
| [apps/docs](apps/docs)     | Next.js documentation site                |
| [apps/web](apps/web)       | Web console built with TanStack stack     |
| [apps/hub](apps/hub)       | Dashboard surface (admin or ops)          |
| [apps/rhub](apps/rhub)     | Remote hub dashboard variant              |

### Packages

| Package                      | Role                             |
| ---------------------------- | -------------------------------- |
| [packages/sdk](packages/sdk) | TypeScript client SDK for Bridge |
| [packages/ui](packages/ui)   | Shared UI components             |
| [tooling](tooling)           | Shared lint/tsconfig presets     |

## Features

- Local programmable control via HTTP/WebSockets
- Desktop agent with system actions, telemetry hooks, and update support
- Web dashboards for control and monitoring workflows
- Typed SDK for rapid integration in apps and scripts
- Docs site with MDX-driven content

## Tech Stack

- Turborepo + pnpm (workspace orchestration)
- Tauri 2 + SolidJS (Bridge)
- React 19 + TanStack (Web apps)
- Next.js 16 (Docs)
- Tailwind CSS (UI styling)

## Getting Started

### Prerequisites

- Node.js >= 22
- pnpm 10.x
- Rust toolchain (required for Bridge builds)

### Install

```bash
pnpm install
```

### Develop

```bash
# Run everything in parallel
pnpm dev

# Or run a single target
pnpm dev:bridge
pnpm dev:docs
pnpm dev:web
pnpm dev:hub
pnpm dev:rhub
```

### Build

```bash
# Build all workspaces
pnpm build

# Build desktop app only
pnpm build:bridge
```

## Environment Variables

Create a .env file inside the app you are running and copy from the matching example.

| App  | Example file           | Variables                                         |
| ---- | ---------------------- | ------------------------------------------------- |
| Docs | apps/docs/.env.example | NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST |
| Web  | apps/web/.env.example  | VITE_BASE_URL                                     |
| Hub  | apps/hub/.env.example  | VITE_BASE_URL                                     |
| Rhub | apps/rhub/.env.example | VITE_BASE_URL                                     |

## Contributing

1. Fork the repo and create a feature branch.
2. Run pnpm install, then pnpm dev for local work.
3. Run pnpm check before submitting a PR.

## License

MIT
