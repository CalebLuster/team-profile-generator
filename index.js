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
  ]);
};
const invokeEngineer = () => {
  return inquirer.prompt([
    {
      tpye: "input",
      name: "name",
      message: "What is your first name?",
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

pickOne();
