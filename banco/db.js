const mysql = require('mysql2')
// import mysql2 from 'mysql2';


//dados da conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testeBemViver'
});

const conexaoDB = conexao.connect((err)=>{
    if (err) {
        console.error(`Erro da conexão: ${err.message}`);
    }else{
        console.log('Banco conectado');
    }
})

module.exports = conexaoDB