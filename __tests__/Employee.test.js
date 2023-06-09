const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Frank";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeInstance = new Employee("Frank", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "frank@gmail.com";
    const employeeInstance = new Employee("Frank", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Frank";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1;
    const employeeInstance = new Employee("Frank", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "frank@gmail.com";
    const employeeInstance = new Employee("Frank", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Frank", 1, "frank@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

