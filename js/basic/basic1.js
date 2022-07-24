// 생성자 함수

function Book(type, title) {
  this.type = type
  this.title = title
  // this.action = function(){}
} 

Book.prototype.action = function(){
  console.log(`${this.type} : ${this.title}`)
}

// // 인스턴스
// const photoshop = new Book('graphic', 'photo')
// const script = new Book('IT', 'javascript')
// const html = new Book('IT', 'html5')

// photoshop.action()
// script.action()
// html.action()

// 배열 인스턴스
const it = [new Book('graphic', 'photo'), new Book('IT', 'javascript'), new Book('IT', 'html5')]

//  for 문 3가지
let num = it.length
console.log(num)

// 1. for basic
for (let i = 0; i < num; i++) {
  it[i].action()
}

// 2. for in
for (let i in it) {
  it[i].action()
}

// 3. for of
for (let i of it) {
  i.action()
}