<p align="center">
    <img height="100" src="public/images/logo.png" />
    <br>
</p>

# Rxcellent-Backend

- Connects to a mongoDB on cloud
- Sample "get all Items" api is implemented

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
