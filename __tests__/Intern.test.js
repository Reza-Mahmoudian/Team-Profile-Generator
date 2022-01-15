const Intern = require("../lib/Intern");

test ("Can set school using constructor", () => {
    const testValue = "UofT";
    const e = new Intern("Test", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Inter\"", () => {
    const testValue = "Intern";
    const e = new Intern("Test", 1, "test@email.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Can get school using getSchool()", () => {
    const testValue = "UofT";
    const e = new Intern("Test", 1, "test@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});