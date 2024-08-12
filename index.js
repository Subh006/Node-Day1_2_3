const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/home", function (req, res) {
    res.send("Welcome to home page");
});

app.get("/about", function (req, res) {
    res.redirect("/privacy");
});

app.get("/privacy", function (req, res) {
    res.send("About page redirect to privacy");
});

app.post("/send/:name", function (req, res) {
    const name = req.params.name;
    res.send(`Hii I am ${name}`)
});

app.put("/update/:name",function (req, res) {
    const name = req.params.name;
    const newName = req.body.newName;
    res.send(`${name} changed to ${newName}`)
});

app.delete("/delete/:name",function (req, res) {
    const name = req.params.name;
    res.send(`${name} deleted successfully`)
});

app.listen("1599", function (req, res) {
    console.log("Server started at port 1599");
});