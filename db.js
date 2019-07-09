const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = 'crud_mongodb';
const url = 'mongodb://localhost:27017';
const mongoOption = { userNewUrlParser: true};

const state = {
  db : null
};

function connect(cb){
  if (state.db)
    cb();
  else{
    MongoClient.connect(url, mongoOption), function(err, input){
      if (err) cb (err);
      else {
        state.db = client.db(dbname);
        cb();
      }
    }
  }
}

function getPrimaryKey(_id){
  return ObjectID(_id);
}

function getDB(){
  return state.db;
}

module.export ={
                  getDB,
                  connect,
                  getPrimaryKey
};