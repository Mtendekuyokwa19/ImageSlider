/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
const movingImages = (() => {
  const slide = document.querySelector('.slide');
  const position = { pos: 0 };
  function previousPictureAlgorithm () {
    const pictures = document.querySelectorAll('img');
    position.pos--;
    position.pos === -1 ? (position.pos = 3) : position.pos;

    pictures[position.pos].scrollIntoView();
    navgationDots.changeColorOfbutton();
  }

  function nextPitureAlgorithm () {
    const pictures = document.querySelectorAll('img');
    position.pos++;
    position.pos === 4 ? (position.pos = 0) : position.pos;
    pictures[position.pos].scrollIntoView();
    navgationDots.changeColorOfbutton();
  }
  const rightbtn = document.querySelector('#right');
  rightbtn.addEventListener('click', nextPitureAlgorithm);

  const leftbtn = document.querySelector('#left');
  leftbtn.addEventListener('click', previousPictureAlgorithm);
  window.setInterval(nextPitureAlgorithm, 4000);
  return { nextPitureAlgorithm, previousPictureAlgorithm, slide, position };
})();

const navgationDots = (() => {
  const allNavdots = document.querySelectorAll('.navigationButton button');

  function changeColorOfbutton () {
    makebtnWhite();
    allNavdots[movingImages.position.pos].style.setProperty(
      'background-color',
      'tomato'
    );
  }

  function makebtnWhite () {
    allNavdots.forEach((navdots) => {
      navdots.style.setProperty('background-color', 'white');
    });
  }

  function skipingTo (index) {
    const pictures = document.querySelectorAll('img');
    pictures[index].scrollIntoView();
    movingImages.position.pos = index;
  }

  for (let i = 0; i < 4; i++) {
    allNavdots[i].addEventListener('click', function () {
      skipingTo(i);
      changeColorOfbutton();
    });
  }

  return { changeColorOfbutton };
})();
