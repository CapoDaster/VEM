/**
 * Created by sh on 04/01/15.
 */

exports.serverconfig = {
    host: 'localhost',
    port: 8081,
    key: "./config/ssl/snakeoil-key.pem",
    cert: "./config/ssl/snakeoil-cert.pem",
    sessionSecret : "addSecretHere!"
};

exports.dbconfig = {
    host: 'http://localhost',
    port: 5984,
    database: "sample_users",
    username: "simonHeeg",
    password: "password"
};