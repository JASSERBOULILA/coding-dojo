const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('./config/mongoose');
require('./routes/route')(app);

app.listen(process.env.port, () => {
    console.log('Server running on Port', process.env.port,"and db ",process.env.db);
});