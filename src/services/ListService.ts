/* eslint-disable no-unused-vars */
import { ListTalks } from '../interfaces/ListInterface';

interface Model {
   getlist(): Promise<ListTalks[]>
   create(name: string, status: string, date: Date): Promise<number>
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
}
