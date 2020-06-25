const request = require('request')

const url  = 'http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {

const data =  JSON.parse(response.body)

console.log(data.current)


})