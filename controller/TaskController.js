const Task = require("../models/Task");

//Funções CRUD


const getAll = async (req, res) => {
    try {
      const tasksList = await Task.find();
      res.json({ tasksList });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  const createTask = async (req, res) => {
    const task = req.body;
    if (!task.task) {
      res.status(400).json({ error: "Task is required" });
      return;
    }
    try {
      const newTask = await Task.create(task);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const getById = async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id });
      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      res.json({ task });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
// Função para atualizar uma tarefa
const updateTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    res.json({ message: "Tarefa atualizada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.json({ message: "Tarefa deletada com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAll,
  createTask,
  getById,
  updateTask,
  deleteTask,
};
