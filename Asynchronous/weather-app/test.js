let firstName   = "Armeela"

let LastName = "Ormeni"




const sayHello = (name1, name2) =>{

  console.log(`Hello my name is ${name1} and my family name is ${name2}`)

}


sayHello(firstName, LastName)


const sumUp = (number1,number2) => {
  console.log(number1+number2)

}

// sumUp(4,8)

const multiply =(number1,number2)=>{
  console.log(number1*number2)
}

// multiply(6,6)

const minus =(number1,number2)=>{
  console.log(number1-number2)
}

//minus(20,12)
  




const divide =(number1,number2)=>{
  console.log(number1 / number2)


}
//divide(10,2)









const calculator = (action,number1,number2 ) => {
  if(action=== "-"){
    minus(number1,number2 )
  } else if (action === "*"){
    multiply(number1,number2)
  }else if (action=== "+"){
    sumUp(number1,number2)
  }else if (action=== "/"){
    divide(number1,number2)
  }

} 

calculator("divide",20,2)
