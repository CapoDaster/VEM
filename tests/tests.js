/**
 * Created by sh on 05/01/15.
 */
var cradle = require('cradle');

var dbconfig = require('./../config/config').dbconfig;

dbconfig.database = 'test';

//Set up Global Database Conncetion
cradle.setup({
    host: dbconfig.host,
    port: dbconfig.port,
    auth: {
        username: dbconfig.username,
        password: dbconfig.password
    }
});

var connection = new(cradle.Connection)();
var db = connection.database(dbconfig.database);


var user = {
    "_id": "c6b2b3b3f2f9574c8f2ccf520100d14c",
    "_rev": "2-375091845f8e0819d19a18b8d12afb47",
    "username": "Zlatan",
    "leibgericht": "Spaghetti"
};

delete(user._rev);
console.log(user);

db.merge(user._id, user, function(err, res){
   console.log(err, res)
});