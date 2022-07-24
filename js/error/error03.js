// fetch('https://jsonplaceholder.typicode.com/todos/3')
// .then((response) => response.text())
// .then((result) => console.log(result))

async function fetchStr(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
  const result = await response.text()
  console.log(result)
}

fetchStr()