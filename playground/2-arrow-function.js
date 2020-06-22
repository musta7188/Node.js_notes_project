const event = {
  name: "Birthday party",
  guestList: ["Mustafa", "Armela", "Alex", "Mirko"],
  printGuestList() {

    console.log('In this party I invited ')
    this.guestList.map(guest => console.log(`${guest}`))

  }
}

event.printGuestList()