const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employeeArr = [];
const directory = path.resolve(__dirname, 'output')
const outputFile = path.join(directory, 'myTeam.html')
// const render = require('./src/generateHTML.js')

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
    console.log('employee array', employeeArr)

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    }
    fs.writeFileSync(outputFile, render(employeeArr), 'utf-8')
}
const generateEmployees = (employeeArr) => {
    for (let i = 0; i < employeeArr.length; i++) {
        console.log(employeeArr[i])
        if (employeeArr[i].getRole() === "Manager") {
            return `
            <div class="card m-3 col-3" style="width: 18rem;">
                <div class="card-header">
                    <span class="font-weight-bold">
                    ${employeeArr[i].getName()}
                    </span><br>
                    ${employeeArr[i].getRole()}
                </div>
  
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArr[i].getId()}</li>
                    <li class="list-group-item">EMAIL: ${employeeArr[i].getEmail()}</li>
                    <li class="list-group-item">OFFICE NUMBER: ${employeeArr[i].getOfficeNumber()}</li>
                </ul>
            </div>`
        }
        if (employeeArr[i].getRole() === "Engineer") {
            return `
            <div class="card m-3 col-3" style="width: 18rem;">
                <div class="card-header">
                    <span class="font-weight-bold">
                    ${employeeArr[i].getName()}
                    </span><br>
                    ${employeeArr[i].getRole()}
                </div>
  
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArr[i].getId()}</li>
                    <li class="list-group-item">EMAIL: ${employeeArr[i].getEmail()}</li>
                    <li class="list-group-item">GITHUB: ${employeeArr[i].getGithub()}</li>
                </ul>
            </div>`
        }
        if (employeeArr[i].getRole() === "Intern") {
            return `
            <div class="card m-3 col-3" style="width: 18rem;">
                <div class="card-header">
                    <span class="font-weight-bold">
                    ${employeeArr[i].getName()}
                    </span><br>
                    ${employeeArr[i].getRole()}
                </div>
  
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArr[i].getId()}</li>
                    <li class="list-group-item">EMAIL: ${employeeArr[i].getEmail()}</li>
                    <li class="list-group-item">SCHOOL: ${employeeArr[i].getSchool()}</li>
                </ul>
            </div>`
        }
       
    }
}

const render = (employeeArr) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <title>Team Profile</title>
    </head>
    
    <body class="container">
      <header class="container">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            My Team
          </a>
        </nav>
      </header>
      <main class="container">
        <div>
          <div class="row">
          ${generateEmployees(employeeArr)}
          </div>
        </div>
      </main>
    </body>
    
    </html>
    `
};




init()
