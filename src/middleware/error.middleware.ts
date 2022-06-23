import { NextFunction, Request, Response } from 'express';
import HttpException from '../common/http-exception';

export const handle404 = (req: Request, res: Response, next: NextFunction) => {
  const message = '404 - Not Found';

  res.status(404).send(message);
};

// Must match Express error-handling signature even when not using some of the parameters.
export const handleError = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = error.statusCode || error.status || 500;

  res.status(status).send(error);
};
