const {get_all,create_new_author,update_by_id,delete_one,get_by_id} = require("../controllers/author.controller")

module.exports = (app)=>{
    // this for the creation of the product
    app.post('/api/authors',create_new_author);
    app.get('/api/authors',get_all);
    app.get('/api/authors/:id',get_by_id);
    app.put('/api/authors/:id/edit',update_by_id);
    app.delete('/api/authors/:id/delete',delete_one);
}
