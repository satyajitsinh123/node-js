const express = require("express");
const contectRouter = require("./Routes/contect");
const aboutRouter = require("./Routes/about");
const homeRouter = require("./Routes/home");

const app = express();
const port = 8082;

app.set("view engine", "ejs");

app.use("/", contectRouter);
app.use("/", aboutRouter);
app.use("/", homeRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(`Error starting srever : ${error}`);
  }
  console.log(`Server running at http://localhost:${port}`);
});
