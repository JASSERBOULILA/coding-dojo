const mongoose = require('mongoose');

const Products = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"{PATH} MUST BE NON EMPTY"],
        minlength : [3,"{PATH} MUST BE AT LEAST 3 CHARACTER LONG"]
    },
    price: {
        type:Number,
        required:[true,"{PATH} YOU NEED TO PUT THE PRICE "],
        minlength:[0,"{PATH} you need to put your price"]
    },
    description:{
        type:String,
        required:[true,"{PATH} You Must Create the description you're seeking"],
        minlength:[1,"{PATH} You Must fill this field"]
    }
},{timestamps:true});

const Prod=mongoose.model('Products',Products);

module.exports = Prod;