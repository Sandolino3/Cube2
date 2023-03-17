const fs = require('fs/promises');
const Acsesory = require('../models/Acsesory');
const Cube = require('../models/Cube')

// const cubes = require('../db.json');
// const path = require('path')

exports.save = (cube) =>{

    // cubes.push({id:cubes.length, ...cube})
    // let textData = JSON.stringify(cubes,'',4)
    // return fs.writeFile(path.resolve('src','db.json'),textData,{encoding:'utf-8'});
    return Cube.create(cube);

}

exports.getOne = (id)=> Cube.findById(id).populate('acsesories');

exports.getAll = (search = '', from = 0, to = 6)=> {
    // const result = cubes
    // .filter(x => x.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
    // .filter(x=> x.difLevel >= from && x.difLevel <= to)
    // // .filter(x=> !(x.difLevel >= to))

    // return result;
    return Cube.find().lean();
};

exports.attachAcsesory = async (cubeId, acsesoryId)=>{

const cube = await Cube.findById(cubeId)
const acsesory = await Acsesory.findById(acsesoryId)

cube.acsesories.push(acsesory)
acsesory.cubes.push(cube)

await cube.save()
await acsesory.save()

return cube;
}

