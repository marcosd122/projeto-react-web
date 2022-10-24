const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Conectado ao banco de dados com sucesso");
	} catch (error) {
		console.log(error);
		console.log("Não foi possível conectar o banco de dados!");
	}
};