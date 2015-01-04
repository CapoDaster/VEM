/**
 * Created by sh on 04/01/15.
 */
var User = require('./../db_query/User');
var login = require('./login');

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        console.log('Serialize user');
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            console.log('Deserializing user: %s', user);
            done(err, user);
        });
    });

    login(passport);

    //signup(passport);

};
