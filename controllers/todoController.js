var bodyParser = require('body-parser');

var data = [];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    //loads page and sends items from data[] to the template.
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    //adds an item from <input> to data[] onClick 
    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    //removes item from data[] onclick
    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};