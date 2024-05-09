//import { routes } from "./rotas/routes";
const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const routes = require("./rotas/routes")
const connectToDb = require("./banco/db");

connectToDb();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "publica")));

//Trazendo rotas do arquivo só para isso
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodadando em http://localhost:${port}`);
});
