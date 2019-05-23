const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Helu Umimu");
});

app.get("/about", (req, res) => {
  res.send("About Mimu");
});

app.get("/weather", (req, res) => {
  res.send("Weather Forecast");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
