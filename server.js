// Dependencies: 
var express = require("express");
var path = require("path");

// Express Variables
var app = express();
var PORT = process.env.PORT || 3000;

// Link to routes
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});