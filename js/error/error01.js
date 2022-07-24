fetch('https://jsonplaceholder.typicode1.com/todos/3')
.then((response) => response.text()/* , (error) => console.log('error입니다') */)
.then(
  (result) => {
    console.log(result)
    console.log('welcome')
    throw new Error('test') // 새로운 에러 만들기
  })
.catch((error) => console.log(error)) 