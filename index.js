//import { routes } from "./rotas/routes";
const express = require("express");
const path = require("path");
const routes = require("./rotas/routes")
const conexaoDB = require('./banco/db')


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "publica")));

//Trazendo rotas do arquivo só para isso
app.use(routes)

app.listen(port, () => {
  console.log(`servidor rodadando em http://localhost:${port}`);
});
