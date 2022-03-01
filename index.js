const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Choices = require("inquirer/lib/objects/choices");
const team = [];

const invokeManager = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("You must enter a name to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "email",
      message: "What is your email?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("You must enter a email to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
      validate: (ID) => {
        if (ID) {
          return true;
        } else {
          console.log("You must enter a ID number to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "officeNumber",
      message: "What is your officeNumber?",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("You must enter a office number to continue");
          return false;
        }
      },
    },
  ]);
};
const invokeEngineer = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("You must enter a name to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "email",
      message: "What is your email?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("You must enter a email to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
      validate: (ID) => {
        if (ID) {
          return true;
        } else {
          console.log("You must enter a ID number to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "github",
      message: "What is your github username?",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("You must enter a GitHub username to continue");
          return false;
        }
      },
    },
  ]);
};
const invokeIntern = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("You must enter a name to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "email",
      message: "What is your email?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("You must enter a email to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
      validate: (ID) => {
        if (ID) {
          return true;
        } else {
          console.log("You must enter a ID number to continue");
          return false;
        }
      },
    },
    {
      tpye: "input",
      name: "school",
      message: "What is the name of your school?",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("You must enter a school to continue");
          return false;
        }
      },
    },
  ]);
};
const pickOne = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "configTeam",
      message: "What you like to do next? (Please choose one)",
      choices: [
        "Add a new Engineer",
        "Add a new Intern",
        "Finish building team",
      ],
    },
  ]);
};
