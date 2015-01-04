/**
 * Created by sh on 04/01/15.
 */
var User = {
    username : "simon",
    _id : "simon_id",
    password : "1234",
    email : "simon@bla",
    firstName : "Simon T.",
    lastName : "Heeg",
    "findById" : function(id, callback){
        callback(null, {"username" : this.username, "password" : this.password, "_id" : this._id, "email" : this.email,
            "firstName" : this.firstName, "lastName" : this.lastName});
    }
};

User.findOne = function (user, callback){
    callback(null, {"username" : this.username, "password" : this.password, "_id" : this._id, "email" : this.email,
    "firstName" : this.firstName, "lastName" : this.lastName});
};

module.exports = User;