const mongoose = require('mongoose');


const User = new mongoose.Schema({
    name : {
        type:String,
        required:[true,"{PATH} must be Non Empty"]
    },
    phone: {
        type:Number,
        required:[true,"{PATH} YOU NEED TO PUT THE PRICE "]
    },
    pw:{
        type:String,
        required:[true,"{PATH} This Path Must be required"]
    }
},{timestamps:true});


const Users = mongoose.model('User',User);

module.exports = Users;


