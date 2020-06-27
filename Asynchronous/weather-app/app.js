const request = require('request')


const getWeather = (latiTude, longitude) => {
   const url = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=${latiTude},${longitude}&units=m`;
 
   request({ url: url, json: true }, (error, response) => {
     const data = response.body.current;
     const place =  response.body.location.name
     console.log(`it is currently ${data.temperature} but feels like ${data.feelslike} in ${place}. 
     There is a $`);
   });
 };
 
 
 




module.exports = {
   getWeather: getWeather
 };