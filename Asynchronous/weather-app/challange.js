const request = require("request");
const methods = require('./app')
const TOKEN ="pk.eyJ1IjoibXVzdGE4OCIsImEiOiJja2J4ZzZ6NzUwcGVzMnNsZ2I4N2Jnemo0In0.wTwjwUNRqkMi7xwY9rxHBA";

const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${TOKEN}&limit=1`;


request({ url: URL, json: true }, (error, response) => {
  const placeName = response.body.features[0].place_name;
  const longiTude = response.body.features[0].center[0];
  const latiTude = response.body.features[0].center[1];

  methods.getWeather(latiTude, longiTude)

});
