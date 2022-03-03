// This is the file for the source code where it takes the user input and puts it into an HTML file.
const teamResults = (employees) => {
  console.log(employees);

  const html = [];
  // ===================================== //
  // This method is for the manager code.
  // ===================================== //
  const managerResults = (manager) => {
    console.log(manager);
    let managerCode = `
    <div class="card">
        <div class="card-header">
        ${manager.name} <br />
        <i class="fas fa-mug-hot"></i>Manager
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
            Employee Email:
            <span> <a href="mailto:${manager.email}">${manager.email}</a></span>
        </li>
            <li class="list-group-item">Employee ID: ${manager.ID}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
     `;
    html.push(managerCode);
  };
  // ===================================== //
  // this method is for the engineer code.
  // ===================================== //
  const engineerResults = (engineer) => {
    console.log(engineer);
    let engineerCode = `
    <div class="card">
        <div class="card-header">
        ${engineer.name} <br />
        <i class="fas fa-glasses"></i>Engineer
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
            Employee Email:
            <span> <a href="mailto:${engineer.email}">${engineer.email}</a></span>
        </li>
            <li class="list-group-item">Employee ID: ${engineer.ID}</li>
            <li class="list-group-item">
                GitHub Profile:
                <span>
                <a target="_blank" href="https://github.com/${engineer.github}"
                    >${engineer.github}</a
                ></span>
            </li>
        </ul>
    </div>
    `;
    html.push(engineerCode);
  };
  // ===================================== //
  // this method is for the intern code.
  // ===================================== //
  const internResults = (intern) => {
    console.log(intern);
    let internCode = `
    <div class="card">
        <div class="card-header">
            ${intern.name} <br />
            <i class="fas fa-user-graduate"></i>Intern
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
        Employee Email:
        <span> <a href="mailto:${intern.email}">${intern.email}</a></span>
        </li>
            <li class="list-group-item">Employee ID: ${intern.ID}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    `;
    html.push(internCode);
  };
  // ===================================== //
  // for if loop.
  // ===================================== //
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].getRole() === "Manager") {
      managerResults(employees[i]);
    }
    if (employees[i].getRole() === "Engineer") {
      engineerResults(employees[i]);
    }
    if (employees[i].getRole() === "Intern") {
      internResults(employees[i]);
    }
  }

  return html.join("");
};
// ===================================== //
// exports it and puts all of the code uptop into the body of the file. This is where the links for CSS exsist.
// ===================================== //
module.exports = (employees) => {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="../dist/style.css">
            <title>Document</title>
    </head>
    <body>
        <header>
        <h1> Crew Members </h1>
        </header>
    
        <main> ${teamResults(employees)} </main>
    
    </body>
    </html>
        `;
};
