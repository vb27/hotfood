// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());







// Routes
// ================================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "add.html"))
})

app.get("/view", function(req, res){
    res.send(path.join(__dirname, "view.html"))
})
