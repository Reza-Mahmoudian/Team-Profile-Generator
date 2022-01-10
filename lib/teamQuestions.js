const mappedNames = require('./mappedNames');

// role Questions
const roleQuestions = [
    {
        type: 'list',
        name: 'empRole',
        message: 'Select the employee\'s role to begin creating your employee profile. Once complete, select Done.',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done'
        ]
    }
];

// employee questions (all)
const employeeQuestions = [
    {
        type: 'input',
        name: 'empName',
        message: 'Enter your employee\'s name.',
        //function for capitalzing first letters of names
        filter: function (name) {
            return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        },
        // Prevent duplication
        validate: function (value) {
            if (mappedNames.mappedNames.includes(value)) return 'You appear to have already entered that name';
            else return true;
        }
    },

    {
        type: 'input',
        name: 'empId',
        message: 'Enter your employee\'s ID.'
    },

    {
        type: 'input',
        name: 'empEmail',
        message: 'Enter your employee\'s email address.',
        validate: function (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email.toLowerCase())) {
                return 'You entered an invalid email address.';
            }
            return true;
        }
    }
];

// manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'mgrOfficeNumber',
        message: 'Enter your manager\'s office number.'
    }
];

// engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'engGithub',
        message: 'Enter your engineer\'s Github username.'
    }
];

// Intern questions

const internQuestions = [
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter your intern\'s school.'
    }
];

module.exports = { roleQuestions, employeeQuestions, managerQuestions, engineerQuestions, internQuestions };