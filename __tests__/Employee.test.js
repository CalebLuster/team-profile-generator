const Employee = require("../lib/Employee.js");
const employee = new Employee("Caleb", "123", "testing@fakeemail.com");

test("test the constructor function to see if it properly pairs", () => {
  expect(employee.name).toBe("Caleb");
  expect(employee.ID).toBe("123");
  expect(employee.email).toBe("testing@fakeemail.com");
});

test("tests the getName() function to make sure its properly working", () => {
  expect(employee.getName()).toBe("Caleb");
});

test("tests the getId() function to make sure its properly working", () => {
  expect(employee.getId()).toBe("123");
});

test("tests the getEmail() function to make sure its properly working", () => {
  expect(employee.getEmail()).toBe("testing@fakeemail.com");
});

test("tests the getRole() function to make sure its properly working", () => {
  expect(employee.getRole()).toBe("Employee");
});
