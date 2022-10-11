# group-project-team4-js

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

if you are using Mac and getting file permission error, try

`sudo npm install -g yarn`

## Start project

run `npm install` \ `yarn install` in terminal to install all dependencies
run `npm run dev` \ `yarn dev` to start the project, the default port is http://localhost:5173/

## Git commit criteria

Using commitizen is recommended, it needs to be installed globally: `npm install -g commitizen`

run `npx husky install` to activate git commit hooks, mac users need to give file permission to husky, run `chmod ug+x .husky/*` and `chmod ug+x .git/hooks/*`

**To make use of commitizen, run `npm run cz` \ `yarn cz` to commit**

Now when you commit, it will automatically check and try to fix Prettier+ESLint errors.

Vitest is used for automatic tests, run tests with `npm run test`
