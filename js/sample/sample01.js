const all = {
  type : 'it',
  title : 'javascript',
  pic : 'no01',
  "all-type" : 300 // 특별한 이름은 ""로 감싸주어야 함
}

const num = [1, 2, 3, 4]
console.log(all.type)
console.log(all.pic)
console.log(all['pic'])
// console.log(all.all-type) // 에러
console.log(all['all-type']) // 특별한 이름은 무조건 이 형식
console.log(num[1])