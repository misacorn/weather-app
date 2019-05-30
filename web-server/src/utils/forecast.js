const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "https://api.darksky.net/forecast/3e4a7dc56d685bf2210e7e73fc516727/" +
    lat +
    "," +
    long;
  request({ url, json: true }, (e, { body }) => {
    const b = body.currently;
    const temp = (((b.temperature - 32) * 5) / 9).toFixed(2);
    const precipProbability = b.precipProbability;
    const summary = b.summary;

    e
      ? callback("Unable to connect!", undefined)
      : body.error
      ? callback("Unable to find the location. Please try again!", undefined)
      : callback(
          undefined,
          `${summary}. It is currently ${temp} Celsius degrees out. There is ${precipProbability}% of rain.`
        );
  });
};

module.exports = forecast;
