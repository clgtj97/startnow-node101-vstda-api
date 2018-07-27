const express = require('express');
const morgan = require('morgan');

const app = express();

    app.use(express.json());

const mock = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.get('/',(req,res) => {
    var lol = 'licening on status : 200';
res.status(200).json().send(lol);
  
});

app.get('/api/TodoItems', (req,res) =>{
    res.send(mock);
});

app.post('/api/TodoItems',(req,res) => {
    mock.push(req.body);
    res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:id',(req,res) => {
    var old = mock[req.params.id] ; 
    var a = mock.splice(req.params.id,1);
    res.status(200).send(old);

});

app.get('/api/TodoItems/:id',(req,res) => {
    
    var pie = mock.findIndex(item => { 
       
        if(req.params.id == item.todoItemId){
            return true;
        } 
            return false; //becuase I retunred in a if statement, there no nned for 'else'
    });
    res.status(200).send(mock[pie]);
});

module.exports = app;
