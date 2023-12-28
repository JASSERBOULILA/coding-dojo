const Jokes = require('../models/joke');


// READ ALL
module.exports.FindAllJokes = (req,res)=>{
    Jokes.find()
    .then(allJokes =>{
        console.log("All Movies From DB ",allJokes);
        res.json(allJokes);
    })
    .catch(error =>{console.log(error);
            res.status(500).json({error:'Internal Server Error'})}
    );//
};



// this for creating the joke
module.exports.createJoke = (req, res) => {
    const { setup, punchline } = req.body;

    if (!setup || !punchline) {
        return res.status(400).json({ error: 'Setup and punchline are required fields' });
    }

    Jokes.create({ setup, punchline })
        .then(newJoke => {
            console.log('New Joke Created: ', newJoke);
            res.status(201).json(newJoke);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};


// this for the get one by id
module.exports.getOne = (req,res)=>{
    const {id} = req.params;
    Jokes.findById(id).then(joke=>{
        console.log(`the joke with id ${id}`,joke);
        res.status(200).json(joke);
    }).catch(error =>{
        console.log(error);
        res.json({error})
    })
}

// this for the update 

module.exports.update = (req,res)=>{
    const {id} = req.params;
    const toupdate={setup:"",punchline:""};
    const {setup,punchline} = req.body;
    if(setup){
        toupdate.setup=setup;
    }else if(punchline){
        toupdate.punchline=punchline;
    }
    Jokes.updateOne({_id:id},{$set:toupdate}).then(joke =>{
        console.log(`the joke has been updated ${id}`,joke);
        res.json(joke);
    }).catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
}


// this for the delete

module.exports.delet = (req,res)=>{
    const {id}=req.params;
    Jokes.deleteOne({_id:id}).then(joke=>{
        console.log('the Joke has been deleted',joke);
        res.json(joke);
    }).catch(error=>{
        console.log("the joke been deleted",error);
        res.status(500).json({error});
    })
}