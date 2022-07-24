class Book {
  constructor(type, title){
    this.type = type
    this.title = title
  }
  list() {
    document.write(
      `
      <p>${this.title} : ${this.type}</p>
      `
    )
  }
}

const myBook = new Book('개발서', '프론트엔드')
myBook.list()

class Graphic extends Book {
  constructor(type, title, level){
    super(type, title)
    this.level = level
  } 
  action(){
    document.write(
      `
      <p>${this.title} 등급 ${this.level} : ${this.type}</p>
      `
    )
  }
}

const myGraphic = new Graphic('사진편집', '포토샵', 1)
myGraphic.action()