const express = require("express");
const connection = require("./config/db");
const path = require("path");
const app = express();
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("navbar");
});

// app.get("/register", (req, res) => {
//   res.render("register");
// });

// app.get("/login", (req, res) => {
//   res.render("register");
// });

// app.get("/taskForm", (req, res) => {
//   res.render("taskForm");
// });

const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

app.listen(1213, (error) => {
  if (error) {
    console.log(`server starting the server`);
    return;
  }
  connection();
  console.log("server is runing on port 1213");
});
