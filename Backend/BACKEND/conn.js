import pg from 'pg';
const { Client } = pg;

const connectionData = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432
}

const client = new Client(connectionData);
await client.connect();

export default client;
