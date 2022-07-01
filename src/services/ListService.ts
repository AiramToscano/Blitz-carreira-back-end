import { ListTalks } from '../interfaces/ListInterface';

interface Model {
   getlist(): Promise<ListTalks[]>
}
export default class ListService {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  public async getlist(): Promise<ListTalks[]> {
    const list = await this.model.getlist();
    return list;
  }
}
