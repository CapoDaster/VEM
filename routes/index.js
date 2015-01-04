/**
 * Created by sh on 04/01/15.
 */
var express = require('express'),
    path = require('path');
var router = express.Router();


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
        //res.render('index', { message: req.flash('message') });
        res.sendFile(path.join(__dirname,'../static_views/login.html'));
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));



    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname,'../public_html/app.html'));
        //res.render('home', { user: req.user });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    /* Static Routing */
    router.use(express.static(path.join(__dirname, '../public_html')));

    return router;
}




