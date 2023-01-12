const express = require('express')
const homecontroler = require('./controlers/homeControler')
const cubeControler = require('./controlers/cubeControler')

const router = express.Router()

router.get('/', homecontroler.index)
router.use('/cube',cubeControler)
router.get('/about', homecontroler.about)
module.exports = router