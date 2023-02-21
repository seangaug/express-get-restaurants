const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//Part 1: Create a GET Request Route

//TODO: Create your GET Request Route Below: 
// app.get("/restaurants", async (req, res) => {
//     // return all restaurants via the `Restaurant.findAll()` method. 
//     const restaurants = await Restaurant.findAll();
//     // json() is a method that converts the data into JSON format [JavaScript Object Notation]
//     res.json(restaurants);
// })

//Part 2: Route Parameters

app.get("/restaurants/:id", async (req, res) => {
    // return a single restaurant via the `Restaurant.findByPk()` method. Find by 'Primary Key'
    const restaurant = await Restaurant.findByPk(req.params.id);
    // send found restaruant as a JSON response:
    res.json(restaurant);
})


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})