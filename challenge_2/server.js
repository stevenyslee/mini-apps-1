const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
let globalCounter = 1;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000, () => console.log('Web server listening on localhost:3000'));

app.use(function(req, res, next) {
  console.log(req.method, req.path);
  next();
});

app.use(bodyparser.urlencoded({
  extended: true
}));

app.post('/', (req, res) => {
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/csv');
  
  let keys = Object.keys(req.body);
  keys.splice(keys.indexOf('children'), 1);
  keys.unshift('Counter');
  let people = [];
  people.push(keys);

  var getNestedData = function(obj) {
    let person = [globalCounter++];
    for (let i = 1; i < keys.length; i++) {
      person.push(obj[keys[i]]);
    }
    people.push(person);
    if (obj.children) {
      for (let i = 0; i < obj.children.length; i++) {
        getNestedData(obj.children[i]);
      } 
    }
  };

  getNestedData(req.body);

  var createCSV = function(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += arr[i].join(',') +'\n';
    }
    return str;
  }

  var csvString = createCSV(people);
  
  
  res.send(csvString);

});
