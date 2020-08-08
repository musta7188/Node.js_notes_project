const request = require("request");
const methods = require("./5-forecast.js");
const TOKEN =
  "pk.eyJ1IjoibXVzdGE4OCIsImEiOiJja2J4ZzZ6NzUwcGVzMnNsZ2I4N2Jnemo0In0.wTwjwUNRqkMi7xwY9rxHBA";


const geocode = (address, callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${TOKEN}`;

  request({ url: URL, json: true }, (error, {body}) => {
    debugger
    if (error) {
      callback("Unable to connect to the service");
    } else if (body.features.length === 0) {
      callback("unable to find location, please try another search");
    } else {
      const data = {
        longiTude: body.features[0].center[0],
        latiTude: body.features[0].center[1],
        place: body.features[0].place_name,
      };

      callback(null, data);
    }
  });
};

// geocode("miami", (error, data) => {
//   debugger
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("Data:", data);
//   }
// });

///longiTude -80.1937, latiTude 25.7743

// geocode("New York", (error, {latiTude, longiTude}) => {
//   if (longiTude) {
//     methods.forecast(latiTude, longiTude);
//   } else {
//     console.log("Error:", error);
//   }
// });

module.exports = {
  geocode: geocode
}
