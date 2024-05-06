//import { routes } from "./rotas/routes";
const express = require("express");
const routes = require("./rotas/routes");
const path = require("path");
const conexaoDB = require('./banco/db');

const app = express();
const port = 3000;

//JSON
app.use(express.json());

//HTML EJS
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "publica")));

//Trazendo rotas do arquivo só para isso
app.use(routes)

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
