const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'Guimaraes2',
database: 'db'
});


app.get('/', (req, res) => {})

//Parâmetros de função

app.listen(3001, () => {
    console.log('Rodando na porta 3001')
});