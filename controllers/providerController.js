var db = require('../models');

module.exports = {
  getAllHargaProvider: function(req,res){
    console.log('halo',db.Detail)
    db.Detail.findAll({})
      .then((details)=>{
      res.send(details)
    })
  }
}
