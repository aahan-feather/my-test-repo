import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  res.status(200).json({
    echo: req.body,
    timestamp: new Date().toISOString(),
  });
});

export default router;
