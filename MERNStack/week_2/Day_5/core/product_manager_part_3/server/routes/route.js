const {createProduct,allProduct,findOne,updateOne,fDelete} = require('../controllers/create')


module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/new',createProduct);
    app.get('/api/products',allProduct);
    app.get('/api/products/:id',findOne);
    app.put('/api/products/:id',updateOne);
    app.delete('/api/products/:id/delete',fDelete)
}