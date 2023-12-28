const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connect with db

require('./config/mongoose')
// IMPORT
require('./routes/route')(app)
app.listen(process.env.port,()=>{
    console.log("server is running on Port" , process.env.port);
})