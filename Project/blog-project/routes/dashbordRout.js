const express = require("express");
const dashboardRouter = express.Router();

dashboardRouter.get("/", (req, res) => {
  const cookieData = req.cookies["auth"];
  if (cookieData) {
    res.redirect("/dashboard");
    return;
  }
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
    res.redirect("/signIn");
  } catch (err) {
    console.log(err);
  }
});

dashboardRouter.get("/dashboard", (req, res) => {
  const cookieData = res.cookies["auth"];
  console.log(cookieData);
  if (!cookieData) {
    res.redirect("/");
  }
  res.render("dashboard");
});

dashboardRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName);

  const getUserData = await UserModel.findOne({ userName: userName });
  if (getUserData) {
    if (getUserData.password !== password) {
      console.log("Invalid credentials");
      res.redirect("/");
      return;
    }
  } else {
    console.log("User not found");
    res.redirect("/");
    return;
  }
  res.cookie("auth", getUserData);
  res.redirect("/dashboard");

  console.log(getUserData);
});

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

dashboardRouter.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});
module.exports = dashboardRouter;
