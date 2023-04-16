const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "FrankieJ";
    const employeeInstance = new Engineer("Frank", 1, "frank@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "FrankieJ";
    const employeeInstance = new Engineer("Frank", 1, "frank@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Frank", 1, "frank@gmail.com", "FrankieJ");
    expect(employeeInstance.getRole()).toBe(returnValue);
});