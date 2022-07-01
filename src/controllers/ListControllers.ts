/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
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

  public getTalks = async (_req: Request, res: Response): Promise<void> => {
    const list = await this.service.getlist();
    res.status(200).json(list);
  };

  public postTalks = async (req: Request, res: Response): Promise<void> => {
    const { name, status } = req.body;
    const postTalks = await this.service.postlist(name, status);
    res.status(201).json(postTalks);
  };

  public putTalks = async (req: Request, res: Response): Promise<void> => {
    const { name, status } = req.body;
    const postTalks = await this.service.putlist(name, status);
    res.status(200).json(postTalks);
  };

  public deleteTalks = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    await this.service.deletelist(name);
    res.status(204).end();
  };
}
