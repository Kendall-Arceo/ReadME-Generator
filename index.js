const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fetch = require("node-fetch");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
    
}

fetch('https://api.github.com')
  .then(response => response.json())
  .then(data => console.log(data))

async function init() {
    console.log("Welcome to the readME generator!")
    try {
      const answers = await promptUser();
      const html = generateHTML(answers);
  
      await writeFileAsync("index.html", html)
  
      
    } catch(err) {
      console.log(err);
    }
  }
  
  init();