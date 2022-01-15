const Employee = require("../lib/Employee");

test ("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name using constructor argument", () => {
    const name = "Robert";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id using constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Test", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email using constructor argument", () => {
    const testValue = "test@email.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name using getName()", () => {
    const testValue = "Robert";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id using getId()", () => {
    const testValue = 100;
    const e = new Employee("Test", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email using getEmail()", () => {
    const testValue = "test@email.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Robert", 1, "test@email.com");
    expect(e.getRole()).toBe(testValue);
});