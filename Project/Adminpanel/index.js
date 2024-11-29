const express = require("express");
const dashbordRouter = require("./routes/dashbordRout");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", dashbordRouter);

app.listen(8020, (error) => {
  if (error) {
    console.log(`server starting the server`);
    return;
  }
  console.log("server is runing on port 80  20");
});
