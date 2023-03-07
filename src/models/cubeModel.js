const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        maxlength: 120,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    difficultyLevel:{
        type: Number,
        required: true,

    }
})

cubeSchema.path('imageUrl').validate(function(){
    return this.name.startsWith('http')
},'imageUrl should be link')


const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube;