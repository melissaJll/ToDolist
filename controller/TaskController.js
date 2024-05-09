const Task = require("../models/Task");
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database('database.db')

//Funções CRUD


const getAll = async (req, res) => {
  db.all('SELECT * FROM Tarefas', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ tasksList: rows });
  });
};

// Função para criar uma nova tarefa
const createTask = async (req, res) => {
  const { nomeTarefa } = req.body;
  if (!nomeTarefa) {
    res.status(400).json({ error: "Task is required" });
    return;
  }
  db.run('INSERT INTO Tarefas (nomeTarefa) VALUES (?)', [nomeTarefa], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ TarefaID: this.lastID });
  });
};

// Função para obter uma tarefa pelo ID
const getById = async (req, res) => {
  db.get('SELECT * FROM Tarefas WHERE TarefaID = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: "Tarefa não encontrada" });
      return;
    }
    res.json({ task: row });
  });
};

// Função para atualizar uma tarefa
const updateTask = async (req, res) => {
  const { nomeTarefa } = req.body;
  db.run('UPDATE Tarefas SET nomeTarefa = ? WHERE TarefaID = ?', [nomeTarefa, req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: "Tarefa não encontrada" });
      return;
    }
    res.json({ message: "Tarefa atualizada com sucesso!" });
  });
};

// Função para deletar uma tarefa
const deleteTask = async (req, res) => {
  db.run('DELETE FROM Tarefas WHERE TarefaID = ?', [req.params.id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: "Tarefa não encontrada" });
      return;
    }
    res.json({ message: "Tarefa deletada com sucesso!" });
  });
};

module.exports = {
  getAll,
  createTask,
  getById,
  updateTask,
  deleteTask,
};
