const inquirer = require('inquirer');
const fs = require('fs');

// ![GitHub](https://img.shields.io/github/license/${userName}/${repository})

inquirer.prompt ([
        {
            type: "input",
            name: "userName",
            message:"Hello, what is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message:"Please provide your best email for contact.",
        },
        // {
        //     type: "input",
        //     name: "repository",
        //     message:"Please provide the GitHub repository for this project.",
        // },
        {
            type: "input",
            name: "title",
            message:"What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message:"Please describe the project.",
        },
        {
            type: "input",
            name: "installation",
            message:"What is required for installation of the project?",
        },
        {
            type: "input",
            name: "usage",
            message:"Please provide instructions and examples for use.",
        },
        {
            type: "list",
            name: "license",
            message:"Please choose an applicable license for the project.",
            choices:[
                "N/A",
                "Academic Free License v3.0",
                "Apache license 2.0",
                "Artistic license 2.0",
                "Boost Software License 1.0",
                "BSD 2-clause 'Simplified' License",
                "BSD 3-clause 'New' or 'Revised' license",
                "BSD 3-clause Clear license",
                "Creative Commons license family",
                "Creative Commons Zero v1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Do What The F*ck You Want To Public License (yes this is real)",
                "Educational Community License v2.0",
                "Eclipse Public License 1.0",
                "Eclipse Public License 2.0",
                "European Union Public License 1.1",
                "GNU Affero General Public License v3.0",
                "GNU General Public License family",
                "GNU General Public License v2.0",
                "GNU General Public License v3.0",
                "GNU Lesser General Public License v2.1",
                "GNU Lesser General Public License v3.0",
                "ISC",
                "LaTeX Project Public License v1.3c",
                "Microsoft Public License",
                "MIT",
                "Mozilla Public License 2.0",
                "Open Software License 3.0",
                "PostgreSQL License",
                "SIL Open Font License 1.1",
                "University of Illinois/NCSA Open Source License",
                "The Unlicense",
                "zLib License",
            ]
        },
        {
            type: "input",
            name: "contribution",
            message:"Please provide instructions for those who wish to contribute to the project.",
        },
        {
            type: "input",
            name: "tests",
            message:"Please provide any tests written for the project, and examples on how to run them. ",
        },
    ])


    .then(({userName, email, title, description, installation, usage, license, contribution, tests}) => {
    fs.writeFile('README.md',

`
## ${title}

![License](https://img.shields.io/badge/License-${license}-blue.svg)

## Description
${description}

## Table Of Contents:
[Installation](#installation)

[Usage](#usage)

[Contribution](#contribution)

[Tests](#tests)

[Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Tests
${tests}

## Questions

For any questions about this project please contact at https://github.com${userName}

or by Email at ${email}
    
`,
        (err) => err ? console.error(err) : console.log('Successfully Generated README.md!'))
});