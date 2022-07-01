import { Request, Response } from 'express';
import { ListTalks } from '../interfaces/ListInterface';

interface Service {
    getlist(): Promise<ListTalks[]>
}

export default class ListController {
  constructor(private service: Service) {
    this.service = service;
  }

  public getTalks = async (_req: Request, res: Response): Promise<void> => {
    const list = await this.service.getlist();
    res.status(200).json(list);
  };
}
