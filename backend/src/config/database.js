const mongoose = require('mongoose')
mongoose.Promise = global.Promise

let connect = mongoose.connect('mongodb://localhost/todo')

module.exports = connect