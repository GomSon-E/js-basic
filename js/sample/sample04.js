// 전개연산자
const fruit = ['apple', 'orange','banana']
console.log(fruit) // 배열 자체
console.log(...fruit) // 전개연산자 -> 각각

// // 1
// function toOb(a, b, c) {
//   return {
//     a:a,
//     b:b,
//     c:c
//   }
// }

// 2.
function toOb(a, b, c) {
  return {a, b, c }
}

console.log(toOb(fruit)) // a에 모두 할당됨
console.log(toOb(fruit[0], fruit[1], fruit[2]))
console.log(toOb(...fruit))
