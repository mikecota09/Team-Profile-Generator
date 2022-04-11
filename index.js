const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const fs = require('fs');
const generateTeam = require('./src/generateTeam');


team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((managerAnswers) => {
        console.log(managerAnswers)
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        console.log(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
        }
    })
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((engineerAnswers) => {
        console.log(engineerAnswers)
        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerID, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
        team.push(engineer)
        console.log(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((internAnswers) => {
        console.log(internAnswers)
        const intern = new Intern(internAnswers.internName, internAnswers.internID, internAnswers.internEmail, internAnswers.internSchool)
        team.push(intern)
        console.log(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
        }
    })
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};