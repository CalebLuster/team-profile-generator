// constructor function set a value for variable.
class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
  }

  //   getName() method returns user inputted name.
  getName() {
    return this.name;
  }

  //   getId() method returns user inputted ID.
  getId() {
    return this.ID;
  }

  //   getEmail() method returns user inputted email.
  getEmail() {
    return this.email;
  }

  //   getRole() method returns user inputted Role.  
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
