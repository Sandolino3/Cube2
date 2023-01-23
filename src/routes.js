const express = require('express')
const homecontroler = require('./controlers/homeControler')
const cubeControler = require('./controlers/cubeControler')

const router = express.Router()

router.use('/', homecontroler)
router.use('/cube',cubeControler)

module.exports = router