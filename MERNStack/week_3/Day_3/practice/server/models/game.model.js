const mongoose = require('mongoose');

const Games = new mongoose.Schema({
    game:{
        type:Array,
    }
});
const Game = mongoose.model('Games ' , Games);

module.exports = Game;