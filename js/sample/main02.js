localStorage.setItem('book', 'photoshop')
const color = {
  title: 'red',
  sample: 'apple',
  no:['no01', 'no02']
}
// localStorage.setItem('color', color) // string형만 허용
const str = JSON.stringify(color)
localStorage.setItem('color', str)