const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


const app = express();





mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((error) => {
    console.log(error);
  });
