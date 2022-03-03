const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Choices = require("inquirer/lib/objects/choices");
const team = [];
const results_dir = path.resolve(__dirname, "results");
const resultsPath = path.join(results_dir, "index.html");
const source = require("./src/source");

// ===================================== //
// This is the start of the application. All teams will have a manager.
// ===================================== //
const invokeManager = () => {
  return (
    inquirer
      .prompt([
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
      ])
      // ===================================== //
      // pushes all the answers to a new manager. and then pulls up the pickOne() method
      // ===================================== //
      .then((results) => {
        console.log(results);
        const manager = new Manager(
          results.name,
          results.ID,
          results.email,
          results.officeNumber
        );
        team.push(manager);
        pickOne();
      })
  );
};
// ===================================== //
// This is where all the questions for the engineer exsist.
// ===================================== //
const invokeEngineer = () => {
  return (
    inquirer
      .prompt([
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
      ])
      // ===================================== //
      // pushes all the answers to a new engineer. and then pulls up the pickOne() method
      // ===================================== //
      .then((results) => {
        console.log(results);
        const engineer = new Engineer(
          results.name,
          results.ID,
          results.email,
          results.github
        );
        team.push(engineer);
        pickOne();
      })
  );
};
// ===================================== //
// This is where all the questions for the engineer exsist.
// ===================================== //
const invokeIntern = () => {
  return (
    inquirer
      .prompt([
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
      ])
      // ===================================== //
      // pushes all the answers to a new intern. and then pulls up the pickOne() method
      // ===================================== //
      .then((results) => {
        console.log(results);
        const intern = new Intern(
          results.name,
          results.ID,
          results.email,
          results.school
        );
        team.push(intern);
        pickOne();
      })
  );
};
// ===================================== //
// This method allows you to either push all your information to a html file or continue building a team.
// ===================================== //
const pickOne = () => {
  return inquirer
    .prompt([
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
    ])
    .then((onePicked) => {
      switch (onePicked.configTeam) {
        case "Add a new Engineer":
          invokeEngineer();
          break;
        case "Add a new Intern":
          invokeIntern();
          break;
        default:
          completeTeam();
      }
    });
};
// ===================================== //
// This simply checks to see if a file already exists in the results directory and if not makes a file.
// ===================================== //
const completeTeam = () => {
  console.log(`
  ///////////////////////////////////
  Team finished! Thats one nice team!
  ///////////////////////////////////
  `);
  if (!fs.existsSync(results_dir)) {
    fs.mkdirSync(results_dir);
  }
  fs.writeFileSync(resultsPath, source(team), "utf-8");
};

invokeManager();
