const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');


const db = require('./db');
const collection = "todo";

function db.connect(function(err){
  if(err){
    console.log('unabler to connect to database');
    process.exit(1);
  } else {
    app.listen(3000, function(){
      console.log('connected to database, app listening on port 3000');
    });
  }
})