const router = require("express").Router()
// const cubes = require("../db.json")

const cubeService = require('../services/cubeService')

router.get("/",(req,res)=>{

    let {search, from, to} = req.query
  
    
    const cubes = cubeService.getAll(search, from, to)
    res.render('index', {cubes})
})

router.get("/about",(req,res)=>{
    res.render('about')
})

// router.post("/create",(req,res)=>{
//     console.log(req.body);
//     res.send('Cube has been Uploaded')
// })

module.exports = router