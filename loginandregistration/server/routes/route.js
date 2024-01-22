const {createUser,findOne,get_all,loginUser} = require('../controllers/users.controller')

module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/new',createUser);
    app.get('/api/:id',findOne);
    app.post('/api/login',loginUser);
}