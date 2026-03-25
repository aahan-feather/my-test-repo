import request from "supertest";
import app from "../app";

describe("GET /health", () => {
  it("returns 200 with status ok and a timestamp", async () => {
    const before = Date.now();
    const res = await request(app).get("/health");
    const after = Date.now();

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ status: "ok" });

    const ts = new Date(res.body.timestamp as string).getTime();
    expect(ts).toBeGreaterThanOrEqual(before);
    expect(ts).toBeLessThanOrEqual(after);
  });

  it("responds with JSON content-type", async () => {
    const res = await request(app).get("/health");
    expect(res.headers["content-type"]).toMatch(/application\/json/);
  });
});
