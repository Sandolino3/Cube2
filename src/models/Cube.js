const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        maxlength: 120,
    },
    imageURL:{
        type: String,
        required: true,
    },
    difLevel:{
        type: Number,
        required: true,
        min:1,
        max:6,
    },
    acsesories:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Acsesory'
        }
    ]
})

cubeSchema.path('imageURL').validate(function(){
    return this.imageURL.startsWith('http')
},'imageUrl should be link')


const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube;