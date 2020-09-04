
const validator = require('validator')
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require('./notes')
const { demandOption } = require('yargs')



yargs.version('1.1.0')

///create add command 



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      content: {
        describe: "Body of the content",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv){
      notes.addNote(argv.title, argv.content)
    }
})


yargs.command({
  command: "remove",
  describe: "remove a title",
  builder: {
    title: {
      describe: "title remove",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv){
    notes.deleteNote(argv.title)
  }
})

yargs.command({
  command: "read",
  describe: "Read  the notes",
  builder: {
    title: {
      describe: "input of the title to find",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
   notes.getNotes(argv.title)
  }
})

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
      notes.listNotes()

  }
})


///create a remove command 

yargs.parse()

