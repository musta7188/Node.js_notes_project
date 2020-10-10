const fs = require("fs");

const getNotes = function () {
  return "saved notes";
};

//load the notes
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) =>{
     return note.title === title
  })

  //changed them

  if(duplicateNotes === 0) {
    notes.push({
    title,
    body,
     });  
  saveNotes(notes);
  } else {
    console.log('Note title already exists')
  }
  

  ///save notes

};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

///it will lead the notes inside the file, if there is not file will create and empty array and returned
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
};
