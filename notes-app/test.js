

const arrayNumbers = Array.from(Array(21).keys()).slice(1)

////take a number and create two different array false and true one and set a state of true 
////until the state is true the while loop will keep running 
const checkArray = (number) => {
  let falseArray = []
  let trueArray = []
  let state = true
  while(state) {

    ////take each number in the array and se the remainder compared to the starting number we have input 
    ////if the remainder is 0 push it tot he tru otherwise push it to the false 
    arrayNumbers.map(n => {

      if(number % n == 0) {
          trueArray.push(n)
      } else {

        falseArray.push(n)
      }
  
  })

  ///if the false array have value means the number was not the one we looking for and will increase that number and keep running the loop
  ////if the number match all the criteria  will print the number and set the state to false to stop the loop
if (falseArray.length > 0){
    console.log(`${number} is not the right number`)
   number += 1
   falseArray = []
   trueArray = []
  } else {
    return  console.log(` ${number} is the evenly divisible by all of the numbers from 1 to 20`), state = false
  }
  }
  
}

checkArray(232792540)