// async function 이름() {}

// const 이름 = async function() {}

// const 이름 = async () => {}

// const func = async () => {
//   try{}
//   catch(){}
// }

async function fetchStr(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    const result = await response.text()
    console.log(result)
  }
  catch(error) {console.log('error')}  
}