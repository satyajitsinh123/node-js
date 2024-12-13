const express = require("express");

const contectRouter = express.Router();

contectRouter.get("/contect", (req, res) => {
  res.render("contect");
});


module.exports = contectRouter;