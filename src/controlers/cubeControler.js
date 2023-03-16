const router = require('express').Router();
const cubeService = require('../services/cubeService')

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
    console.log(cube);
    res.render('attachAccessory',{cube})
})
module.exports = router