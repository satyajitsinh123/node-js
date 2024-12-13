
const express = require("express");
const UserModel = require("../model/UserModel");
const passport = require("passport");

const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  // const cookieData = req.cookies["auth"];
  // if (cookieData) {

  // res.redirect("/dashboard");

  //   return;
  // }
  res.render("signIn");
});

dashboardRouter.get("/signup", (req, res) => {
  res.render("signup");
});

dashboardRouter.post("/insertData", async (req, res) => {
  console.log(req.body);
  try {
    await UserModel.create(req.body);
    console.log("User created");
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

dashboardRouter.get("/dashboard", (req, res) => {
  // const cookieData = req.cookies["auth"];
  // console.log(cookieData);
  // if (!cookieData) {
  // res.redirect("/");
  // }
  res.render("dashbord");
});

dashboardRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  async (req, res) => {
    return res.redirect("/dashboard");
  }
);

dashboardRouter.get("/viewAdmin", (req, res) => {
  const cookieData = req.cookies["auth"];
  if (cookieData) {
    res.render("viewAdmin");
    return;
  }
  res.render("signIn");
});

dashboardRouter.get("/changePassword", (req, res) => {
  res.render("changePassword");
});

dashboardRouter.post("/getChangePassword", (req, res) => {
  console.log(req.body);
});
dashboardRouter.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
module.exports = dashboardRouter;
