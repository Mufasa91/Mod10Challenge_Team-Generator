# Module 10 Challenge: Team Profile Generator
## Description

In this unit, we focused on Object Oriented Programming and unit testing. Our objective was to develop a Node.js command-line application that would take user input information about employees on a software engineering team and generate an HTML webpage displaying the data. To create the employee objects, we utilized Constructors and Classes, such as Employee, Manager, Engineer, and Intern. Besides developing the application, we had to ensure that it passed every unit test using Jest and Inquirer. This project required us to test every aspect of the code to ensure its accuracy. A demonstration of the node application and its testing is presented below.

# User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Screenshot
This is a screenshot of the generated HTML webpage.

![Team Generator HTML Webpage Screenshot](./assets/Mod10Challenge%20Final%20Output.png)

## Walkthrough Video
![Team Generator Walkthrough Video](./assets/Mod10Challenge%20Screen%20Recording.gif)
