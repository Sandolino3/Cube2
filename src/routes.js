const express = require('express')
const homecontroler = require('./controlers/homeControler')
const cubeControler = require('./controlers/cubeControler')
const acsesoryControler = require('./controlers/acsesoryControler')

const router = express.Router()

router.use('/', homecontroler)
router.use('/cube',cubeControler)
router.use('/acsesory', acsesoryControler)

module.exports = router