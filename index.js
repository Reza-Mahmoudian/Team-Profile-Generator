
// require modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { roleQuestions, employeeQuestions, managerQuestions, engineerQuestions, internQuestions } = require("./lib/teamQuestions");
const mappedNames = require('./lib/mappedNames');
const render = require("./lib/htmlRenderer");

// npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs");
const util = require("util");

// output paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// initializes empty array for employees
let employees = [];

let promptUser = () => {
    let employee = {};
    //asks for a role
    return inquirer.prompt(roleQuestions).then((answer) => {
        // saves role to object
        employee['empRole'] = answer.empRole;
        // if they're done creating the team, return employees array
        if (answer.empRole === 'Done') {
            console.log(`Your team is complete!`);
            console.log(employees);
            return employees;
        } else {
            
            return inquirer.prompt(employeeQuestions).then((answer) => {
                mappedNames.mappedNames.push(answer.empName);
                employee['empName'] = answer.empName;
                employee['empId'] = answer.empId;
                employee['empEmail'] = answer.empEmail;

                // ask manager q's  
                
                if (employee['empRole'] === 'Manager') {
                    return inquirer.prompt(managerQuestions).then((answer) => {
                        employee['mgrOfficeNumber'] = answer.mgrOfficeNumber;
                        const addEmployee = new Manager(employee['empName'], employee['empId'], employee['empEmail'], employee['mgrOfficeNumber']);
                        employees.push(addEmployee);
                        return promptUser();

                    });

                // ask engineer q's    

                } else if (employee['empRole'] === 'Engineer') {
                    return inquirer.prompt(engineerQuestions).then((answer) => {
                        employee['engGithub'] = answer.engGithub;
                        const addEmployee = new Engineer(employee['empName'], employee['empId'], employee['empEmail'], employee['engGithub']);
                        employees.push(addEmployee);
                        return promptUser();

                    });

                //ask intern q's

                } else if (employee['empRole'] === 'Intern') {
                    return inquirer.prompt(internQuestions).then((answer) => {
                        employee['internSchool'] = answer.internSchool;
                        const addEmployee = new Intern(employee['empName'], employee['empId'], employee['empEmail'], employee['internSchool']);
                        employees.push(addEmployee);
                        return promptUser();

                    });

                } 
            });
        }
    });
}

// write team.html file
const writeToFile = util.promisify(fs.writeFile);

// Checks if an output file exists, creates on otherwise
const checkDir = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fsPromises.mkdir(OUTPUT_DIR, (err) => {if (err) throw err});
    }
}

// initiating function
const init = async () => {
    console.log("Welcome to the Team Profile Generator. Answer the following questions to generate profiles for your employees. Once you've completed them, select 'Done' and you will generate a team.html file in your output folder.");
    try {
        checkDir();

        await promptUser();

        const employeeHTML = render (employees);

        await writeToFile(outputPath, employeeHTML);

        console.log("Success! You've generated /output/team.html.");
    } catch (err) {
        console.log(err);
    }
}

init();