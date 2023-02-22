const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

// Part 1: Create a GET Request Route

// TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    // return all restaurants via the `Restaurant.findAll()` method. 
    const restaurants = await Restaurant.findAll();
    // json() is a method that converts the data into JSON format [JavaScript Object Notation]
    res.json(restaurants);
})

//Part 2: Route Parameters

app.get("/restaurants/:id", async (req, res) => {
    // return a single restaurant via the `Restaurant.findByPk()` method. Find by 'Primary Key'
    const restaurant = await Restaurant.findByPk(req.params.id);
    // send found restaruant as a JSON response:
    res.json(restaurant);
})

// Part 3a - adding a POST request route

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code:
app.use(express.json());

app.post("/restaurants", async (req, res) => {
    // create a new restaurant via the `Restaurant.create()` method. Req.body is the data that is sent from the client side (i.e. the parsed JSON data line 30)
    const restaurant = await Restaurant.create(req.body);
    // send created restaurant as a JSON response:
    res.json(Restaurant);
})

// Part 3b - adding a PUT request route
app.put("/restaurants/:id", async (req, res) => {
    // update a restaurant via the `Restaurant.update()` method. Req.body contains updated data for the restaurant.
    const restaurant = await Restaurant.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    // send updated restaurant as a JSON response:
    res.json(restaurant);
})

// Part 3c - adding a DELETE request route

app.delete("/restaurants/:id", async (req, res) => {
    // delete a restaurant via the `Restaurant.destroy()` method.
    const restaurant = await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    });
    // send deleted restaurant as a JSON response:
    res.json(restaurant);
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})