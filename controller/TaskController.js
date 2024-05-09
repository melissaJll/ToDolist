const conexao = require("../banco/db");

//Funções CRUD
// const getAll = (req, res) => {
//   return res.render("index");
// };
const inserirTarefa = (req, res) => {
  const nomeTarefa = req.body.nomeTarefa;
  const dataCriacao = req.body.dataCriacao;
  const prioridade = req.body.prioridade;

  // Certifique-se de que o valor de 'prioridade' corresponda a 'Alta', 'Média' ou 'Baixa'
  if (!["Alta", "Média", "Baixa"].includes(prioridade)) {
    return res.status(400).send({
      message: "Erro: Valor de 'prioridade' inválido.",
    });
  }

  const sql = `INSERT INTO Tarefas (nomeTarefa, dataCriacao, prioridade) VALUES (?, NOW(), ?)`;

  conexao.query(sql, [nomeTarefa, prioridade], (error, results) => {
    if (error) {
      return res.status(500).send({
        message: "Erro ao inserir tarefa: " + error,
      });
    }
    return res.status(201).send({
      message: "Tarefa inserida com sucesso!",
      data: results,
    });
  });
};

const getAll = (req, res) => {
  const sql = "SELECT * FROM Tarefas";
  conexao.query(sql, (error, results) => {
    if (error) {
      res.status(500).send("Erro ao buscar tarefas: " + error);
    } else {
      res.render("index", { tarefas: results });
    }
  });
};

module.exports = {
  inserirTarefa,
  getAll,
};
