import { NextFunction, Response, Request } from 'express';

export default class Validator {
  static validatename = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    next();
  };

  static validatestatus = (req: Request, res: Response, next: NextFunction) => {
    const { status } = req.body;
    next();
    if (!status) return res.status(400).json({ message: '"status" is required' });
  };
}
