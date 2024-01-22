const mongoose = require('mongoose');

const Managers  = new mongoose.Schema({
    player_name : {
        type:String,
        required:[true,"{PATH } must be at least 2 min character Long "],
        minlength : [3,"{PATH} must be at least  2 character Long "]
    },
    pref_pos : {
        type:String,
        required : [false,"{PATH} optional "]
    }
});

const Manager = mongoose.model('Manager', Managers);

module.exports = Manager;