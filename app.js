const hero = document.querySelector(".hero");
const light = hero.querySelector("span");
const emoji = hero.querySelector("h1");

function shine(e) {
  const {
    offsetWidth: width,
    offsetHeight: height,
    offsetLeft: left,
    offsetTop: top,
  } = this;
  let { offsetX: x, offsetY: y } = e;

  const xCenter = (left + width) / 2;
  const yCenter = (top + height) / 2;
  const angle =
    Math.atan2(e.pageX - xCenter, -(e.pageY - yCenter)) * (180 / Math.PI);

  light.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

hero.addEventListener("mousemove", shine);
