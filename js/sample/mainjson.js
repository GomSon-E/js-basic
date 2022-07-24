import data from './data01.json'

console.log(data)
console.log(data.array)
console.log(data.null)
console.log(data.object.a)

// json 객체: 전체객체 -> stringify(), parse()
const color = {
  title:'red',
  sample:'apple',
  no:100
}

// stringify: 일반객체 -> json파일
const str = JSON.stringify(color)
console.log(str)

// parse: json파일 -> 일반객체
const obj = JSON.parse(str)
console.log(obj)