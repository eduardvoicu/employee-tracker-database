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