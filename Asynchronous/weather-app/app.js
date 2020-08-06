const request = require("request");


////function takes a latitude and longitude send them to the API
const getWeather = (latiTude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latiTude},${longitude}&units=m`;

  ////takes the url generated with the latitude and longitude given by user
  request({ url: url, json: true }, (error, response) => {

    if (error) {
      callback("unable to connect IPA");

    } else if (response.body.error) {
      callback("location not found");

    } else {
      const data = response.body.current;
      const place = response.body.location.name;
      callback(`it is currently ${data.temperature} but feels like ${data.feelslike} in ${place}.`);

    }
  });
};

module.exports = {
  getWeather: getWeather,
};
