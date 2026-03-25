import { Router, Request, Response } from 'express';
import { name, version, description } from '../../package.json';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    name,
    version,
    description,
    environment: process.env.NODE_ENV ?? 'development',
    timestamp: new Date().toISOString(),
  });
});

export default router;
