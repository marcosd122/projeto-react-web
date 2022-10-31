const UserModel = require("../models/user");

module.exports.inscrever = (req, res) => {
  console.log(req.body);

  // e-mail não deve existir já no banco de dados

  const newUser = new UserModel({
    nome: req.body.nome,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "Cadastro realizado com sucesso" });
    })
    .catch((err) => {
      res.send({ code: 500, message: "ERROR - Cadastro não realizado" });
    });
};

module.exports.entrar = (req, res) => {
  console.log(req.body.email);

  // correspondência de e-mail e senha

  UserModel.findOne({ email: req.body.email })
    .then((result) => {
      console.log(result, "11");

      // corresponder a senha com req.body.password

      if (result.password !== req.body.password) {
        res.send({ code: 404, message: "Senha Incorreta" });
      } else {
        res.send({
          email: result.email,
          code: 200,
          message: "Usuário encontrado",
          token: "hfgdhg",
        });
      }
    })
    .catch((err) => {
      res.send({ code: 500, message: "Usuário não encontrado" });
    });

    //  newUser.save().then(() => {
    //   res.send({ code: 200, message: 'Sucesso na inscrição' })
    // }).catch((err) => {
    //    res.send({ code: 500, message: 'Erro de inscrição' })
    // })

  }
