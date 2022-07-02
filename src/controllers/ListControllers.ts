/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ListTalks } from '../interfaces/ListInterface';

interface Service {
    getlist(): Promise<ListTalks[]>
    postlist(name: string, status: string): Promise<number>
    putlist(name: string, status: string): Promise<number>
    deletelist(name: string): Promise<void>
}

export default class ListController {
  constructor(private service: Service) {
    this.service = service;
  }

  public getTalks = async (_req: Request, res: Response): Promise<object> => {
    try {
      const list = await this.service.getlist();
      return res.status(200).json(list);
    } catch (err) {
      return res.status(500).json({ message: 'Ocorreu um erro inesperado' });
    }
  };

  public postTalks = async (req: Request, res: Response, _next: NextFunction): Promise<object> => {
    const { name, status } = req.body;
    try {
      const postTalks = await this.service.postlist(name, status);
      return res.status(201).json(postTalks);
    } catch (err) {
      return res.status(500).json({ message: 'Ocorreu um erro inesperado' });
    }
  };

  public putTalks = async (req: Request, res: Response, _next: NextFunction)
  : Promise<void | object> => {
    const { name, status } = req.body;
    try {
      const postTalks = await this.service.putlist(name, status);
      return res.status(200).json(postTalks);
    } catch (err) {
      return res.status(500).json({ message: 'Ocorreu um erro inesperado' });
    }
  };

  public deleteTalks = async (req: Request, res: Response): Promise<object> => {
    const { name } = req.body;
    try {
      await this.service.deletelist(name);
      return res.status(204).end();
    } catch (err) {
      return res.status(500).json({ message: 'Ocorreu um erro inesperado' });
    }
  };
}
