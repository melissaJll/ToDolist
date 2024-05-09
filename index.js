//import { routes } from "./rotas/routes";
// const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const routes = require("./rotas/routes")
const sqlite3 = require("sqlite3").verbose()
// const connectToDb = require("./banco/db");
// connectToDb();


const app = express();
let port =  3000 || process.env.PORT ;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = new sqlite3.Database('database.db')

app.use(express.static(path.join(__dirname, "publica")));

//Trazendo rotas do arquivo só para isso
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodadando em http://localhost:${port}`);
});
