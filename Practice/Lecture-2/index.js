const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
 return res.render("index");
});

app.get("/home", (req, res) => {
 return res.render("home");
});

app.get("/contact", (req, res) => {
  return res.render("contact");
});

app.use((req, res) => {
  return res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`server is runing ${PORT}`);
});
