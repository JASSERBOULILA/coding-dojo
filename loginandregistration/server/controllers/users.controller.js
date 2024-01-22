const Users = require('../models/user')
const jwt = require("jsonwebtoken");
const session = require('../server');
const bcrypt = require('bcrypt');

function generateToken(userId) {
    const secretKey = 'fo9ma'; // Replace with your secret key
    return jwt.sign({ userId }, secretKey, { expiresIn: '10h' }); // Token expires in 10 hour
};



module.exports.createUser = (req, res) => {
    const { name, phone, pw } = req.body;
    console.log(name, "", phone, "", pw)
    if (!name || !phone || !pw) {
        return res.status(400).json({ error: "Title and Price AND Desc ARE Reaquired" });
    }
    Users.create({ name, phone, pw })
        .then(newUser => {
            console.log('new User Has been Created ', newUser);
            const token = generateToken(newUser._id);
            console.log(token);
            res.status(200).json({ user: newUser, token });
        }).catch(error => {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" })
        })
};

module.exports.findOne = (req, res) => {
    const { id } = req.params;
    Users.findById({ _id: id }).then(user => {
        console.log("the user for the id ", user);
        res.status(200).json(user);
    }).catch(error => {
        console.log(error);
        res.status(500).json({ error: "cant get this Id" });
    })
};

module.exports.loginUser = (req, res) => {
    const { name, pw } = req.body;
    Users.findOne({ name, pw })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            const token = generateToken(user._id);
            req.session.userId=user._id;
            console.log(req.session.userId,"***",token);
            res.status(200).json({ user, token });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};


module.exports.get_all = (req, res) => {
    const token = req.headers.authorization; // Get token from request headers
    // Verify the token
    jwt.verify(token, 'fo9ma', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        } else {
            const userId = decoded.userId;
            console.log(userId);

            if(req.session.userId!=userId){
                return res.status(401).json({error:"Unauthorized"});
            }
            Users.findById({ _id: userId })
                .then(user => {
                    console.log("the user has logged in", user);
                    res.status(200).json(user);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        }
    });
};