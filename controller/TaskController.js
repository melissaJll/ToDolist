const conexao = require('../banco/db')

//Funções CRUD

const getAll = (req, res) => {
  return res.render("index");
};


const inserirTarefa = (req, res) => {
    const nomeTarefa = req.body.nomeTarefa;
    const dataCriacao = req.body.dataCriacao;
    // Convertendo o valor do checkbox para booleano
    const statusTarefa = req.body.statusTarefa ? true : false;
    const prioridade = req.body.prioridade;
    
    const sql = `INSERT INTO Tarefas (nomeTarefa, dataCriacao, statusTarefa, prioridade) VALUES (?, ?, ?, ?)`;

    conexao.query(sql, [nomeTarefa, dataCriacao, statusTarefa, prioridade], (error, results) => {
        if (error) {
            return res.status(500).send({
                success: false,
                message: "Erro ao inserir tarefa: " + error
            });
        }
        return res.status(201).send({
            success: true,
            message: "Tarefa inserida com sucesso!",
            data: results
        });
    });
};

module.exports = {
  getAll,
  inserirTarefa,
};

