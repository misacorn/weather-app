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
      ? console.log("Unable to connect", undefined)
      : body.error
      ? console.log("Unable to find location", undefined)
      : callback(
          undefined,
          `${summary}. It is currently ${temp} degrees out. There is ${precipProbability}% of rain.`
        );
  });
};

module.exports = forecast;

// const urlWeather =
//   "https://api.darksky.net/forecast/3e4a7dc56d685bf2210e7e73fc516727/37.8267,-122.4233";

// request({ url: urlWeather, json: true }, (error, response) => {
//   // const data = JSON.parse(response.body);
//   // console.log(((data.currently.temperature - 32) * 5) / 9);

//   const temp = response.body.currently.temperature;
//   const precipProbability = response.body.currently.precipProbability;
//   const summary = response.body.minutely.summary;

//   error
//     ? console.log("Unable to connect")
//     : response.body.error
//     ? console.log("Unable to find location")
//     : console.log(
//         `Summary: ${summary} It is currently ${temp} degrees out. There is ${precipProbability}% of rain.`
//       );
// });
