const express = require("express");

dashboardRouter.get("/", (req, res) => {
//   const cookieData = req.cookies["auth"];
//   if (cookieData) {
//     res.redirect("/dashboard");

//     return;
//   }
  res.render("signIn");
});
dashboardRoute.get("/dashboard", passport.isAuth, (req, res) => {
  res.render("dashboard");
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
