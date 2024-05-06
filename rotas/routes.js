const routes = require("express").Router();
const express = require("express");
const app = express();

const TaskController = require("../controller/TaskController")


routes.get("/", (req, res) => { TaskController.getAll(req, res); });
routes.post("/inserir", TaskController.inserirTarefa);
routes.delete('/apagar/:tarefaID', TaskController.apagarTarefa);


 
module.exports = routes;
