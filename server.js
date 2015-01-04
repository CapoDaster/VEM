/**
 * Created by sh on 04/01/15.
 */
var serverconfig = require('./config/serverconfig').serverconfig;

var fs = require('fs'),
    express = require('express'),
    https = require('https');

//Configure SSL
var key = fs.readFileSync(serverconfig.key);
var cert = fs.readFileSync(serverconfig.cert);
var https_options = {
    key: key,
    cert: cert
};

//Set up App and Routing
app = express();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public_html/index.html')
});

//Static Routing
app.use(express.static('public_html'));

//Error Handler
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!\n' + err);
});

//Handle bad requests !MUST BE AT BOTTOM!
app.use(function(req, res, next){
    res.status(404).send('Sorry cant find that!');
});

//Start Server
server = https.createServer(https_options, app).listen(serverconfig.port,serverconfig.host, function (err) {
    console.log("Server created at: %s:%d", serverconfig.host, serverconfig.port);
});

