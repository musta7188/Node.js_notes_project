

const request = require('request')


const forecast = (longitude, latitude, callbackFunction) => {

  const URL = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latitude},${longitude}&units=m`


  request({ url: URL, json: true }, (error, response) => {

 
    if (error) {
      callbackFunction('API not connected ', null)
    } else if (response.body.error) {
      callbackFunction(response.body.error, null)
    } else {
      callbackFunction(null, response.body)
    }

  })
}




forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error:', error)
  console.log('Data', data)
})