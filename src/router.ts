import express, { Request, Response } from 'express';
import itemsController from './items.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.json(await itemsController.find(req.query));
});

router.get('/:id', async (req: Request, res: Response) => {
  res.json(await itemsController.findById(req.params.id!));
});

router.post('/', async (req: Request, res: Response) => {
  res.json(await itemsController.create(req.body));
});

router.put('/:id', async (req: Request, res: Response) => {
  res.json(await itemsController.update(req.params.id!, req.body));
});

router.delete('/:id', async (req: Request, res: Response) => {
  res.json(await itemsController.remove(req.params.id!));
});

export default router;
