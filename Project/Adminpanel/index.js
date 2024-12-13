const express = require("express");
const dashbordRouter = require("./routes/dashbordRout");
const path = require("path");
const connection = require("./config/db");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({}));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", dashbordRouter);

app.listen(2323, (error) => {
  if (error) {
    console.log(`server starting the server`);
    return;
  }
  connection();
  console.log("server is runing on port 2323");
});
