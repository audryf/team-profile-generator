

const generateManager = (manager) => {
  return `
      <div class="card m-3 col-3" style="width: 18rem;">
        <div class="card-header">
          <span class="font-weight-bold">
            // Name: ${manager.getName()}
          </span><br>
          // Manager
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">EMAIL: ${manager.getEmail()}</li>
          <li class="list-group-item">OFFICE NUMBER: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
      `
}

const generateEngineer = (engineer) => {
  return `
<div class="card m-3 col-3" style="width: 18rem;">
  <div class="card-header">
    <span class="font-weight-bold">
      ${engineer.getName()}
    </span><br>
    // Engineer
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">EMAIL: ${engineer.getEmail()}</li>
    <li class="list-group-item">GITHUB: ${engineer.getGithub()}</li>
  </ul>
</div>
`
}

const generateIntern = (intern) => {
  return `
  <div class="card m-3 col-3" style="width: 18rem;">
    <div class="card-header">
      <span class="font-weight-bold">
        ${intern.getName()}
      </span><br>
      // Intern
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">EMAIL: ${intern.getEmail()}</li>
      <li class="list-group-item">SCHOOL: ${intern.getSchool()}</li>
    </ul>
  </div>
  `
}

module.exports = (manager, engineer, intern) => {
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
      <!-- Image and text -->
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          My Team
        </a>
      </nav>
    </header>
    <main class="container">
      <div>
        <div class="row">
        <!-- If manager -->
        ${generateManager(manager)}

        <!-- If engineer -->
        ${generateEngineer(engineer)}

        <!-- if intern -->
        ${generateIntern(intern)}

        </div>
      </div>
    </main>
  </body>
  
  </html>
  `


}
