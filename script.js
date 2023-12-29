// eslint-disable-next-line no-unused-vars

const movingImages = (() => {
  const slide = document.querySelector('.slide')

  function previousPictureAlgorithm () {
    const pictures = document.querySelectorAll('img')
    const pic = pictures[pictures.length - 1]
    slide.prepend(pic)
  }

  function nextPitureAlgorithm () {
    const pictures = document.querySelectorAll('img')
    const pic = pictures[0]
    pictures[0].remove()
    slide.appendChild(pic)
  }
  const rightbtn = document.querySelector('#right')
  rightbtn.addEventListener('click', nextPitureAlgorithm)

  const leftbtn = document.querySelector('#left')
  leftbtn.addEventListener('click', previousPictureAlgorithm)
})()
