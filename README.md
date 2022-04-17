# Team-Profile-Generator
## Description
Team Profile Generator is a node command-line-interface application that allows the user to enter information about their team. The application will take the information that has been given and generates an HTML file displaying the information for the team.

## Criteria Met
* HTML file is generated that displays a nicely formatted team roster based on user input
* When an email address is clicked on the default email program opens and populates to the field of the email with the address
* When a GitHub username is clicked on the GitHub profile opens in a new tab
* The application prompts the user to enter the team manager's name, employee ID, email address, and office number
* When the information is entered the user is presented with a menu with the option to add an engineer or an intern
* When the user selects the engineer option the application prompts for the engineer's name, ID, email, and GitHub username, and they are returned to the menu
* When the user selects the intern option the application prompts for the intern's name, ID, email, and school. Then the user is returned to the menu
* When the user is finished building their team they exit the application and the HTML is generated

## Languages/Frameworks Used
* JavaScript
* Bootstrap
* FontAwesome

## Installation
1. Clone the repository from GitHub
2. Open Git Bash or the Terminal
3. Navigate to the directory where you would like to clone the repository to
4. Type the command "git clone" and paste the link to the repository
5. Open your code editor and open the repository
6. Open the terminal window in your code editor
7. Make sure you are in the correct folder in the terminal window
8. Type the command "npm install" in the terminal and press enter to install the dependency packages that are required.

Ensure the following packages were installed correctly
* Inquirer
* Jest

## Application Usage
1. The user will open the terminal and navigate to the index.js file
2. The user will type "node index.js" into the terminal to initiate the application
3. The user will answer the manager's prompt questions and then be asked to add other team members
4. The user will be prompted different questions based on what members of the team they are adding
5. After the user has added all team members and selected 'Done' the users input will be formatted into the HTML document
6. The HTML file will be generated and stored in a folder. When the user opens the HTML file, it will display all the information in a nicely formatted team roster. 

## Demo

Example HTML file:
<img src ='assets\Team-Profile-Generator-dist-index-html-2022-04-13-16_15_04.png' alt='Screenshot of example team roster'>

[Link to the walkthrough video](https://drive.google.com/file/d/1mFox4JoNJCU-Bd9SdE_8F5gGEhRuSPYl/view)