const fs = require('fs')

const getNotes = function () {
   return 'saved notes'
}

const addNote = function (title, body) {
  const notes = loadNotes()
}

const loadNotes = function(){
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON  = dataBuffer.toString()
    return JSON.parse(dataJSON)
}

module.exports = {
  getNotes,
  addNote
}