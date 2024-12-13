import express from 'express'
import mysql2 from 'mysql2'
import router from './router/router.js'


const app = express();

app.use("", router);


