import dotenv from 'dotenv'
import mysql2 from 'mysql2'


//used to load dotenv variables from .env file
dotenv.config()

const pool = mysql2.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.DATABASE_PORT,
}).promise;







