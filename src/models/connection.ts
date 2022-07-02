import mysql from 'mysql2/promise'; // instalar mysql2 e dotenv
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b8d2c73c9d1276',
  password: 'f0e10719',
  database: 'heroku_f3d2cda926a86f0',
});
