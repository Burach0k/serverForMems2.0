const express = require("express");
const app = require("express")();
const PORT = process.env.PORT || 5000

const register = require("./register/register");
const home = require("./home/home");
const login = require("./login/login");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/registry", register);
app.use("/login", login);
app.use("/", home);


app.listen(PORT);
