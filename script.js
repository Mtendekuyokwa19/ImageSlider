// eslint-disable-next-line no-unused-vars
/* eslint-disable */
const movingImages = (() => {
  const slide = document.querySelector('.slide')

  function previousPictureAlgorithm () {
    const pictures = document.querySelectorAll('img')
    // navgationDots.changeColorToprevious()
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
    // position.pos<1?position.pos=4:position.pos;
    makebtnWhite()
    let pos=position.pos-1
    allNavdots[pos-1].style.setProperty("background-color","tomato")
    
    
  }
  function makebtnWhite() {
    allNavdots.forEach(navdots=>{

      navdots.style.setProperty("background-color","white")
    })
    
  }

  function skipingTo(index) {

    if (index>position.pos) {
      for (let i = 0; i < index-position.pos; i++) {
        
        movingImages.nextPitureAlgorithm()
      }
      
    }
    else if(index<position.pos){

      for (let i = 0; i< position.pos-index; i++) {
  movingImages.previousPictureAlgorithm()
       
      }
    }
  }

  let counter=2;
allNavdots.forEach(navdot=>{

  navdot.addEventListener('click',function () {
  
    skipingTo(counter)
    counter++
    
  })

})

return {changeColorOfbutton,changeColorToprevious}
})()