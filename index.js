const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArr = [];
const directory = path.resolve(__dirname, 'output')
const outputFile = path.join(directory, 'myTeam.html')
const render = require('./src/generateHTML.js')

const init = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role/job title?",
            choices: ['Manager', 'Engineer', 'Intern', 'No more']
        }
    ])
        .then(userSelect => {
            switch (userSelect.role) {
                case "Manager":
                    managerQ()
                    break;
                case "Engineer":
                    engineerQ()
                    break;
                case "Intern":
                    internQ()
                    break;
                default:
                    generateHTML()
            }
        })
};

const managerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?'
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArr.push(manager)
        init();
    })
}

const engineerQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?'
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(engineer)
        init();
    })
}

const internQ = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of their school?'
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArr.push(intern)
        init();
    })
}

const generateHTML = () => {
    console.log(employeeArr);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    }
    fs.writeFileSync(outputFile, render(employeeArr), 'utf-8')
}




init()
   

module.exports = employeeArr;