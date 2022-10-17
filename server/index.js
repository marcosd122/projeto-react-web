const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userId",
    secret: "userSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60 * 60 * 24 }
}));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Guimaraes2",
  database: "db",
});

app.post("/registro", (req, res) => {
  const usuarioNome = req.body.usuarioNome;
  const usuarioEmail = req.body.usuarioEmail;
  const usuarioSenha = req.body.usuarioSenha;

  bcrypt.hash(usuarioSenha, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO cadastro (usuarioNome, usuarioEmail, usuarioSenha) VALUES (?, ?, ?)",
      [usuarioNome, usuarioEmail, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.post("/logado", (req, res) => {
  const usuarioNome = req.body.usuarioNome;
  const usuarioEmail = req.body.usuarioEmail;
  const usuarioSenha = req.body.usuarioSenha;

  db.query(
    "SELECT * FROM cadastro WHERE usuarioNome = ?, usuarioEmail = ?;",
    usuarioNome, usuarioEmail,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(usuarioSenha, result[0].usuarioSenha, (err, response) => {
            if (response) {
                res.send(result)                
            } else {
                res.send({ message: "E-mail ou senha incorreta!!" });  
            }
        })
      } else {
        res.send({ message: "Usuário não existe" });
      }
    }
  );
});

//Parâmetros de função

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
