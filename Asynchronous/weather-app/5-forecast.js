

const request = require('request')
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (longitude, latitude, callbackFunction) => {

  const URL = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latitude},${longitude}&units=m`


  request({ url: URL, json: true }, (error, response) => {

    debugger
    if (error) {
      callbackFunction('API not connected ', null)
    } else if (response.body.error) {
      callbackFunction(response.body.error, null)
    } else {
      console.log(null, response.body)
    }

  })
}




forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error:', error)
  console.log('Data', data)
})