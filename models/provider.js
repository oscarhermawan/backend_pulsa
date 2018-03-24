var mongoose = require('mongoose')
var Schema = mongoose.Schema

var providerSchema = new Schema({
  id:String,
  kode_provider:String,
  nama_provider:String
})

var Provider = mongoose.model('Provider', providerSchema)

module.exports = Provider
