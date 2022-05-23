import express, { Request, Response } from 'express';
import itemsController from './items.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.json(await itemsController.find(req.query));
});

export default router;
