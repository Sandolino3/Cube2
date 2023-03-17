const Acsesory = require('../models/Acsesory')

exports.getAll = () => Acsesory.find()

exports.create = (acsesoryData) => Acsesory.create(acsesoryData)

