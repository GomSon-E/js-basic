const color = ['red', 'green', 'yellow']
const [a, b, c, d = 1] = color
console.log(a, b, c, d)

// 배열: 제외하고 할당 -> 공간문자 사용
const word = ['moon', 'flower', 'cat', 'dog']
const [, no01, ,no02] = word
console.log(no01, no02)