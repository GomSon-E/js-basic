class Book {
    // 데이터
    constructor(type, title) {
      this.type = type,
      this.title = title
    }
    // 메서드
    action(){
      document.write(
        `
        <p>${this.type} : ${this.title}</p>
        `
      )
    }
  }

const my = [new Book('graphic', 'photoshop'), new Book('it', 'javascript'), new Book('it', 'html5')]

my[0].action()
my[1].action()
my[2].action()
