const Prod = require('../models/product.model');




// this for the creation of the products
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


// to Show all The Users
module.exports.allProduct = (req,res)=>{
    Prod.find().then(all=>{
        console.log("all product ",all);
        res.status(200).json(all);
    }).catch(error=>{
        console.log(error);
        res.json({error:"there is no data"})
    })
};

// this for to show me the user that has the current id that has been used in params
module.exports.findOne=(req,res)=>{
    const {id} = req.params;
    Prod.findById({_id:id}).then(one=>{
        console.log("the one person is ",one);
        res.status(200).json(one);
    }).catch(error =>{
        console.log(error);
        res.status(400).json({error:"there is no one whith that id"});
    })
}

// this for the update Products
module.exports.updateOne=(req,res)=>{
    const {id} = req.params;
    Prod.findByIdAndUpdate({_id:id},req.body,{new:true, runValidators:true})
    .then(updatedProduct=>{
        console.log("the product has been updated ",updatedProduct);
        res.status(200).json(updatedProduct);
    }).catch(error=>{
        console.log(error);
        res.status(301).json({error:"Sry your Product hasn't updated"})
    });
}

// this for the delete

module.exports.fDelete = (req, res) => {
    const { id } = req.params;
    Prod.findByIdAndDelete({ _id: id })
        .then(deleted => {
            if (!deleted) {
                return res.status(404).json({ error: "Item not found" });
            }
            console.log(deleted);
            res.status(200).json(deleted);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "Sorry, can't delete this ID" });
        });
}
