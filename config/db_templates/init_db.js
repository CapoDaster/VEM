/**
 * Created by sh on 05/01/15.
 */
var cradle = require('cradle'),
    admin = require('./admin_user'),
    des_doc = require('./design_documents/users');

var dbconfig = require('./../config').dbconfig;


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


//Upload docs
db.save(admin , function (err, res) {
    if (err){
        console.log('Ups, something went wrong: ' + err);
    } else {
        console.log('Admin upload, complete!');
    }
});

db.save(des_doc._id,des_doc.doc_body, function (err, res){
    if (err){
        console.log('Ups, something went wrong: ' + err);
    } else {
        console.log('Design upload, complete!');
    }
});

if (process.argv[2]=='sample_users'){
    db.save(require('./sample_users'), function (err, res){
        if (err){
            console.log('Ups, something went wrong: ' + err);
        } else {
            console.log('Sample users upload, complete!');
        }
    });
}