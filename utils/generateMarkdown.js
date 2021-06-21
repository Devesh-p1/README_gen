// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data) {
    case "Apache":
      return `![Apache Badge](https://img.shields.io/badge/License-Apache-blue)`;
    case "GNU":
      return `![GNU Badge](https://img.shields.io/badge/License-GNU-red)`;
    case "ISC":
      return `![ISC Badge](https://img.shields.io/badge/License-ISC-orange)`;
    case "MIT":
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-green)`;
    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  console.log(``)
  switch (data) {
    case "Apache":
      return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
    case "GNU":
      return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
    case "ISC":
      return `[ISC License](https://choosealicense.com/licenses/isc/)`;
    case "MIT":
      return `[MIT License](https://choosealicense.com/licenses/mit/)`;
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(data) {
  console.log(data);
  switch (data) {
    case "Apache":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "GNU":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "ISC":
      return `The license for this project is ${renderLicenseLink(data)}`;
    case "MIT":
      return `The license for this project is ${renderLicenseLink(data)}`;
    default:
      return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${(renderLicenseBadge(data.license))}
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.user}](https://github.com/${data.user}/).
`;
}


module.exports = generateMarkdown;