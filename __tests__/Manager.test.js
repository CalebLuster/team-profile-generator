const Manager = require("../lib/Manager.js");
const manager = new Manager("Caleb", "123", "testing@fakeemail.com", "#123");

test("test the constructor function to see if it properly pairs", () => {
  expect(manager.name).toBe("Caleb");
  expect(manager.ID).toBe("123");
  expect(manager.email).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getName() method is working properly
test("tests the getName() function to make sure its properly working", () => {
  expect(manager.getName()).toBe("Caleb");
});

// tests to make sure that the return function for the getId() method is working properly
test("tests the getId() function to make sure its properly working", () => {
  expect(manager.getId()).toBe("123");
});

// tests to make sure that the return function for the getEmail() method is working properly
test("tests the getEmail() function to make sure its properly working", () => {
  expect(manager.getEmail()).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getOfficeNumber() method is working properly
test("tests the getOfficeNumber() function to make sure its properly working", () => {
  expect(manager.getOfficeNumber()).toBe("#123");
});

// tests to make sure that the return function for the getRole() method is working properly
test("tests the getRole() function to make sure its properly working", () => {
  expect(manager.getRole()).toBe("Manager");
});
