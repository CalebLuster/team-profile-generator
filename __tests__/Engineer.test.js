const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
  "Caleb",
  "123",
  "testing@fakeemail.com",
  "fakeGithub"
);

test("test the constructor function to see if it properly pairs", () => {
  expect(engineer.name).toBe("Caleb");
  expect(engineer.ID).toBe("123");
  expect(engineer.email).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getName() method is working properly
test("tests the getName() function to make sure its properly working", () => {
  expect(engineer.getName()).toBe("Caleb");
});

// tests to make sure that the return function for the getId() method is working properly
test("tests the getId() function to make sure its properly working", () => {
  expect(engineer.getId()).toBe("123");
});

// tests to make sure that the return function for the getEmail() method is working properly
test("tests the getEmail() function to make sure its properly working", () => {
  expect(engineer.getEmail()).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getGithub() method is working properly
test("tests the getGithub() function to make sure its properly working", () => {
  expect(engineer.getGithub()).toBe("fakeGithub");
});

// tests to make sure that the return function for the getRole() method is working properly
test("tests the getRole() function to make sure its properly working", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
