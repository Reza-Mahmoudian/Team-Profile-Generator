const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number using constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Test", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Test", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number using getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Test", 1, "test@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});