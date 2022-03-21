const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    awbno : {
        type: String,
        unique: true,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    status : {
        type: Boolean,
        required: true,
    }
})

const courierDB = mongoose.model('courierDB', schema,'courierdbs');

module.exports = courierDB;