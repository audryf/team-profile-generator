const inquirer = require('inquirer');
const fs = require('fs');


const questions = employees => {
    if (!employees) {
        employees = [];
    };
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
            type: 'list',
            name: 'role',
            message: "What is this employee's role/job title?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?',
            when: (input) => input.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of their school?',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: 'Would you like to add another employee?'
        }
    ])
        .then(employeeData => {
            console.log(employeeData)
            if (employeeData.confirmAddAnother) {
                return questions(employeeData)
            } else {
                return employeeData;
            };

        })
        .catch(error => {
            if (error) {
                console.log(error)
            }
        });
};

questions()
