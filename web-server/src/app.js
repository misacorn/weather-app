const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(__filename);

//define paths for Express config
const app = express();
const pubD = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates");

//set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);

app.use(express.static(pubD));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mimu"
  });
});

// app.get("", (req, res) => {
//   res.send("<h1>Helu Umimu</h1>");
// });

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});

// app.get("/about", (req, res) => {
//   res.send([
//     {
//       name: "Umimu",
//       age: "forever 18"
//     },
//     {
//       name: "Umicu",
//       age: "forever 81"
//     }
//   ]);
// });

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help!",
    message: "Help me get a job!"
  });
});

// app.get("/weather", (req, res) => {
//   res.send({ forcast: "Sunny", location: "Helsinki" });
// });

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
