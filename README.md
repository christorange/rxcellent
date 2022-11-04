<p align="center">
    <img height="100" src="public/images/logo.png" />
    <br>
</p>

# Rxcellent-Backend

- Connects to a mongoDB on cloud
- Sample "get all Items" api is implemented

## rd

- Zahit
- Tsing
- Ignaico

## run project

- `git clone https://github.com/BUMETCS673/group-project-team4-js.git backend-rxcellent`
- `git checkout dev/be`
- `npm install`
- `npm run prepare`
- `npm run dev`
- url: `localhost:3000`

## test project

- When you go to localhost:3000/items on your browser, you should see the items list in json format
- If you want to directly access to the cloud mongoDB,

  - Install "MongoDB Compass" on your machine
  - Use `mongodb+srv://rxadmin:rxcellent@rxcellent.saf7ksx.mongodb.net/Rxcellent?retryWrites=true&w=majority` as connection string. (It is provided in .env file as well)
  - Click on Rxcellent database and see the collections

- ESLint+Prettier+commitizen+vitest libraries added and pre-commit hooks are configured as in dev/fe branch

## moudule

```
.
├── README.md
├── Team.md
├── app.js
├── bin
│   └── www
├── config
│   └── index.js
├── doc
│   ├── Iteration0
│   │   ├── CS673_MeetingMinutes_Team4.docx
│   │   ├── CS673_ProgressReport_Team4.xlsx
│   │   ├── CS673_SPPP_RiskManagement_Team4.xlsx
│   │   ├── CS673_SPPP_Team4.docx
│   │   └── Iter0_Presentation.pptx
│   └── iteration1
│       └── test.txt
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   └── logo.png
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── src
│   ├── controller  // interecte to front-end
│   │   ├── ItemController.js
│   │   └── UserController.js
│   ├── middleware  // request middleware
│   │   ├── custom-error.js
│   │   └── errorHandlerMiddleware.js
│   ├── model  //  model to constraint database format
│   │   ├── ItemModel.js
│   │   ├── UserModel.js
│   │   └── index.js
│   ├── route  //  route
│   │   ├── ItemRoute.js
│   │   ├── UserRoute.js
│   │   └── index.js
│   ├── service   //  manipulate database
│   │   ├── QueryValidator.js
│   │   └── ResponseWrapper.js
│   ├── test
│   │   ├── api
│   │   └── model
│   └── tools
│       ├── const.js  // response const
│       └── sendEmail.js
├── test.rest
└── views
    ├── index.ejs
    └── templete
```
