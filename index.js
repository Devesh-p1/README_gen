// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'enter project title'
        },
        {
            type: 'input',
            name: 'description',
            message: 'enter project description'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'enter installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'enter usage'
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose licence',
            choices: ['MIT', 'apache', 'GNU', 'ISC', 'other', 'none']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'enter contributing users'
        },
        {
            type: 'input',
            name: 'test',
            messages: 'enter tests command'
        },
        {
            type: 'input',
            name: 'user',
            message: 'enter github user name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email adress'
        }
    ]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
//     fs.writeToFile(fileName, data, err => {
//         err ? console.log(err) : console.log('YER IT WORKED!');
//     })
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        
        fs.writeFileSync('README.md', generateMarkdown({...data}));
    })
    .catch(err => err ? console.log(err) : console.log('Success!'));
}


// Function call to initialize app
init();