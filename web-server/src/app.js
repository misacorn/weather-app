const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

// console.log(__dirname);
// console.log(__filename);

//define paths for Express config
const app = express();
const pubD = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

//set up static directory to server
app.use(express.static(pubD));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Misa"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Misa"
  });
});

app.get("/weather", (req, res) => {
  !req.query.address &&
    res.send({
      error: "You must provide an address!"
    });
  geoCode(req.query.search, (error, { latitude, longitude, location } = {}) => {
    error && res.send({ error });
    forecast(latitude, longitude, (error, forecastData) => {
      error && res.send({ error });
      res.send({
        location,
        forecast: forecastData,
        address: req.query.search
      });
    });
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help!",
    name: "Misa",
    message: "How to find your location?"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help!",
    name: "Mimu",
    errorMessage: "Help Article Not Found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error",
    name: "Mimu",
    errorMessage: "Page Is Not Found"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
