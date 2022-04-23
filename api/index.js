const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const urlRoutes = require('./routes/index')

const app = express();


app.use('/', urlRoutes);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);



mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((error) => {
    console.log(error);
  });
