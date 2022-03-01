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
    },
      {
      tpye: "input",
      name: "email",
      message: "What is your email?",
    },
      {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
    },
    {
        tpye: "input",
        name: "officeNumber",
        message: "What is your officeNumber?",
      },
  ]);
};
const invokeEngineer = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
    },
      {
      tpye: "input",
      name: "email",
      message: "What is your email?",
    },
      {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
    },  {
        tpye: "input",
        name: "github",
        message: "What is your github username?",
      },
  ]);
};
const invokeIntern = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
    },
      {
      tpye: "input",
      name: "email",
      message: "What is your email?",
    },
      {
      tpye: "input",
      name: "ID",
      message: "What is your employee ID?",
    },
    {
        tpye: "input",
        name: "school",
        message: "What is the name of your school?",
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

