import { Request, Response } from 'express';

export default function errorMiddlewares(
  err: unknown, 
  req: Request, 
  res: Response,
) {
  return res.status(500).json({ message: 'internal error' });
}