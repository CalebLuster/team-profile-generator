const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

const invokeManager = () => {
return inquirer.prompt([
    {}
])
}
const invokeEngineer = () => {
    return inquirer.prompt([
        {}
    ])
}
const invokeIntern = () => {
    return inquirer.prompt([
        {}
    ])
}