var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Pulsa = new Schema({
  provider_id :{
    type: Schema.Types.ObjectId,
    ref:'Provider'
  },
  kode:String,
  keterangan:String,
  ketersediaan:Boolean
})

var Pulsa = mongoose.model('Pulsa', pulsaSchema)

module.exports = Pulsa
