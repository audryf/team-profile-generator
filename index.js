const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const validator = require('email-validator');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const directory = path.resolve(__dirname, 'output');
const outputFile = path.join(directory, 'myTeam.html');

const employeeArr = [];
const htmlString = [];

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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Required!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Required!"); 
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: emailInput => {
                if (validator.validate(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Required!"); 
                    return false;
                }
            }
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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Required!"); 
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Required!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: emailInput => {
                if (validator.validate(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Required!");
                }
            }
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
            message: "What is the employee's full name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Required!"); return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this employee's id number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Required!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: emailInput => {
                if (validator.validate(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of their school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Required!");
                }
            }
        }
    ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employeeArr.push(intern)
            init();
        })
}

const generateHTML = () => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    }
    fs.writeFileSync(outputFile, render(employeeArr), 'utf-8')
}
const generateEmployees = (employeeArr) => {
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].getRole() === "Manager") {
            htmlString.push(
                `
            <div class="card m-3 col-lg-3" style="width: 18rem; height: 19rem;">
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
            )
        }


        if (employeeArr[i].getRole() === "Engineer") {
            htmlString.push(
                `
                <div class="card m-3 col-lg-3" style="width: 18rem; height: 19rem;">
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
            )
        }

        if (employeeArr[i].getRole() === "Intern") {
            htmlString.push(
                `
            <div class="card m-3 col-lg-3" style="width: 18rem; height:19rem;">
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
            )
        }
    }
    return htmlString.join('')
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
            <div class="row justify-content-center">
          ${generateEmployees(employeeArr)}
          </div>
        </div>
      </main>
    </body>
    
    </html>
    `
};




init()
