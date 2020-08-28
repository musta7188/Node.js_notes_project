const validator = require('validator')
const printName = require('./app2')


const name  = "Mustafa"

printName(name)

console.log(validator.isEmail("mustafa@test.com"))