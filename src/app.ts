import express, { Application } from "express";
import healthRouter from "./routes/health";

const app: Application = express();

app.use(express.json());

app.use(healthRouter);

export default app;
