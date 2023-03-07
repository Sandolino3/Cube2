const mongoose = require('mongoose')

const conectionString = 'mongodb://localhost:27017/cubes2';

exports.initData = ()=> mongoose.connect(conectionString)