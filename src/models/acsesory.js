const mongoose = require('mongoose');

const acsesorySchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    imageUrl:{
        type: String,
        required: true,
    }

})

acsesorySchema.path('imageUrl').validate(function(){
    return this.imageUrl.startsWith('http')
},'imageUrl should be link')