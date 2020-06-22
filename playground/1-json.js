
const fs  = require('fs')
const rowData  =  require('../notes-app/playground/1-json.json')




 rowData.name  = "Mustafa"
 rowData.planet = "Earth"
 rowData.age = 32

 console.log(rowData)

const dataJASON = JSON.stringify(rowData)

fs.writeFileSync('1-json.json', dataJASON)

// fs.writeFileSync('1-json.json', booJSON)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const booJSON  = JSON.stringify(book)

// // console.log(booJSON)

// // const parsedData = JSON.parse(booJSON)

// // console.log(parsedData.author)

// fs.writeFileSync('1-json.json', booJSON)

///buffer ==  binary data 

// const dataBuffer = fs.readFileSync('1-json.json')

// ///transform the binary data in JSON  file 
// const dataJASON = dataBuffer.toString()

// ///transform the JSON file in an object with attribute and value 
// const dataObject = JSON.parse(dataJASON)

// console.log(dataObject.author)
