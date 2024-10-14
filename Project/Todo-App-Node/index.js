const express = require("express");

const app = express();
const PORT = 8000;

let records = [];
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// home
app.get("/", (req, res) => {
  return res.render("index", { records });
  // res.send("Satyajit")
});

// additing rout

app.post("/add", (req, res) => {
  const newReacord = req.body.record;
  if (newReacord) {
    records.push(newReacord);
  }
  res.redirect("/");
});

// editing rout
app.post("/edit/:index", (req, res) => {
  const index = req.params.index;
  const edittobe = records[index];
  res.render("edit", { record: edittobe, index });
});

// upadet rout

app.post("/update/:index", (req, res) => {
  const index = req.params.index;
  records[index] = req.body.record;
  res.redirect("/");
});

// delet rout

app.get("/delete/:index", (req, res) => {
  const index = req.params.index;
  records.splice(index, 1);
  res.redirect("/");
});

// listner
app.listen(PORT, () => {
  console.log("Started server");
});
