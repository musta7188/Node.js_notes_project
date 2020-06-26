

///create an array from 0 to 1000
const arrayNumber = Array.from(Array(1000).keys()).slice(1)


//// x and y are 3 and 5 that we need to find their multiples 
const multiplies = (x, y ) => {

  ///the array where I store the results if the number multiplied is less then 1000
  const arrayResults = []

 arrayNumber.map( n => {
   
   
  ///it take each number in the array and we multiple that number first for x and then for y
    var r = n * x
    var f = n * y

    //// I check if the results is the results are less then 1000 I push them in the array
    if(r < 1000){
      arrayResults.push(r)
    }if (f < 1000){
      arrayResults.push(f)
    }
  
  
  })

  ////I store the sum of all the numbers inside the array with the numbers that passed the criteria  
  const sum = arrayResults.reduce((a, b) => {
    return a + b
  })


  ///return the sum

  return sum
}


console.log(multiplies(3, 5))




/////////////////////////FIBONACCI 



const arrayNumbers = Array.from(Array(4000000).keys()).slice(1)

const numberArray = []


///take an array with the length of 4,000,000 
const calculateFibonacci = (array) => {

  ///assign current number to the number to be added to the previus one in this case I start by adding 1 to 0   = 1
  let currentNumber = 1
  let previousNumber = 0

  ///until the current number is less then the length of the array i will run this loop
   while(currentNumber < array.length){

  
    ////the result will be the two number of the variable 
     let results = currentNumber + previousNumber

     ////I then assign the previous number to the current and the current to the results 
      previousNumber = currentNumber
     currentNumber = results
    
     ///i check if the result is less then 4,000,000 and if is yes I stored in an array
     if(results < 4000000) {
           numberArray.push(results)
     }


   }


   ////sum all the number in the array and print the results 

   const sum = numberArray.reduce((a, b) => {
    return a + b
  })
  console.log(sum)
  }


calculateFibonacci(arrayNumbers)



 /////////////////////////////////////////// IS A PALINDROMIC ??



 const arrayNumbers = [5, 4, 9];

let newArray = [];

let value = 100;

///takes an array and increase the value of the the numbers inside this array by 1
const sumNumbers = (array) => {
  array.map((n) => {
    let sum = n + 1;
    newArray.push(sum);
  });
};

///this function check if a nu ber is Palindromic
const isPalindromic = (value) => {
  let reversedNumber = value.toString().split("").reverse().join("");
  return reversedNumber == value ? true : false;
};

///this function takes and array of 3 digit and sum the numbers and then check if the sum is a Palindromic
///if it is he change the value of the variable value to the sum and run increase the number in the array to di another round and check id there is a another combination which give a bigger number 
////if is not he keep increase the value of the array until he founds 3 digit that are Palindromic
const checkNumber = (array) => {
  const sum = array.reduce((a, b) => {
    return a + b;
  });

if (isPalindromic(sum)) {
  if (sum > value) {

    value = sum;
    console.log(value)
    sumNumbers(array);
    checkNumber(newArray);
  } else {
    console.log(`${value} is the largest number`);
  }
} else {
  sumNumbers(array);
  checkNumber(newArray);
}
};

checkNumber(arrayNumbers);




/////////////////////////////////////// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?





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

////////////////////////////////////// /prints the 10,001st prime number




const arrayNumbers = Array.from(Array(110000).keys()).slice(2)

const arrayStorePrimeNumber = []

///check if the number passed is prime by using a variable of 2 and if is true it keep incrementing the number until it false and then store the number in the array 
//// 
  const isPrimeNumber = num => {
    for(let i = 2; i < num; i++)

  if( num % i == 0 ) {return null }
{  return arrayStorePrimeNumber.push(num) }
  }

////take an array of numbers and map through the numbers by passing them inside the isPrimeNUmber function that check if that number is prime or note 

const testArrayNumber = (array) =>{
  array.map(number => isPrimeNumber(number) )

  ///prints the 10,001st prime number
  console.log(arrayStorePrimeNumber)
}


testArrayNumber(arrayNumbers)

//104759