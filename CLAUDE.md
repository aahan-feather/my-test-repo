# AI Engineer Memory — my-test-repo

## Stack & Conventions
- **Runtime:** Node.js with TypeScript (target ES2020, strict mode)
- **Framework:** Express.js with cors, helmet, express.json() middleware
- **Testing:** Jest + Supertest; tests live in `src/__tests__/*.test.ts`
- **Build:** `tsc` to `dist/`, dev via `nodemon` + `ts-node`
- **Entry point split:** `src/app.ts` exports the app (no listen), `src/index.ts` starts the server
- **Routes:** Mounted under `src/routes/`, each file exports an Express Router
- **Health check:** `GET /health` → `{ status: "ok", timestamp: ISO string, uptime: number }`

## Past Decisions
- 2026-03-25: Created initial Express TypeScript scaffold from scratch; chose to separate app creation from server listen for testability.

## Open Questions Resolved
<!-- Q&A pairs from human interactions -->
