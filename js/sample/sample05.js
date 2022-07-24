const fruit = ['apple', 'orange','banana']

// // 2.
// function toOb(a, b, c) {
//   return {a, b, c }
// }

// // 2-1.
// const toOb = function(a, b, c){
//   return {a, b, c}
// }

// // 3. 화살표 함수
// const toOb = (a, b, c) => {return{a, b, c}}

// 3-1. 화살표 함수
const toOb = (a, b, c) => ({a, b, c})

console.log(toOb(...fruit))

// 앞 쪽만 쓰고 뒤 쪽은 필요 없을 때
const word = ['red', 'blue', 'green', 'orange']
const myWord = (a, b, ...c) => ({a, b, c})
console.log(myWord(...word))