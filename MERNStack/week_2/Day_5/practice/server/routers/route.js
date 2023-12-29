const {createProduct} = require('../controllers/create')


module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/new',createProduct);
}