

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



///build an array from 1 to 100
const array = Array.from(Array(100).keys())

const sumArray = []

const finalValue = []

const sumArrayNumbers = (array) => {

///take each number in the array and sum in to itself + 1 and push it to the sumArray
  array.map(n => {
  var sum = n + (n + 1)
sumArray.push(sum)

  })

///take ogg the last number of this array bc we do not want to get the last value of a number which does not sum with another number
const allFibonacciValue  = sumArray.slice(0, -1)

///summ all the number in the array and return the value 
const sum = allFibonacciValue.reduce((a, b)=> {
  return a + b
})
 

checkValue(sum, array, allFibonacciValue)
}


///this function takes the sum of the numbers the array and the numbers that formed this array
///if the value is more then 4,000,000 the final results of the sum get stored in the finalValue variable 
////if is still not over that value it will increment the original array taking the last number of the array and adding 1 until it gets to the value
const checkValue  = (value, array, pairNumbers) =>{
 if ( value > 4000000) {
   finalValue.push(value)
  } else {
    array.push(array[array.length -1]+ 1) 
    sumArrayNumbers(array)
    console.log(array)
  }

  console.log(pairNumbers)
  console.log(finalValue)
}


 sumArrayNumbers(array)



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








///this function takes a number and compare that number with all the number inside the array arrayNumbers checking if the number ca be divided all the numbers and rendere 0
////in case does not he will call the same function again and pass that number and adding 1 until he find the right number that match and print it out
////in case it does get to the number it prints that the number found is the right one 
///i created two array which one store the number that are divisible and one which store the number that are not, if the length of the falsy one is more than 0 means that the number passed is not the right one and
////it will keep incrementing that number until it found the right match
////answer is 232792560



const arrayNumbers = Array.from(Array(21).keys()).slice(1)

const checkArray = (number) => {
  let falseArray = []
  let trueArray = []
  let state = true
  while(state) {

    arrayNumbers.map(n => {

      if(number % n == 0) {
          trueArray.push(n)
      } else {

        falseArray.push(n)
      }
  
  })

if (falseArray.length > 0){
    console.log(`${number} is not the right number`)
   number += 10000
   falseArray = []
   trueArray = []
  } else {
    return  console.log(` ${number} is the evenly divisible by all of the numbers from 1 to 20`)
    state = false
  }
  }
  
}

checkArray(1)

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