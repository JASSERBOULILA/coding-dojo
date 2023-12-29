const {createProduct,allProduct} = require('../controllers/create')


module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/new',createProduct);
    app.get('/api/products',allProduct);
}