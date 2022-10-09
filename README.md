# group-project-team4-js

## Installation

First, install Visual Studio Code editor and Node.js to your machine

- https://code.visualstudio.com/download
- https://nodejs.org/en/download/

Then checkout the project and switch to **project-template-chore** branch

(Optional) You may install VSCode plugins Prettier and ESLint

- Search "Prettier" and "ESLint" in VSCode Extensions tab, then install them

You **need** to install yarn to run lint and prettier scripts in the project

```
npm install -g yarn
```

if you are using Mac and getting file permission error, try

```
sudo npm install -g yarn
```

You may install commitizen.js, or you can refer to its commit message recommendations

```
npm install -g commitizen
```

![alt text](https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png)

**Install node-modules** of the project. You should be in the project root folder

```
npm install
```

Prepare husky.js hooks

```
npm run prepare
npx husky add .husky/pre-commit "npx pretty-quick --staged ng lint ng test"
```

Now when you commit, it will automatically check and try to fix Prettier+ESLint errors

I've added vitest instead of Jest for test automation. Because Jest has some issues with vite templates
You should be able to run tests by typing

```
npm run test
```

## Start

After the successfull installation of the packages:

```
npm run dev
```

or

```
yarn dev
```
