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

// Make the connection
db.connect(err => {
    if (err) throw err;
    // console.log("connected as id "+connection.threadId);
    app.init();
});

var showAll = (table_name,callback) => {
    let query = "";
    if (table_name === "employees") {
        // Show all employees first name, last name, role, salary, department, and manager name
        query = `SELECT emp1.firstName AS 'First Name', emp1.lastName AS 'Last Name', title AS 'Title', name AS 'Department', salary AS 'Salary', GROUP_CONCAT(DISTINCT emp2.firstName,' ', emp2.lastName) AS 'Manager'
        FROM employees emp1
        JOIN roles ON emp1.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id
        LEFT JOIN employees emp2 ON emp1.manager_id = emp2.id
        GROUP BY emp1.id
        ORDER BY emp1.lastName ASC`;
    } else if (table_name === "roles") {
        // Show all roles with corresponding department and number of employees in each role    
        query = `SELECT title AS 'Position', name AS 'Department', salary AS 'Salary', COUNT(employees.role_id) AS 'Total Employees'
        FROM roles
        LEFT OUTER JOIN departments ON roles.department_id = departments.id
        LEFT OUTER JOIN employees ON employees.role_id = roles.id
        GROUP BY roles.id
        ORDER BY title ASC`;
    } else if (table_name === "departments") {
        // Show all departments with number of roles in each department
        query = `SELECT name AS 'Department', COUNT(roles.department_id) AS 'Total Roles'
        FROM departments
        LEFT OUTER JOIN roles ON roles.department_id = departments.id
        GROUP BY departments.id
        ORDER BY name ASC`;
    }
