// These are the Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const outputPath = path.resolve(__dirname, 'output', 'myteam.html');

// These are Classes for the cards 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const indexHTML = require('./html/indexHTML');
const managerCard = require('./html/managerhtml');
const internCard = require('./html/internhtml');
const engineerCard = require('./html/engineerhtml');

const entireTeam = [];

const mainApp = () => {
  console.log('Let Us Build Your Team');
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is your Managers name?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Enter a name.';
        },
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your Managers email?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Enter an email.';
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the Employee ID?',
        validate(value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Enter a number.';
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your managers office number?',
        validate(value) {
          const valid = !isNaN(parseFloat(value));
          return valid || 'Enter a number.';
        },
      },
    ])
    .then(response => {
      const manager = new Manager(
        response.managerName,
        response.managerEmail,
        response.managerId,
        response.officeNumber
      );
      const managerCardHtml = managerCard(manager);
      entireTeam.push(managerCardHtml);
      addTeamMembers();
    });

  // Add additional team members
  function addTeamMembers() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'addMembers',
          message: 'What would you like to do?',
          choices: [
            'Add an Engineer',
            'Add an Intern',
            "Done. Let's check out my team!",
          ],
        },
      ])
      .then(answers => {
        switch (answers.addMembers) {
          case 'Add an Engineer': {
            promptEngineer();
            break;
          }
          case 'Add an Intern': {
            promptIntern();
            break;
          }
          case "That's everyone let's see our team!": {
            buildTeam();
            break;
          }
        }
      });
  }

  // Create an engineer
  const promptEngineer = () => {
    console.log('Enter engineer info');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'Enter Engineers name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter a name.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'Enter Engineers email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter an email.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'Enter Engineers ID:',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Enter a number.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'Enter GitHub User Name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter a username.';
          },
        },
      ])
      .then(response => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerEmail,
          response.engineerId,
          response.engineerGithub
        );
        const engineerCardHtml = engineerCard(engineer);
        entireTeam.push(engineerCardHtml);
        addTeamMembers();
      });
  };

  // Create an intern
  const promptIntern = () => {
    console.log('Enter your interns info');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Enter Interns name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter a name.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: 'Enter Interns Id:',
          validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Enter a number.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Enter Interns email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter an email.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Enter Interns school:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Enter a school.';
          },
        },
      ])
      .then(response => {
        const intern = new Intern(
          response.internName,
          response.internEmail,
          response.internId,
          response.internSchool
        );
        const internCardHtml = internCard(intern);

        entireTeam.push(internCardHtml);
        addTeamMembers();
      });
  };

  // Create the the Team List HTML
  function buildTeam() {
    // write team members to a html file
    const finalTeam = entireTeam.join('');
    fs.writeFileSync(outputPath, indexHTML(finalTeam), 'utf-8');
  }
};

mainApp();
