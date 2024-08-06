import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost', // MySQL server host
  user: 'root', //  MySQL username
  password: 'password', //  MySQL password
  database: 'text_management', // database name
};

export async function executeQuery(query, params) {
  const connection = await mysql.createConnection(dbConfig);
  const [results] = await connection.execute(query, params);
  connection.end();
  return results;
}
