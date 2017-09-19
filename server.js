var PORT = 8000;
var express = require("express");
var bodyParser = require("body-parser");
var ejs = require('ejs');
var app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('static'));

require("./server/config/mongoose.js");
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.set('views', __dirname + '/client/views');
app.set('viewengine', 'ejs');





app.listen(PORT, function(){
    console.log('listening on port '+PORT);
})
