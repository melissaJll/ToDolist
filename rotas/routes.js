const routes = require("express").Router();
//import { getAll } from "../controller/TaskController";
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll);
routes.post("/create", TaskController.createTask);

module.exports = routes;
