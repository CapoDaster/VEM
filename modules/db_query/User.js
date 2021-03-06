/**
 * Created by sh on 04/01/15.
 */

var dbconfig = require('../../config/config').dbconfig;
var cradle = require('cradle');
var connection = new(cradle.Connection)();
var db = connection.database(dbconfig.database);


var User = {};
User.findById = function (id, callback){
    process.nextTick(function () {
        db.view('users/getById', {key: id} , function (err,res) {
            var user;
            if (!err) {
               if (res.length == 1){
                   user = res[0].value;
               }
            };
            callback(err, user);
        });
    });
};

User.findOne = function (user, callback){
    process.nextTick(function () {
        db.view('users/getUsers', {key: user.username} , function (err,res) {
            var user;
            if (!err) {
                if (res.length == 1){
                    user = res[0].value;
                }
            };
            callback(err, user);
        });
    })
};

User.editUserPassword = function(userid, newpassword, callback){
    process.nextTick(function () {
        db.merge(userid, {'password' : newpassword}, function (err,res) {
                callback(res);
        });
    })

}

module.exports = User;