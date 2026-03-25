# AI Engineer Memory — my-test-repo

## Stack & Conventions
- **Runtime**: Node.js with TypeScript (strict mode)
- **Framework**: Express 4.x
- **Testing**: Jest + ts-jest + Supertest (integration tests against the Express app)
- **Build**: `tsc` → `dist/`; dev mode via `ts-node-dev`
- **Project layout**: `src/app.ts` (Express setup) · `src/index.ts` (server entry) · `src/routes/` · `src/__tests__/`
- Tests live alongside source in `src/__tests__/*.test.ts`
- `jest.config.ts` uses `ts-jest` preset; `src/index.ts` excluded from coverage

## Past Decisions
- 2026-03-25: Bootstrapped the repo as a Node/Express/TypeScript app with a `/health` endpoint returning `{ status, timestamp }`. Full coverage via supertest integration test.

## Open Questions Resolved
<!-- Q&A pairs from human interactions -->
