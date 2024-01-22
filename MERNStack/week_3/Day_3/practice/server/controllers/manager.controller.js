const Manager = require('../models/team_manager.model')

// this for retrieving the data from all the managers
module.exports.getAll = (req,res)=>{
    Manager.find()
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error);
    })
};

// this for the creation of the manager 
module.exports.createNewManager = (req,res)=>{
    const {player_name,pref_pos} = req.body;
    console.log(player_name,"",pref_pos);
    Manager.create({player_name:player_name,pref_pos:pref_pos})
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error);
    })
};


// this for the delete by Id
module.exports.deleteManager = (req,res)=>{
    const {id} = req.params;
    Manager.findByIdAndDelete(id)
    .then(response=>{
        console.log(response);
        res.status(200).json(response);
    }).catch(error=>{
        console.log(error);
        res.status(500).json(error);
    })
};