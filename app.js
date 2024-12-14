import express from 'express'
import mysql2 from 'mysql2'
import router from './router/router.js'


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.use("", router);

app.listen(3401);

