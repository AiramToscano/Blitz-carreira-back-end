import { Pool } from 'mysql2/promise';
import { ListTalks } from '../interfaces/ListInterface';

export default class List {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getlist(): Promise<ListTalks[]> {
    const result = await this.connection.execute('SELECT * from list.talks');
    const [rows] = result;
    return rows as ListTalks[];
  }
}
