const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    // return all restaurants via the `Restaurant.findAll()` method. 
    const restaurants = await Restaurant.findAll();
    // json() is a method that converts the data into JSON format [JavaScript Object Notation]
    res.json(restaurants);
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})