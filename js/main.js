'use strict';
document.addEventListener('DOMContentLoaded', () => {

  // Бегунок по окружности

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

  // Раздел "Подход" анимация окружности

  // let circles = document.querySelectorAll('#circles'),
  //   ctx1 = circles[0].getContext('2d'),
  //   ctx2 = circles[1].getContext('2d'),
  //   ctx3 = circles[2].getContext('2d'),
  //   ctx4 = circles[3].getContext('2d'),
  //   endpoint = 270,
  //   pi = Math.PI,
  //   i;

  // for (i = 0; i < circles.length; i++) {
  //   //синие кружки
  //   circles[i].getContext('2d').beginPath();
  //   circles[i].getContext('2d').arc(30, 30, 5, 0, pi * 2);
  //   circles[i].getContext('2d').fillStyle = '#005EF3';
  //   circles[i].getContext('2d').fill();

  //   //серые rруги
  //   circles[i].getContext('2d').beginPath();
  //   circles[i].getContext('2d').lineWidth = 5;
  //   circles[i].getContext('2d').strokeStyle = '#F3F3F3';
  //   circles[i].getContext('2d').arc(30, 30, 27.5, 0, pi * 2);
  //   circles[i].getContext('2d').stroke();
  // }

  // //Анимация красных окружностей
  // function draw361() {

  //     ctx1.beginPath();
  //     ctx1.arc(30, 30, 27.5, pi / 180 * 270, pi / 180 * endpoint);
  //     ctx1.lineWidth = 4;
  //     ctx1.strokeStyle = '#F64D40';
  //     ctx1.stroke();

  //     endpoint += 1;
  //     if (endpoint == 361) {
  //       endpoint = 270;
  //     }

  //   requestAnimationFrame(draw361);
  // }
  // draw361();

  // function draw451() {

  //     ctx2.beginPath();
  //     ctx2.arc(30, 30, 27.5, pi / 180 * 270, pi / 180 * endpoint);

  //     ctx2.lineWidth = 4;
  //     ctx2.strokeStyle = '#F64D40';
  //     ctx2.stroke();

  //     endpoint += 1;
  //     if (endpoint == 451) {
  //       endpoint = 270;
  //     }


  //   requestAnimationFrame(draw451);
  // }

  // draw451();


  anime({
    targets: 'path',
    // strokeDasharray: 10% 20%
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500
  });




});