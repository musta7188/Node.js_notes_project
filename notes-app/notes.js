const fs = require("fs");
const chalk = require("chalk");

const getNotes =  () => {
  return "Your notes....";
};

const addNote =  (title, content) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter( (note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      content: content,
    });
    saveNotes(notes);
  } else {
    console.log(`${title} is taken already`);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

/// remove note with the command --remove 
const deleteNote =  (title) => {
  const notes = loadNotes();

  if (checkTitleExists(notes, title)) {
    const notesToKeep = notes.filter((n) => {
      return n.title !== title;
    });
    console.log(chalk.black.bgBlue("note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.black.bgRed("note does not exist"));
  }
};

const checkTitleExists =  (obj, title) => {
  return obj.some((o) => o.title === title) ? true : false;
};

const listNotes = () => {

  const note = loadNotes()
const message = chalk.bgBlue('Here is your notes')


  console.log(message, note)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  deleteNote: deleteNote,
  listNotes: listNotes
};


//git remote add origin git@github.com:musta7188/Node_course_notesProjet.git
//git push -u origin master