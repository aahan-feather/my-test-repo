import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import healthRouter from './routes/health';
import echoRouter from './routes/echo';
import statusRouter from './routes/status';
import infoRouter from './routes/info';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/health', healthRouter);
app.use('/api/echo', echoRouter);
app.use('/api/status', statusRouter);
app.use('/api/info', infoRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Not Found' });
});

export default app;
