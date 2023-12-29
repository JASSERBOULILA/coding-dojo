const Prod = require('../models/product.model');


module.exports.createProduct = (req,res)=>{
    const {title,price,description} = req.body;

    if(!title || !price || !description){
        return res.status(400).json({error:"Title and Price AND Desc ARE Reaquired"});
    }

    Prod.create({title,price,description})
    .then(newProduct=>{
        console.log("new Products Has Been Created ",newProduct);
        res.status(201).json(newProduct);
    }).catch(error =>{
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    })
};