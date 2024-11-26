const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");


const PORT = 1112;


let users = [];
let loggedInUser = null;

app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    if (loggedInUser) {
        res.render("home", { user: loggedInUser });
    } else {
        res.redirect("/login");
    }
});


app.get("/login", (req, res) => {
    res.render("login");
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        loggedInUser = user;
        res.redirect("/");
    } else {
        res.send("Invalid credentials. <a href='/login'>Try again</a>");
    }
});

app.get("/signup", (req, res) => {
    res.render("signup");
});


app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        res.send("User already exists! <a href='/signup'>Try again</a>");
    } else {
        const newUser = { name, email, password };
        users.push(newUser);
        res.redirect("/");
    }
});


app.get("/logout", (req, res) => {
    loggedInUser = null;
    res.redirect("/login");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});