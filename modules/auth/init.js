/**
 * Created by sh on 04/01/15.
 */
var User = require('./../db_query/User');
var login = require('./login');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    login(passport);

};
