const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, {
    text: "Clean yard",
    completed: false
  }, {
    text: "Film Course",
    completed: false
  }],
  getTasksToDo(){
  return this.tasks.filter(task => task.completed == false).map(task => task.text)
  }
}

console.log(tasks.getTasksToDo())