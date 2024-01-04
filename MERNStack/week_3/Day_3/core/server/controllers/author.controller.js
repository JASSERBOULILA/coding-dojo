const Author = require('../models/author.model')

// this for to get all the data 
module.exports.get_all = (req,res)=>{
    Author.find()
    .then(result=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json(error);
    })
};

// this module for create the new author 
module.exports.create_new_author = (req,res)=>{
    const {name} = req.body;
    Author.create({name:name})
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json(error.errors)
    })
};

// this for modifying the author by his Id
module.exports.update_by_id = (req,res)=>{
    const {id} = req.params;
    console.log("REQBODY",req.body)
    //const {name} = req.body;
    Author.findByIdAndUpdate(id , req.body,{new:true})
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error)
    })
};

// this for retrieving data for that id 

module.exports.get_by_id = (req,res)=>{
    const {id} = req.params;
    Author.findById({_id:id})
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error);
    })
};


// this for deleting the author
module.exports.delete_one = (req,res)=>{
    const {id} = req.params;
    Author.findByIdAndDelete({_id:id}).then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error);
    })
};
