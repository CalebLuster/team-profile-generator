// created variables to start test. This should be at the top of every test.
const Employee = require("../lib/Employee.js");
const employee = new Employee("Caleb", "123", "testing@fakeemail.com");

// Test to make sure each of the constructor were properly pairing up with what I wanted them to
test("test the constructor function to see if it properly pairs", () => {
  expect(employee.name).toBe("Caleb");
  expect(employee.ID).toBe("123");
  expect(employee.email).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getName() method is working properly
test("tests the getName() function to make sure its properly working", () => {
  expect(employee.getName()).toBe("Caleb");
});

// tests to make sure that the return function for the getId() method is working properly
test("tests the getId() function to make sure its properly working", () => {
  expect(employee.getId()).toBe("123");
});

// tests to make sure that the return function for the getEmail() method is working properly
test("tests the getEmail() function to make sure its properly working", () => {
  expect(employee.getEmail()).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getRole() method is working properly
test("tests the getRole() function to make sure its properly working", () => {
  expect(employee.getRole()).toBe("Employee");
});
