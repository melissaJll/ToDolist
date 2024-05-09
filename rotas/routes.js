
const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

// Rota para obter todas as tarefas
routes.get("/", TaskController.getAll);

// Rota para criar uma nova tarefa
routes.post("/create", TaskController.createTask);

// Rota para obter uma tarefa pelo ID
routes.get("/getById/:id", TaskController.getById);

// Rota para atualizar uma tarefa 
routes.post("/updateById/:id", TaskController.updateTask);

// deletar uma tarefa
routes.delete("/deleteById/:id", TaskController.deleteTask);

module.exports = routes;
