const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Helu Umimu</h1>");
});

app.get("/about", (req, res) => {
  res.send([
    {
      name: "Umimu",
      age: "forever 18"
    },
    {
      name: "Umicu",
      age: "forever 81"
    }
  ]);
});

app.get("/weather", (req, res) => {
  res.send({ forcast: "Sunny", location: "Helsinki" });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
