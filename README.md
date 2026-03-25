# my-test-repo

A minimal Node.js + Express + TypeScript REST API.

## Endpoints

| Method | Path      | Description  |
|--------|-----------|--------------|
| GET    | `/health` | Health check |

### Health check response

```json
{
  "status": "ok",
  "timestamp": "2026-03-25T12:00:00.000Z"
}
```

## Getting started

```bash
npm install
npm run dev      # development (hot-reload)
npm run build    # compile to dist/
npm start        # run compiled output
npm test         # run tests with coverage
```

## Project structure

```
src/
  index.ts          # server entry point
  app.ts            # Express app setup
  routes/
    health.ts       # GET /health route
  __tests__/
    health.test.ts  # integration tests
```
