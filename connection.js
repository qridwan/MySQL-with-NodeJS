const mysql = require('mysql');
require("dotenv").config();

const {DB_USER, DB_PASS, DB_NAME} = process.env;

const mysqlConnection = mysql.
createConnection({
    host: 'localhost',
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("db connection established ")
    }
    else {
        console.log(err, "db connection failed")
    }
})


module.exports = mysqlConnection;