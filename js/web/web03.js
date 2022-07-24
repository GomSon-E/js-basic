fetch('https://jsonplaceholder.typicode.com/photos')
.then((response) => response.text())
.then((result) => {
  const javascript = JSON.parse(result)
  const filt = javascript.filter((item)=>item.albumId === 1)
  for (let i of filt) {
    document.write(
      `
      <figure>
        <img src="${i.thumbnailUrl}" alt="${i.title}">
        <figcaption>${i.title}</figcaption>
      </figure>
      `
    )
  }
})