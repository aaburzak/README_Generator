const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt ([

        {
            type: "input",
            name: "title",
            message:"What is the title of the project?"
        },
        {
            type: "input",
            name: "description",
            message:"What is the description of the project?"
        },
        {
            type: "input",
            name: "userStory",
            message:"What is the User Story?"
        },
        {
            type: "input",
            name: "username",
            message:"What is your github username?"
        },

        {
            type: "input",
            name: "repo",
            message:"please provide repository"
        },

    ])


    .then(({title, description, license, user, linkedin, github}) => {
    fs.writeFile('README.md')

`
#${title}

## Description
 ${description}

## License
![GitHub](https://img.shields.io/github/license/github-username-here/repo-name-here)

## User

## Github
    
`
})