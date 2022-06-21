import express, { Request, Response } from 'express';
import itemsController from './items.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.json(await itemsController.find(req.query));
});

router.get('/:id', async (req: Request, res: Response) => {
  res.json(await itemsController.findById(req.params.id!));
});

export default router;
