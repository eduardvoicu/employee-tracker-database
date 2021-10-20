// Setup dependencies
const mysql = require('mysql');
require("dotenv").config();
require('console.table');

// Setup file dependencies
const connectionInfo = require('./dbinfo');
const app = require('./index.js');

// Create database connection with .env variables
const db = mysql.createConnection({
    host: connectionInfo.db_host,
    port: connectionInfo.db_port,
    user: connectionInfo.db_user,
    password: connectionInfo.db_pass,
    database: "employeeTrackerDB"
});