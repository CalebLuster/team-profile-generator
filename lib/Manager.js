const { override } = require("prompts");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, ID, email, officeNumber) {
    super(name, ID, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
    override(Employee);
  }
}

module.exports = Manager;
