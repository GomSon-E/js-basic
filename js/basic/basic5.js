const Rect = class{
  constructor(width, height){
    this.width = width
    this.height = height
  }
  call() {
    return this.width * this.height
  }
}

const my = new Rect(100, 200)
console.log(my.call())

class Num extends Rect {
  constructor(width, height, str) {
    super(width, height)
    this.str = str
  }
  action(){
    return this.width * this.height * this.str
  }
}

const myNum = new Num(100, 100, 5)
console.log(myNum.action())