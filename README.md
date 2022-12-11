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

[Pivotal Tracker link](https://www.pivotaltracker.com/n/projects/2599390)

-   Order Rx Online:
    -   As a person with a prescription, I want to be able to order prescription medicine online so that I don’t need to walk to the store every time.
    -   As a customer, I want to be able to order over the counter medicine online so that I don’t need to walk to the store every time.
-   Order non-Rx medication online:
    -   As a customer, I want to search OTC medicine by keywords or active ingredients so that I find the medicine easily
-   Manage Shopping Cart:
    -   As a customer, I want to be able to add/remove medicine to my cart, so that I can check out multiple medicines at once.
-   Get Rx Without a Login:
    -   As a customer, I don’t want to register for an online pharmacy to be able to order medicine, so that I won’t give my personal information and I don’t have to manage my password
-   Using Prescription Number for “registration”:
    -   As a patient that doesn’t want to register to another platform, I want to only have to write my prescription number and birthday on the platform so that I can access my medicines easily.
-   Doctor/Prescriber Login:
    -   As a prescriber, I want to be able to log into the prescription panel so that I can write e-prescriptions in a secure manner.
-   Doctor Should Issue Rx:
    -   As a prescriber, I want to be able to write e-prescriptions, so that patients can order their prescriptions by using it.
-   Email Sent to Patient when Prescription is Generated:
    -   As a patient, I want to receive an email with my prescription number so that I can order my prescriptions.
    -   As a doctor, I wish for my patients to receive an email when their prescription is generated, so that they can purchase their medicines as soon as possible.

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

-   UI design of the app
-   Configuration of ESLint and Prettier for code format check.
-   Configuration of git hooks for commit messages formatting and pre-commit code check and fixes.
-   Designed and initialized frontend code structure.
-   Implemented home page, shopping page, and create prescription page.
    Functionalities included: Search for non-prescribed medcines, filter items by category, dynamically search for prescribed medicines in doctor's page and add them to prescription, retreive prescription.
-   Integration of frontend and backend.
-   Contributed to SPPP document.

**Youqing Shao - Security Leader**

-   Sign in / up, change password (full stack)
-   Designed jwt, developed permission authentication
-   Backend template (node + express) configuration with Zahit
-   Project security docs and actions
-   Node.js middleware and error interceptpor
-   whole project API request interaction
-   Email system for signup and order
-   Deployment herotu & aws clound
-   new technology exploring


**Nivan Hanjura - Design and Implementation Leader**
- Learn the typescript and figma design.
- Designing of context api for the state management.
- Added the logic for cart implementation.
- Added frontend test cases.
- Added the logic and implementation for Doctor UI.