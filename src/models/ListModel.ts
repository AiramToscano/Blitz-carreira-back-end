import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
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

  public async create(name: string, status: string, date: Date): Promise<number> {
    const query = 'INSERT INTO list.talks (name, status, created_at) VALUES(?, ?, ?)';
    const [newSpectator] = await this.connection
      .execute<ResultSetHeader>(query, [name, status, date]);
    return newSpectator.insertId;
  }

  public async update(name: string, status: string): Promise<number> {
    const query = 'UPDATE list.talks SET status = ? WHERE name=?';
    const [newSpectator] = await this.connection
      .execute<ResultSetHeader>(query, [status, name]);
    return newSpectator.insertId;
  }

  public async destroy(name: string): Promise<void> {
    const query = 'DELETE FROM list.talks WHERE name=?';
    await this.connection.execute<ResultSetHeader>(query, [name]);
  }
}
