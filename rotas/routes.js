const routes = require("express").Router();
//import { getAll } from "../controller/TaskController";
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id", TaskController.getById);

module.exports = routes;
