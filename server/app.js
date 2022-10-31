const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const userController = require('./controller/user')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://Marcosd122:Guimaraes2@cluster0.h5h9fpy.mongodb.net/?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log('Erro no Banco de Dados')
    } else {
        console.log('Banco de dados conectado com sucesso!')
    }
}); 

app.post('/inscrever', userController.inscrever)
app.post('/entrar', userController.entrar)


app.listen(5000, () => {
    console.log(`Backend em execução na porta 5000`)
})