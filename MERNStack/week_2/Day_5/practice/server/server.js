const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose');
require('./routers/route')(app);

app.listen(process.env.port, () => {
    console.log('Server running on Port', process.env.port);
});
