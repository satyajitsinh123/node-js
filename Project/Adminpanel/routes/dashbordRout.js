const express = require("express");
const userModel = require("../model/userModel");

const dashbordRouter = express.Router();

dashbordRouter.get("/", (req, res) => {
  res.render("dashbord");
});

 dashbordRouter.get("/signUp",async(req,res)=>{
  res.render("signUp");
  try {
    await userModel.create(req.body)
    res.redirect("/signIn")
  } catch (error) {
    console.log(error);
    
  }
 })
module.exports = dashbordRouter
