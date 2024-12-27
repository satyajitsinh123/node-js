
const express = require("express");
const path = require("path")
const app = express();
app.set("view engine", "ejs");
app.use("/vendors", express.static(path.join(__dirname, "/vendors")));
app.use("/src", express.static(path.join(__dirname, "/src")));
app.get("/", (req, res) => {
  res.render("header");
});
app.listen(9090, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }

  console.log("Server is running on port 9090");
});
