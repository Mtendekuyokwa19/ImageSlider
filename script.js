// eslint-disable-next-line no-unused-vars
/* eslint-disable */
const movingImages = (() => {
  const slide = document.querySelector('.slide')

  function previousPictureAlgorithm () {
    const pictures = document.querySelectorAll('img')
    navgationDots.changeColorToprevious()
    const pic = pictures[pictures.length - 1]
    slide.prepend(pic)
   
  }

  function nextPitureAlgorithm () {
    const pictures = document.querySelectorAll('img')
    const pic = pictures[0]
    pictures[0].remove()
    slide.appendChild(pic)
    navgationDots.changeColorOfbutton();
    
  }
  const rightbtn = document.querySelector('#right')
  rightbtn.addEventListener('click', nextPitureAlgorithm)

  const leftbtn = document.querySelector('#left')
  leftbtn.addEventListener('click', previousPictureAlgorithm)
return {nextPitureAlgorithm,previousPictureAlgorithm}
  // window.setInterval(nextPitureAlgorithm,4000)
})()

let navgationDots=(()=>{

  let allNavdots=document.querySelectorAll('.navigationButton button')

  let position={pos:1};
  function changeColorOfbutton() {
    position.pos>3?position.pos=0:position.pos;
    makebtnWhite()
    allNavdots[position.pos++].style.setProperty("background-color","tomato")
    
   
    
  }

  function changeColorToprevious() {
    position.pos<2?position.pos=5:position.pos;
    let pos=position.pos;
    makebtnWhite()
    allNavdots[position.pos-2].style.setProperty("background-color","tomato")
  
    position.pos=pos-1;
    
    
  }
  function makebtnWhite() {
    allNavdots.forEach(navdots=>{

      navdots.style.setProperty("background-color","white")
    })
    
  }

  function skipingTo(index) {

    
      for (let i = 0; i < index; i++) {
        
        movingImages.nextPitureAlgorithm()
      }
      
   
       
   
    
  }

  let counter=1;
allNavdots.forEach(navdot=>{

  navdot.addEventListener('click',function () {
    
    skipingTo(counter)
    counter++
    
  })

})

return {changeColorOfbutton,changeColorToprevious}
})()