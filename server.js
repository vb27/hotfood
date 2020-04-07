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

const tables = [];

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);
  });







// Routes
// ================================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "add.html"))
})

app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"))
})

app.get("/api/tables", function(req, res){
    return res.json(tables)
})

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
})
