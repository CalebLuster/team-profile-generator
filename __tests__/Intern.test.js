const Intern = require("../lib/Intern.js");
const intern = new Intern(
  "Caleb",
  "123",
  "testing@fakeemail.com",
  "harvard community and techincal college"
);

test("test the constructor function to see if it properly pairs", () => {
  expect(intern.name).toBe("Caleb");
  expect(intern.ID).toBe("123");
  expect(intern.email).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getName() method is working properly
test("tests the getName() function to make sure its properly working", () => {
  expect(intern.getName()).toBe("Caleb");
});

// tests to make sure that the return function for the getId() method is working properly
test("tests the getId() function to make sure its properly working", () => {
  expect(intern.getId()).toBe("123");
});

// tests to make sure that the return function for the getEmail() method is working properly
test("tests the getEmail() function to make sure its properly working", () => {
  expect(intern.getEmail()).toBe("testing@fakeemail.com");
});

// tests to make sure that the return function for the getSchool() method is working properly
test("tests the getSchool() function to make sure its properly working", () => {
  expect(intern.getSchool()).toBe("harvard community and techincal college");
});

// tests to make sure that the return function for the getRole() method is working properly
test("tests the getRole() function to make sure its properly working", () => {
  expect(intern.getRole()).toBe("Intern");
});
