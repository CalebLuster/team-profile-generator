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
  };
  const engineerResults = (engineer) => {
    console.log(engineer);
  };

  const internResults = (intern) => {
    console.log(intern);
  };

};
