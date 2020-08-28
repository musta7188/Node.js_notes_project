
const chalk = require('chalk')

// console.log(chalk.blue.bgRed.bold('hello world'))


const input = process.argv[2]

console.log(process.argv)








if(input === 'add' ) {
  console.log("Note added")
} if (input === 'remove' ) {
  console.log("note removed")
} else {
  console.log("command not recognised")
}





// const arrayNumbers = Array.from(Array(21).keys()).slice(1)

// ////take a number and create two different array false and true one and set a state of true 
// ////until the state is true the while loop will keep running 
// const checkArray = (number) => {
//   let falseArray = []
//   let trueArray = []
//   let state = true
//   while(state) {

//     ////take each number in the array and se the remainder compared to the starting number we have input 
//     ////if the remainder is 0 push it tot he tru otherwise push it to the false 
//     arrayNumbers.map(n => {

//       if(number % n == 0) {
//           trueArray.push(n)
//       } else {

//         falseArray.push(n)
//       }
  
//   })

// //   ///if the false array have value means the number was not the one we looking for and will increase that number and keep running the loop
// //   ////if the number match all the criteria  will print the number and set the state to false to stop the loop
// // if (falseArray.length > 0){
// //     console.log(`${number} is not the right number`)
// //    number += 1
// //    falseArray = []
// //    trueArray = []
// //   } else {
// //     return  console.log(` ${number} is the evenly divisible by all of the numbers from 1 to 20`), state = false
// //   }
// //   }
  
// // }

// // checkArray(232792540)



// if (currentSelected === value) {
//   if (value === "News"){
//     <Link style={{ textDecoration: "none" }} to={`/${value}/^FTSE`}>
//     {" "}
//     <ActiveButton>
//       <strong>{value}</strong>
//     </ActiveButton>
//   </Link>
//   }
//   if (value === "Recommendation" ) {
//     <Link style={{ textDecoration: "none" }} to={""}>
//   {" "}
//   <ActiveButton>
//     <strong>{value}</strong>
//   </ActiveButton>
// </Link> 
//   } else {
//     <Link style={{ textDecoration: "none" }} to={`/${value}`}>
//       {" "}
//       <ActiveButton>
//         <strong>{value}</strong>
//       </ActiveButton>
//     </Link>
//   }
// } if (value === "News"){
// <Link
//     to={`/${value}/^FTSE`}
//     style={{ textDecoration: "none" }}
//     onClick={() => setCurrentSelected(value)}
//   >
//     {" "}
//     <ControlButtonElem onClick={handleClose} inputColor={inputColor}>
//       {value}
//     </ControlButtonElem>
//   </Link>
// } if ( value === "Recommendation") {
//   <Link style={{ textDecoration: "none" }} to={""}>
// {" "}
// <ActiveButton>
//   <strong>{value}</strong>
// </ActiveButton>
// </Link> 

// } else {
//   <Link
//     to={`/${value}/`}
//     style={{ textDecoration: "none" }}
//     onClick={() => setCurrentSelected(value)}
//   >
//     {" "}
//     <ControlButtonElem onClick={handleClose} inputColor={inputColor}>
//       {value}
//     </ControlButtonElem>
//   </Link>
// }











// return currentSelected === value ? (
//   value === "News" ? (
//     <Link style={{ textDecoration: "none" }} to={`/${value}/^FTSE`}>
//       {" "}
//       <ActiveButton>
//         <strong>{value}</strong>
//       </ActiveButton>
//     </Link>
//   ) : value === "Recommendation" ? <Link style={{ textDecoration: "none" }} to={""}>
//   {" "}
//   <ActiveButton>
//     <strong>{value}</strong>
//   </ActiveButton>
// </Link> 
  
//   : (
//     <Link style={{ textDecoration: "none" }} to={`/${value}`}>
//       {" "}
//       <ActiveButton>
//         <strong>{value}</strong>
//       </ActiveButton>
//     </Link>
//   )
// ) : ////it check also if the value is equal to new bec news need two value to link the page to the button
// value === "News" ? (
//   <Link
//     to={`/${value}/^FTSE`}
//     style={{ textDecoration: "none" }}
//     onClick={() => setCurrentSelected(value)}
//   >
//     {" "}
//     <ControlButtonElem onClick={handleClose} inputColor={inputColor}>
//       {value}
//     </ControlButtonElem>
//   </Link>
// ) :  value === "Recommendation" ? <Link style={{ textDecoration: "none" }} to={""}>
// {" "}
// <ActiveButton>
//   <strong>{value}</strong>
// </ActiveButton>
// </Link> 
// : (
//   ////if the current value is not equal to the value passed the style will be none and link activate for the right page
//   <Link
//     to={`/${value}/`}
//     style={{ textDecoration: "none" }}
//     onClick={() => setCurrentSelected(value)}
//   >
//     {" "}
//     <ControlButtonElem onClick={handleClose} inputColor={inputColor}>
//       {value}
//     </ControlButtonElem>
//   </Link>
// );
// }