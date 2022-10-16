const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',  
    host: 'localhost',      
    password: 'Guimaraes2',
    database: 'db'
});


app.post('/registro', (req, res) => {

    const usuarioNome = req.body.usuarioNome
    const usuarioEmail = req.body.usuarioEmail
    const usuarioSenha = req.body.usuarioSenha

    db.query (
        "INSERT INTO cadastro (usuarioNome, usuarioEmail, usuarioSenha) VALUES (?, ?, ?)",
        [usuarioNome, usuarioEmail, usuarioSenha],
        (err, result) => {
            console.log(err)
        }
    )
})

app.post('/login', (req, res) => {
    
    const usuarioEmail = req.body.usuarioEmail
    const usuarioSenha = req.body.usuarioSenha

    db.query (
        "SELECT * FROM cadastro WHERE usuarioEmail = ? AND usuarioSenha = ?",
        [usuarioEmail, usuarioSenha],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }
                if (result.length > 0) {                    
                    res.send(result)
                } else {
                    res.send({message: "E-mail ou senha incorreta!!"})
                }
            }         
        )
})

//Parâmetros de função

app.listen(3001, () => {
    console.log('Rodando na porta 3001')
});