// Setup dependencies
const inquirer = require('inquirer');
const db = require('./db.js');
const ascii = require('ascii-art-font');

// Initalize the app
var init = () => {

    console.log("\n"+"=".repeat(62)+"\n");
    ascii.create('    Employee','Doom',(err, result) => {
        if (err) throw err;
        console.log(result);
        ascii.create('      Manager','Doom',(err, result) => {
            if (err) throw err;
            console.log(result);
            console.log("\n"+"=".repeat(62)+"\n");
            mainPrompt();
        });
    });
    
}

var mainPrompt = () => {
    inquirer.prompt([
        {
            message: "What do you want to do?",
            type: "list",
            name: "doWhat",
            choices: ["View","Add","Edit","Remove","Quit"]
        }
    ]).then(answers => {
        switch(answers.doWhat) {
            case "View":
                return viewPrompt();
            case "Add":
                return createPrompt(false);
            case "Edit":
                return updatePrompt(false);
            case "Remove":
                return removePrompt(false);
            case "Quit":
                return quitApp();
        }
    });
}

function viewPrompt() {
    inquirer.prompt([
        {
            message: "View:",
            type: "list",
            name: "table_name",
            choices: [{name: "All Employees", value: "employees"},{name:"All Departments",value: "departments"},{name:"All Roles", value: "roles"}]
        }
    ]).then(answers => {

        db.showAll(answers.table_name, callMainPrompt);
    });
}

function createPrompt(table_name) {

    if (table_name === false) {

        inquirer.prompt([
            {
                message: "What do you want to add?",
                name: "table_name",
                type: "list",
                choices: [
                    {
                        name: "New Employee",
                        value: "employees"
                    },
                    {
                        name: "New Role",
                        value: "roles"
                    },
                    {
                        name: "New Department",
                        value: "departments"
                    },
                    {
                        name: "Back to Main Menu",
                        value: "mainMenu"
                    }
                ]
            }
        ]).then(answers => {

            if (answers.table_name === "mainMenu") return mainPrompt();

            return createPrompt(answers.table_name);
        });

    }