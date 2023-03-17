const router = require('express').Router();
const cubeService = require('../services/cubeService')
const acsesoryService = require('../services/acsesoryService')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post("/create",async (req, res) => {
    const cube = req.body

    if (cube.name.length < 2) {
        res.status(400).send('Name too short')
        return
    }

    try {
        await cubeService.save(cube)
        res.redirect('/')

    } catch (err) {
        res.status(400).send(err)
    }

})

router.get('/:id',async (req,res)=>{
    const cube = await cubeService.getOne(req.params.id).lean()
    res.render('details',{cube})
})

router.get('/:cubeId/attach',async (req,res)=>{
    const cube = await cubeService.getOne(req.params.cubeId).lean()
    const acsesories = await acsesoryService.getAll().lean()
    res.render('attachAccessory',{cube,acsesories})
})

router.post('/:cubeId/attach',async (req,res)=>{
    const acsesoryId = req.body.accessory

  await cubeService.attachAcsesory(req.params.cubeId,acsesoryId)
    res.redirect(`/cube/${req.params.cubeId}`)
})
module.exports = router