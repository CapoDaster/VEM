/**
 * Created by sh on 04/01/15.
 */
var serverconfig = require('./config/config').serverconfig;
var dbconfig = require('./config/config').dbconfig;

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    https = require('https'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    expressSession = require('express-session'),
    flash = require('connect-flash'),
    cradle = require('cradle');

//Configure SSL
var key = fs.readFileSync(serverconfig.key);
var cert = fs.readFileSync(serverconfig.cert);
var https_options = {
    key: key,
    cert: cert
};

//Set up Global Database Conncetion
cradle.setup({
    host: dbconfig.host,
    port: dbconfig.port,
    auth: {
        username: dbconfig.username,
        password: dbconfig.password
    }
});


//Set up App
app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Configure Passport
app.use(expressSession({
    secret : serverconfig.sessionSecret
}));
app.use(passport.initialize());
app.use(passport.session());

//Setup flash
app.use(flash());

//Initalize Passport
var initPassport = require('./modules/auth/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).send("Not Found!");
});
//Start Server
server = https.createServer(https_options, app).listen(serverconfig.port,serverconfig.host, function (err) {
    console.log("Server created at: %s:%d", serverconfig.host, serverconfig.port);
});

