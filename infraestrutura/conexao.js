const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'a1b2c3',
    database: 'agenda-petshop'
})

module.exports = conexao