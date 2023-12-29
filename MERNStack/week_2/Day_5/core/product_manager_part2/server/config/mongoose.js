const mongoose = require('mongoose');
require('dotenv').config();
const db=process.env.db;
const username = process.env.atlas_username;
const password = process.env.atlas_password;

const uri=`mongodb+srv://fo9ma:${password}@cluster0.ql0x9jo.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(()=>console.log("connection whith db",db))
.catch(()=>console.log("cannot connect to db",db));