const mongoose = require('mongoose');

const acsesorySchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        maxLength: 120,
    }

})

acsesorySchema.path('imageUrl').validate(function(){
    return this.imageUrl.startsWith('http');
},'imageUrl should be link');

const Acsesory = mongoose.model('Acsesory', acsesorySchema);

module.exports = Acsesory;