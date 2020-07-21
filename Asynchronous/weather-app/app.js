const request = require("request");

const getWeather = (latiTude, longitude) => {
  const url = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latiTude},${longitude}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    debugger;
    if (error) {
      console.log("unable to connect IPA");
      debugger;
    } else if (response.body.error) {
      console.log("location not found");
      debugger;
    } else {
      const data = response.body.current;
      const place = response.body.location.name;
      console.log(`it is currently ${data.temperature} but feels like ${data.feelslike} in ${place}.`);
      debugger;
    }
  });
};

module.exports = {
  getWeather: getWeather,
};
