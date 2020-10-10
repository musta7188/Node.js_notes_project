const validator = require("validator");
const yargs = require("yargs");
const {getNotes, addNote} = require('./notes1')

yargs.version('1.1.0')

yargs.command({
  command :"add",
  describe: "add a note",
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    addNote(argv.title, argv.body)
  },
})



yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "read",
  describe: "Read a specific note",
  handler: function(){
    console.log("reading a note ")
  }
})

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function(){
    console.log("listing all notes ")
  }
})

yargs.parse();
