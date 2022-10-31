
const mongoose = require('mongoose');


module.exports = mongoose.model('User',
 { nome: String, email: String, password: String});