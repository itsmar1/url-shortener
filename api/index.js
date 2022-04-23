const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const urlRoutes = require('./routes/index')

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.use('/', urlRoutes);



mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((error) => {
    console.log(error);
  });
