const request = require("request");
const methods = require("./app");
const TOKEN =
  "pk.eyJ1IjoibXVzdGE4OCIsImEiOiJja2J4ZzZ6NzUwcGVzMnNsZ2I4N2Jnemo0In0.wTwjwUNRqkMi7xwY9rxHBA";

// const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/New York.json?access_token=${TOKEN}&limit=1`;

// const getLocationForecast = (location) =>{

// }

// request({ url: URL, json: true }, (error, response) => {

//   if(error){
//     console.log('enable to connect to IPA')
//   } else if(response.body.features === 0) {
//     console.log('unable to find Location')
//   } else {
//       const placeName = response.body.features[0].place_name;
//   const longiTude = response.body.features[0].center[0];
//   const latiTude = response.body.features[0].center[1];

//   methods.getWeather(latiTude, longiTude)
//   }

// });

const geocode = (address, callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${TOKEN}&limit=1`;

  request({ url: URL, json: true }, (error, {body}) => {
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

geocode("New York", (error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Data:", data);
  }
});

geocode("New York", (error, {latiTude, longiTude}) => {
  if (longiTude) {
    methods.getWeather(latiTude, longiTude);
  } else {
    console.log("Error:", error);
  }
});
