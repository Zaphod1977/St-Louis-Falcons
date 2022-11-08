const mongoose = require('mongoose');


const sCodeSchema = new mongoose.Schema({
    sCode: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('signUpCode', sCodeSchema);