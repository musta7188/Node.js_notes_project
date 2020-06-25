const name = 'Max'
const lastName = 'Smith'

const greet = "Hello my name is"

const greetPeople = (name, lastName, greeting) => {
  console.log(` ${greeting} ${name} ${lastName} `)
}





const human = {
  name: 'Max',
  lastName: 'Smith',
  greet: 'Hello my name is',
  greetPeople(){
      return console.log(`${this.greet} ${this.name} ${this.lastName}`)
  }
}

human.greetPeople()