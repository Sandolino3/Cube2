const router = require('express').Router()
const acsesoryService = require('../services/acsesoryService')
router.get('/create', (req,res)=>{
    res.render('createAccessory')
})

router.post('/create',async (req,res)=>{
  await acsesoryService.create(req.body)
    res.redirect('/')
})


module.exports = router


