<p align="center">
    <img height="100" src="be/public/images/logo.png" />
    <br>
</p>

# Rxcellent

Team 4 set out to build a pharmacy e-commerce application where a user could receive and refill their prescriptions without the need to log in and have the option to shop for other items commonly found in a pharmacy.

## Technology Stack

Rxcellent is a full-stack JavaScript project.

-   Frontend:
    -   HTML, CSS, JavaScript
    -   [React](https://reactjs.org/) as the main UI framework
    -   [Vite](https://vitejs.dev/guide/) as build engine and front-end server
    -   [TypeScript](https://www.typescriptlang.org/) for type safety upon JS
    -   [MUI](https://mui.com/) for UI components
    -   [React-Redux](https://react-redux.js.org/), [React-Query](https://react-query-v3.tanstack.com/), [React-Router](https://reactrouter.com/en/main), [Axios](https://axios-http.com/docs/intro)
    -   [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting
    -   [Husky](https://typicode.github.io/husky/#/) as Git hooks tool
    -   [Vitest](https://vitest.dev/) as test automation tool with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

<br/>

-   Backend:
    -   [Node.js](https://nodejs.org/en/) as JavaScript runtime
    -   A template build upon [Express.js](https://expressjs.com/) as Node.js framework
    -   [Mongoose.js](https://mongoosejs.com/) as MongoDB client
    -   [Bcrypt](https://www.npmjs.com/package/bcrypt), [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken), [NodeMailer](https://nodemailer.com/about/)
    -   [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting
    -   [Husky](https://typicode.github.io/husky/#/) as Git hooks tool
    -   [Vitest](https://vitest.dev/) as test automation tool with [supertest](https://www.npmjs.com/package/supertest) and [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server)

<br/>

## A list of Completed Features

Please list all features implemented (from users' pointview) and a brief description of each feature and related screenshots if applies.
Also provide a link to your requirement management tool such as pivotaltracker or Jira.

<br/>

## Development Configuration Instructions

### Start the project
-   (If you haven't already cloned the repo) `git clone https://github.com/BUMETCS673/group-project-team4-js.git`

-   To install all dependencies, run `$ sh build.sh` in project root directory, <b style='font-size:18px'>or</b>

    -   (In project root directory) `npm install`
    -   (In project "be" directory) `npm install`
    -   (In project "fe" directory) `npm install`

<br/>

-   (In project "be" directory) `npm run start` to run backend server
-   (In project "fe" directory) `npm run dev` to run frontend server
-   Go to url -> `localhost:5673`

### Commit cirteria
Run `npx husky install` to activate git commit hooks, mac users need to give file permission to husky, run `chmod ug+x .husky/*` and `chmod ug+x .git/hooks/*`

Now when you commit, it will automatically check and try to fix Prettier+ESLint errors.

Using commitizen to format your commit messages is required, it needs to be installed globally: `npm install -g commitizen`

To make use of commitizen, run `npm run cz` \ `yarn cz` to commit, follow the instructions shown in terminal.

<br/>

<br/>

## Team members

Team member names and each member's contribution

**Ryan Burns - Team Leader**

-   My main focus was on the front-end I implemented the category section on the landing page and worked on (but Christol and Zahit completed) the searchbar and the shopping cart. I added over 100 documents to our Databasse that would allow our team to populate the shopping page with products.

**Zahit Odabas - QA Leader**

-   General design of the system, possible use cases and features
-   Mongo Cloud Database and backend integration
-   Backend => Backend template (node + express) configuration with Tsing, Backend project structure, Item(medicine) model, controller, API and tests
-   Frontend => Frontend template (vite) configuration with Christol
-   UI => Navbar, Searchbar, Banner, Prescription Drawer, Shopping page Category Filter, Shopping Cart
-   Checkout Page with all UI, functionalities and backend integration. Frontend test cases
-   Code reviewing, bug-fixing, refactoring
-   Contribution to project documentation. Wrote the STD document

**Chenfei Yu - Configuration Leader**

- UI design of the app
- Configuration of ESLint and Prettier for code format check.
- Configuration of git hooks for commit messages formatting and pre-commit code check and fixes.
- Designed and initialized frontend code structure.
- Implemented home page, shopping page, and create prescription page.
Functionalities included: Search for non-prescribed medcines, filter items by category, dynamically search for prescribed medicines in doctor's page and add them to prescription, retreive prescription.
- Integration of frontend and backend.
- Contributed to SPPP document.
