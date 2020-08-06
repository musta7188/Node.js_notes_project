// //

const users_list = ["mike", "tom", "alex", "vanessa"];

const getUser = (index, callback) => {
  const user = users_list[index];
  callback(user);
};

getUser(2, (userOne) => {
  console.log(userOne);
});

getUser(3, (userTwo) => {
  console.log(userTwo);
});

const sum = 4 + 4;
console.log(sum);











// ///blocking I/O example

// const userOne = getUser(0)
// console.log(userOne)

// const userTwo = getUser(1)
// console.log(userTwo)

// const sum = 4 + 4
// console.log(sum)

//let firstName = "Armeela";

// let LastName = "Ormeni";

// const sayHello = (name1, name2) => {
//   console.log(`Hello my name is ${name1} and my family name is ${name2}`);
// };

// sayHello(firstName, LastName);

// const sumUp = (number1, number2) => {
//   console.log(number1 + number2);
// };

// // sumUp(4,8)

// const multiply = (number1, number2) => {
//   console.log(number1 * number2);
// };

// // multiply(6,6)

// const minus = (number1, number2) => {
//   console.log(number1 - number2);
// };

// //minus(20,12)

// const divide = (number1, number2) => {
//   console.log(number1 / number2);
// };
// //divide(10,2)

// const calculator = (action, number1, number2) => {
//   if (action === "minus") {
//     minus(number1, number2);
//   }  if (action === "multiply") {
//     multiply(number1, number2);
//   } if (action === "sumUP") {
//     sumUp(number1, number2);
//   }  if (action === "divide") {
//     divide(number1, number2);
//   }
// };

// calculator("divide", 20, 2);
