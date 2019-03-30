const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurantes', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;