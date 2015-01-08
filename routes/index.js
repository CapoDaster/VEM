/**
 * Created by sh on 04/01/15.
 */
var express = require('express'),
    path = require('path');
var router = express.Router();
var user = require('./../modules/db_query/User')


var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport){

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('login', { message: req.flash('message') });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home.html',
        failureRedirect: '/'
    }));


    /* GET Home Page */
    router.get('/home.html', isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname,'../public_html/app.html'));
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* Get the current users information*/
    router.get('/users/whoami', isAuthenticated, function(req, res){
        res.json(req.user);
    });

    /* Let user change his password
     */
    router.post('/users/changePassword', isAuthenticated, function(req,res){
        console.log(req.body);
        if (req.user._id === req.body._id){
            user.editUserPassword(req.user._id,req.body.password, function () {
                res.status(200).send('Changed Password for User: ' + req.user.username);
            });
        } else {
            res.status(403).end();
        }

    });

    /* Static Routing */
    router.use(express.static(path.join(__dirname, '../public_html')));

    return router;
}





