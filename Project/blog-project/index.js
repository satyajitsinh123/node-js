const { error } = require("console");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(1230, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }

  console.log("Server is running on port 1112");
});
