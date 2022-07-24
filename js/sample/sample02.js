const {a1, a2, a3} = {
  a1: 10,
  a2: 20,
  a3: 30
}

console.log(a1)

// key의 이름 바꾸기

// 1. = 사용  
const book = {
  type: 'it',
  title: 'html',
  price: '20,000'// ,
  // level:'main' // 여기가 우세
}

const {type, title, price, level = 0} = book
console.log(type)
console.log(level) 

const welcome = type
console.log(type)
console.log(welcome)

// 2. : 사용
const graphic = {
  some : 'paint',
  bookname : "paiter"
}
const {some : subtitle, bookname} = graphic
// console.log(some) // 에러
console.log(subtitle)

