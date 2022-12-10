<p align="center">
    <img height="100" src="be/public/images/logo.png" />
    <br>
</p>

# Rxcellent

Please give a brief description about your project here.

Team 4 set out to build a pharmacy e-commerce application where a user could receive and refill their prescriptions without the need to log in and have the option to shop for other items commonly found in a pharmacy.

## Technology Stack

Please specify the technology stack used.

-   Frontend: HTML, CSS, JavaScript, TypeScript, React.js
-   Backend: Node.js, Express.js, MongoDB
-   Middleware: Postman
-   Testing: Vitest

## A list of Completed Features

Pleaea list all features implemented (from users' pointview) and a brief description of each feature and related screenshots if applies.
Also provide a link to your requirement management tool such as pivotaltracker or Jira.

## Development Configuration Instructions

Please describe how to set up the local development environment and how to build/run the project.

## To run the project:

-   (If you haven't already cloned the repo) `git clone https://github.com/BUMETCS673/group-project-team4-js.git`
-   (If you have the repo on your machine, go to your project folder and) `git fetch`
-   `git checkout devel`
-   (In project root directory) `npm install`
-   (In project "be" directory) `npm install`
-   (In project "fe" directory) `npm install`
-   (In project "be" directory) `npm run start` to run backend server
-   (In project "fe" directory) `npm run dev` to run frontend server
-   Go to url: `localhost:5673`

# Rxcellent-Backend

## run project

-   `npm run start`

## debug project

-   `npm run debug`

## test project

-   `npm run test`
-   `npm run coverage`

Project documents included in frontend release

# Rxcellent-Frontend

## run project

-   `npm run dev`
-   url: `localhost:5673`

## project documents

-   Documents are in "doc" folder

## Developing environment

First, install Visual Studio Code editor and Node.js to your machine

-   https://code.visualstudio.com/download
-   https://nodejs.org/en/download/

**Hint: Installing NVM(Node Version Manager) is strongly recommended!** Potential node version conflicts can be avoided, Node.js will be automatically installed along with it.

-   Windows users need to install NVM for Windows. [This tutorial](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) is recommended, including instructions for both Windows and Mac users.

(Optional) You may install VSCode plugins Prettier and ESLint

-   Search "Prettier" and "ESLint" in VSCode Extensions tab, then install them

You **need** to install yarn to run lint and prettier scripts in the project

`npm install -g yarn`

If you are using Mac and getting file permission error, try

`sudo npm install -g yarn`

## Start project

Switch to **dev/fe** branch

run `npm install` \ `yarn install` in terminal to install all dependencies
run `npm run dev` \ `yarn dev` to start the project, the default port is http://localhost:5673/

## Git commit criteria

Run `npx husky install` to activate git commit hooks, mac users need to give file permission to husky, run `chmod ug+x .husky/*` and `chmod ug+x .git/hooks/*`

Now when you commit, it will automatically check and try to fix Prettier+ESLint errors.

Using commitizen to format your commit messages is recommended, it needs to be installed globally: `npm install -g commitizen`

**To make use of commitizen, run `npm run cz` \ `yarn cz` to commit**, you will see following content in terminal

![cz1](https://user-images.githubusercontent.com/85213835/195042885-b11e2d7a-8c6a-4f4e-ab15-2ae2032146f4.png)
![cz2](https://user-images.githubusercontent.com/85213835/195042987-de2ff3d1-7da0-4b1c-8125-445ecfee5129.png)

Please follow the instructions and write appropriate commit messages.

If you are not able to use commitizen, try to format your git message as above. You need to manually close your feature issues.

## Branch and issue criteria

You can create an issue to assign a task to yourself/someone else, or report a bug. In developing, alwasy create your own branch, name it with _name/issue:/id_ or _name/theme_, commit to your own branch and submit a pull request.

**Hint:** always check if there is new commit on the developing branch (and pull them) before you commit.

## Deployment (if applied)

If the app is deployed on a remote server, please provide a link to the deployed app.

Also describe how the app is deployed.

## Team members

Team member names and each member's contribution

Ryan Burns - Team Leader - My main focus was on the front-end I implemented the category section on the landing page and worked on (but Christol and Zahit completed) the searchbar and the shopping cart. I added over 100 documents to our Databasse that would allow our team to populate the shopping page with products.
