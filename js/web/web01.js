// fetch('https://www.google.com') // 조회
// .then((response) => response.text()) // 응답
// .then(result => {console.log(result)}) // 결과

fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.text())
  .then(response => response.json())
  .then(json => console.log(json))