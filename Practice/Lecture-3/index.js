const express = require("express");
const connection = require("./Config/db");
const UserModel = require("./model/userModel");
let port = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded())

app.get("/",(req,res) => {
    console.log("hello")
    res.render("addData")
})

app.listen(port, (error) => {
    if (error) {
      console.log("server is not running");
      return;
    }
    connection();
    console.log(`Server is running on port ${port}`);
  });