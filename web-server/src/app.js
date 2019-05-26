const path = require("path");
const express = require("express");
const hbs = require("hbs");

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
    name: "Micu"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Mimu"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help!",
    name: "Mona",
    message: "Help me get a job!"
  });
});

// app.get("/weather", (req, res) => {
//   res.send({ forcast: "Sunny", location: "Helsinki" });
// });

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
