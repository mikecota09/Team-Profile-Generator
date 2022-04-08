const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
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
    .then((manager) => {
        switch(manager.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
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
            message: 'What is the engineer\'s GitHub username?'
        }
    ])
};

questions();