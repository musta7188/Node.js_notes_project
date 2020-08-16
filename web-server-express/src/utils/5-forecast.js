

const request = require('request')


const forecast = (latitude, longitude, callback) => {

  const URL = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latitude},${longitude}&units=m`


  request({ url: URL, json: true }, (error, response) => {

    if (error) {
       callback('API not connected ', null)
    } else if (response.body.error) {
       callback(response.body.error, null)
    } else {
      const data = response.body.current;
      const place = response.body.location.name;
      debugger
      callback(null, `it is currently ${data.temperature} but feels like ${data.feelslike} in ${place}.`);
    }

  })
}


// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error:', error)
//   console.log('Data', data)
// })

module.exports = {
  forecast: forecast,
};

