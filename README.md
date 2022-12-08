<p align="center">
    <img height="100" src="be/public/images/logo.png" />
    <br>
</p>

# After Merge

-   We will create new feature branches from "main" branch in github
-   We will create our pull requests to merge into "devel" branch
-   We will not be using "dev/be" or "dev/fe" anymore
-   If everything is ok in "devel" branch, we will create another pull request to merge it into "main" branch

-   When you create a new feature branch from "main" in github, and want to checkout into your machine
    -   Go to your project root directory
    -   `git fetch`
    -   `git checkout <new_branch_name>`

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
