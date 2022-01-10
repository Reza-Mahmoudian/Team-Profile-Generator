const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        const role = 'Intern';
        super(name,id,email,role);
        this.school = school;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;