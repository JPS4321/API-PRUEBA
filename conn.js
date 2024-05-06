import pg from 'pg';
const { Client } = pg;

 
const connectionData = {
    user: "blog_db_p3hh_user",
    host: "postgres://blog_db_p3hh_user:huca7Whkwl9g83KPwThvGVLigEkOM7Ry@dpg-cos39e20si5c739okhm0-a.oregon-postgres.render.com/blog_db_p3hh",
    database: "blog_db_p3hh",
    password: "huca7Whkwl9g83KPwThvGVLigEkOM7Ry",
    port: 5432,

}

console.log("Conexión a la base de datos con:", connectionData);
const client = new Client(connectionData);
await client.connect();

export default client;
