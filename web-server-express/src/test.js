// const arr = [
 
// [6, 6, 7, -10, 9, -3, 8, 9, -1],
// [9, 7, -10, 6, 4, 1, 6, 1, 1],
// [-1, -2, 4, -6, 1, -4, -6, 3, 9],
// [-8, 7, 6, -1, -6, -6, 6, -7, 2],
// [-10, -4, 9, 1, -7, 8, -5, 3, -5],
// [-8, -3, -4, 2, -3, 7, -5, 1, -5],
// [-2, -7, -4, 8, 3, -1, 8, 2, 3],
// [-3, 4, 6, -7, -7, -8, -3, 9, -6],
// [-2, 0, 5, 4, 4, 4, -3, 3, 0],
// ];

// const sumDiagonal = (array) => {
//   const arrayToSum = [];
//   const secondArrayToSum = [];

//   for (let i = 0; i < array[0].length; ) {
//     for (let j = 0; j < array.length; ) {
//       arrayToSum.push(array[j][i]);

//       i++;
//       j++;
//     }
//   }

//   for (let i = array[0].length - 1; i > 0; ) {
//     for (let j = 0; j < array.length; ) {
//       secondArrayToSum.push(array[j][i]);

//       i--;
//       j++;
//     }
//   }

//   let secondSum = secondArrayToSum.reduce((a, b) => a + b);
//   let firstSum = arrayToSum.reduce((a, b) => a + b);

//  return secondSum < firstSum ? firstSum - secondSum : secondSum - firstSum 
 
// };

// console.log(sumDiagonal(arr));





// // [6, 6, 7, -10, 9, -3, 8, 9, -1]
// // [9, 7, -10, 6, 4, 1, 6, 1, 1]
// // [-1, -2, 4, -6, 1, -4, -6, 3, 9]
// // [-8, 7, 6, -1, -6, -6, 6, -7, 2]
// // [-10, -4, 9, 1, -7, 8, -5, 3, -5]
// // [-8, -3, -4, 2, -3, 7, -5, 1, -5]
// // [-2, -7, -4, 8, 3, -1, 8, 2, 3]
// // [-3, 4, 6, -7, -7, -8, -3, 9, -6]
// // [-2, 0, 5, 4, 4, 4, -3, 3, 0]