const conexao = require('../banco/db');


//Funções CRUD
// const getAll = (req, res) => {
//   return res.render("index");
// };

        //Read

const getAll = (req, res) => {
    const sql = 'SELECT * FROM Tarefas';
    conexao.query(sql, (error, results) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: "Erro ao buscar tarefas: " + error
            });
        } else {
            res.status(200).json({
                success: true,
                tarefas: results
            });
        }
    });
};

    //CREATE
const inserirTarefa = (req, res) => {
    const nomeTarefa = req.body.nomeTarefa;
    const dataCriacao = req.body.dataCriacao;
    const statusTarefa = req.body.statusTarefa ? true : false;
    const prioridade = req.body.prioridade;

    const sql = `INSERT INTO Tarefas (statusTarefa, nomeTarefa, dataCriacao, prioridade) VALUES (?, ?, NOW(), ?)`;

    conexao.query(sql, [statusTarefa, nomeTarefa, dataCriacao, prioridade], (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Erro ao inserir tarefa: " + error
            });
        }
        return res.status(201).json({
            message: "Tarefa inserida com sucesso!",
            data: results
        });
    });
};
         //DELETE
const apagarTarefa = (req, res) => {
    const tarefaID = req.params.tarefaID;
    const sql = 'DELETE FROM Tarefas WHERE TarefaID = ?';

    conexao.query(sql, [tarefaID], (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Erro ao apagar tarefa: " + error
            });
        }
        return res.status(200).json({
            message: "Tarefa apagada com sucesso!"
        });
    });
};


module.exports = {
  inserirTarefa, getAll, apagarTarefa
};

