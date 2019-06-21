const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWlzYWNvcm4iLCJhIjoiY2p1NnNkcmRxMDBvZjN5cGg5OTh4d3VuNiJ9.0iB94svSNgR9w3mhREn8rA&limit=1";
  request({ url, json: true }, (e, { body }) => {
    const a = body.features;
    e
      ? callback("Unable to connect to location services", undefined)
      : a.length === 0
      ? callback("Unable to find location. Please try again!", undefined)
      : callback(undefined, {
          latitude: a[0].center[1],
          longitude: a[0].center[0],
          location: a[0].place_name
        });
  });
};

module.exports = geoCode;
