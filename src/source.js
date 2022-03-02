const teamResults = (employees) => {
  console.log(employees);

  const html = [];

  const managerResults = (manager) => {
    console.log(manager);
    let managerCode = `
    <div>
        <div>
            ${manager.name} <br/>
            <i></i>Manager
        </div>
        <ul>
            <li>Employee ID: ${manager.ID}</li>
            <li>Employee Email: <span> <a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
     `;
    html.push(managerCode);
  };
  const engineerResults = (engineer) => {
    console.log(engineer);
    let engineerCode = `
    <div>
        <div>
            ${engineer.name} <br/>
            <i></i>Engineer
        </div>
        <ul>
            <li>Employee ID: ${engineer.ID}</li>
            <li>Employee Email: <span> <a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li>GitHub Profile: <span> <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></span>}</li>
        </ul>
    </div>
    `;
    html.push(engineerCode);
  };

  const internResults = (intern) => {
    console.log(intern);
    let internCode = `
    <div>
        <div>
            ${intern.name} <br/>
            <i></i>Intern
        </div>
        <ul>
            <li>Employee ID: ${intern.ID}</li>
            <li>Employee Email: <span> <a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li>School: ${intern.school}</li>
        </ul>
    </div>
    `;
    html.push(internCode);
  };

  for (let i = 0; i < teamResults.length; i++) {
    if (teamResults[i].getRole() === "Manager") {
      mangerResults(teamResults[i]);
    }
    if (teamResults[i].getRole() === "Engineer") {
      engineerResults(teamResults[i]);
    }
    if (teamResults[i].getRole() === "Intern") {
      internResults(teamResults[i]);
    }
  }

  return html.join("");
};

module.exports = (teamResults) => {
  return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
