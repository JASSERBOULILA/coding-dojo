const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
    secret: 'fo9ma',
    resave: false,
    saveUninitialized: true,
}));
require('./config/mongoose');
require('./routes/route')(app);

app.listen(process.env.port, () => {
    console.log('Server running on Port', process.env.port,"and db ",process.env.db);
});