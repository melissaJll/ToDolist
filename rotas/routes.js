const routes = require("express").Router();
const express = require("express");
const app = express();

//import { getAll } from "../controller/TaskController";
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll);
//routes.post("/criar", TaskController.createTask)
routes.post("/inserir", TaskController.inserirTarefa);

 
module.exports = routes;
