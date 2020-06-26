const request = require('request')

const url  = 'http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {



   const data = response.body.current

   console.log(`it is currently ${data.temperature} but feels like ${data.feelslike}`)


})