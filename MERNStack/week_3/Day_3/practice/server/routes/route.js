const {getAll,createNewManager,deleteManager} = require("../controllers/manager.controller")

module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/manager',createNewManager);
    app.get('/api/managers',getAll);
    app.delete('/api/manager/:id/delete',deleteManager);
}
