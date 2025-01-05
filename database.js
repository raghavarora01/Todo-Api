import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB, 
    port: process.env.MYSQL_ADDON_PORT,
    connectionLimit: 10,
    connectTimeout: 10000
})
pool.query('SELECT * FROM user', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
});
export default pool;