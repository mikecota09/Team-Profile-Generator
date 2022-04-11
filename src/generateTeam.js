const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function generateCards(team) {
  for(let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch(teamArray.getRole()) {
      case 'Manager':
        const manager = new Manager(teamArray.id, teamArray.name, teamArray.email, teamArray.officeNumber);
        return generateManagerCard(manager);
        break;
      case 'Engineer':
        const engineer = new Engineer(teamArray.id, teamArray.name, teamArray.email, teamArray.github);
        return generateEngineerCard(engineer);
        break;
      case 'Intern':
        const intern = new Intern(teamArray.id, teamArray.name, teamArray.email, teamArray.school);
        return generateInternCard(intern);
        break;
    }
  }
}
let generateManagerCard = (Manager) => {
  return `
  <h5 class="card-title">${Manager.getName()}</h5>
  <p class="card-text">${Manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Manager.getId()}</li>
  <li class="list-group-item">Email: ${Manager.getEmail()}</li>
  <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
  </ul>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <h5 class="card-title">${Engineer.getName()}</h5>
  <p class="card-text">${Engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Engineer.getId()}</li>
  <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
  <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
  `
};

let generateInternCard = (Intern) => {
  return `
  <h5 class="card-title">${Intern.getName()}</h5>
  <p class="card-text">${Intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${Intern.getId()}</li>
  <li class="list-group-item">Email: ${Intern.getEmail()}</li>
  <li class="list-group-item">School: ${Intern.getSchool()}</li>
  </ul>
  `
}

function generateTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
  </div>
</div>
<div>
${generateCards(team)}
</div>
</body>
</html>
    `
}


module.exports = generateTeam;