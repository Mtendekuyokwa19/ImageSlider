const movingImages = (() => {
  const slide = document.querySelector(".slide");

  function previousPictureAlgorithm() {
    const pictures = document.querySelectorAll("img");
    navgationDots.changeColorToprevious();
    const pic = pictures[pictures.length - 1];
    slide.prepend(pic);
  }

  function nextPitureAlgorithm() {
    const pictures = document.querySelectorAll("img");
    const pic = pictures[0];
    pictures[0].remove();
    slide.appendChild(pic);
    navgationDots.changeColorOfbutton();
  }
  const rightbtn = document.querySelector("#right");
  rightbtn.addEventListener("click", nextPitureAlgorithm);

  const leftbtn = document.querySelector("#left");
  leftbtn.addEventListener("click", previousPictureAlgorithm);
  return { nextPitureAlgorithm, previousPictureAlgorithm };
  // window.setInterval(nextPitureAlgorithm,4000)
})();

let navgationDots = (() => {
  let allNavdots = document.querySelectorAll(".navigationButton button");

  let position = { pos: 1, count: 1 };
  function changeColorOfbutton() {
    position.pos > 3 ? (position.pos = 0) : position.pos;
    makebtnWhite();
    allNavdots[position.pos++].style.setProperty("background-color", "tomato");
    position.count++;

    console.log(position.pos);
  }

  function changeColorToprevious() {
    position.pos < 2 ? (position.pos = 5) : position.pos;
    let pos = position.pos;
    makebtnWhite();
    allNavdots[position.pos - 2].style.setProperty(
      "background-color",
      "tomato",
    );

    position.pos = pos - 1;
    position.count - 1;
  }
  function makebtnWhite() {
    allNavdots.forEach((navdots) => {
      navdots.style.setProperty("background-color", "white");
    });
  }

  function skipingTo(index) {
    for (let i = 0; i <= index - position.pos; i++) {
      movingImages.nextPitureAlgorithm();
      console.log(index, position.pos);
    }
  }

  let size = allNavdots.length + 1;
  let counter = 1;
  for (let i = 0; i < 4; i++) {
    allNavdots[i].addEventListener("click", function () {
      skipingTo(i + 1);
    });
  }

  return { changeColorOfbutton, changeColorToprevious };
})();
