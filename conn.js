import pg from 'pg';
const { Client } = pg;

const connectionData = {
    user: "blog_db_p3hh_user",
    host: "dpg-cos39e20si5c739okhm0-a.oregon-postgres.render.com",
    database: "blog_db_p3hh",
    password: "huca7Whkwl9g83KPwThvGVLigEkOM7Ry",
    port: 5432,
    ssl: {
        rejectUnauthorized: false // No rechazar certificados no autorizados
    }
};

const client = new Client(connectionData);

client.connect()
    .then(() => console.log("Conexión a la base de datos exitosa."))
    .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });

export default client;
