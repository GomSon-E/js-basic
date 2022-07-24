import num from './export01'

// 기본 방식
// import {ram, color} from './export02'
// import {ram, color as main} from './export02'
import * as main from './export02'

// 사용
num('str')
// ram(100)
// console.log(color.name)
main.ram(100)
console.log(main.color.name)
console.log(main.default)

// 형식