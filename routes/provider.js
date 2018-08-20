var express = require('express')
var router = express.Router()
var api = require('../controllers/providerController')

router.get('/', api.getAllHargaProvider)

module.exports = router
