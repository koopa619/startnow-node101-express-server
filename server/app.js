// import files and packages up here

express = require("express");

data = require("./data.json");

morgan = require("morgan");





// create your express server below 

app = express();

// add your routes and middleware below

app.use(morgan("dev"));

app.use(express.static("/Users/rogfi/oca/startnow-web101-san-diego-top-spots"));

app.get("/data", function(req, res) {
    res.json(data)

});

app.get("/data", function(req, res) {
    res.send(200);
})
    




// finally export the express application
module.exports = app;




