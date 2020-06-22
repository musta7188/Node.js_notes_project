
const validator = require('validator')
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require('./notes')



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
  command: "list",
  describe: "list an action",
  handler() {
    console.log(`you have entered the following stat`)
  }
})

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler() {
      notes.listNotes()

  }
})


///create a remove command 

yargs.parse()

