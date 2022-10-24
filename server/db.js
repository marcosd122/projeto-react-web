const mongoose = require("mongoose");
const mongodbUri = require('mongodb-uri')
let mongooseUri = mongodbUri.formatMongoose(config.mongo.uri)
mongoose.connect(mongooseUri, config.mongo.options)

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