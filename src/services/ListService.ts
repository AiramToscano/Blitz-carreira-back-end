/* eslint-disable no-unused-vars */
import { ListTalks } from '../interfaces/ListInterface';

interface Model {
   getlist(): Promise<ListTalks[]>
   create(name: string, status: string, date: Date): Promise<number>
   update(name: string, status: string): Promise<number>
   destroy(name: string): Promise<void>
}
export default class ListService {
  constructor(private model: Model) {
    this.model = model;
  }

  public async getlist(): Promise<ListTalks[]> {
    const list = await this.model.getlist();
    return list;
  }

  public async postlist(name: string, status: string): Promise<number> {
    const date = new Date();
    const postlist = await this.model.create(name, status, date);
    return postlist;
  }

  public async putlist(name: string, status: string): Promise<number> {
    const postlist = await this.model.update(name, status);
    return postlist;
  }

  public async deletelist(name: string): Promise<void> {
    const postlist = await this.model.destroy(name);
    return postlist;
  }
}
