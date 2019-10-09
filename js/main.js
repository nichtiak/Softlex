'use strict';
document.addEventListener('DOMContentLoaded', () => {

let next = document.querySelector('.circle-arrows_right'),
    prev = document.querySelector('.circle-arrows_left'),
    rotate0 = document.querySelector('.rotate0'),
    shadow = document.querySelector('.shadow0'),
    angle = 0;
function stepNext() {
  angle = angle + 36;
  rotate0.className = "circle-rotate rotate" + angle;
  shadow.className = "circle-arrows shadow" + angle;
};
function stepPrev() {
  angle = angle - 36;
  rotate0.className = "circle-rotate rotate" + angle;
  shadow.className = "circle-arrows shadow" + angle;
};

next.addEventListener('click', stepNext);
next.addEventListener('click', function () {
  if (angle > 180) {
  angle = -36;
  angle = angle + 36;
  rotate0.className = "circle-rotate rotate" + angle;
  shadow.className = "circle-arrows shadow" + angle;
};
});
prev.addEventListener('click', stepPrev);
prev.addEventListener('click', function () {
  if (angle < 0) {
  angle = 216;
  angle = angle - 36;
  rotate0.className = "circle-rotate rotate" + angle;
  shadow.className = "circle-arrows shadow" + angle;
};
});

});