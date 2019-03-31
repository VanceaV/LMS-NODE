var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'mydbinstances.czrtwcivjbrq.us-east-1.rds.amazonaws.com',
    user     : 'root',
    password : 'password',
    database : 'library'
});

module.exports = connection;