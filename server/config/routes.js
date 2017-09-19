var controller = require("../controllers/critterController.js");

module.exports = function(app){
app.get('/', controller.rootIndex);

app.get('/mongooses/new', controller.newGoosePage);

app.post('/mongooses', controller.handlePostNew);

app.get('/mongooses/edit/:id', controller.showEditPage);

app.post('/mongooses/:id', controller.handleEditPost);

app.get('/mongooses/destroy/:id', controller.destroyUponRequest);
}