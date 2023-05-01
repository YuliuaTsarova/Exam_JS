'use strict'

const Sliders = document.querySelector('.sliders');
const slider = document.querySelector('.wrapper');

// длинна картинок
let sliderWidth = (slider.offsetWidth) / 5
console.log(sliderWidth)

let removal = 0; // смещение от левого края

document.querySelector('.button__next').addEventListener('click', function () {
    removal += sliderWidth;

    if (removal > sliderWidth*10) {
        removal = 0;
    }
    Sliders.style.left = -removal + 'px';
    
});

document.querySelector('.button__prev').addEventListener('click', function () {
    removal -= sliderWidth;

    if (removal < 0) {
        removal = sliderWidth*10;
    }
    Sliders.style.left = -removal + 'px';
  
});

// функция для увеличения
function open_photo(photo) {
    document.getElementById("big-photo").innerHTML =
      ("<img onclick='close_photo()' style='position: absolute; left: 25%;  bottom: 25%; ' src='" + photo + "'>")
  }
  
  function close_photo() {
    document.getElementById("big-photo").innerHTML = ""
  }




