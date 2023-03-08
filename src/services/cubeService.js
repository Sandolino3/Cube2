const fs = require('fs/promises');
const cubes = require('../db.json');
const path = require('path')
const Cube = require('../models/cubeModel')

exports.save = (cube) =>{

    // cubes.push({id:cubes.length, ...cube})
    // let textData = JSON.stringify(cubes,'',4)
    // return fs.writeFile(path.resolve('src','db.json'),textData,{encoding:'utf-8'});
    return Cube.create(cube);

}

exports.getOne = (id)=> Cube.findById(id);

exports.getAll = (search = '', from = 0, to = 6)=> {
    // const result = cubes
    // .filter(x => x.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
    // .filter(x=> x.difLevel >= from && x.difLevel <= to)
    // // .filter(x=> !(x.difLevel >= to))

    // return result;
    return Cube.find().lean();
};
