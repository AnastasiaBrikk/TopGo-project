import * as jsFunctions from "./modules/functions.js";

jsFunctions.isWebp();

//slider
$(document).ready(function () {
  $(".responsive-slider").slick({
    infinite: true,
    speed: 500,
    easing: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    touchThreshold: 10,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// Кнопка "наверх"
const btnUp = document.querySelector(".btn-up");

// при прокрутке содержимого страницы
window.addEventListener("scroll", () => {
  // определяем величину прокрутки
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
  scrollY > 2000
    ? btnUp.classList.remove("btn-up_hide")
    : btnUp.classList.add("btn-up_hide");
});

// при нажатии на кнопку .btn-up
btnUp.onclick = () => {
  // переместим в начало страницы
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//заказ звонка форма
const button = document.querySelector(".top__tel_icon");
const close = document.querySelector(".top__tel_form-close");
const form = document.querySelector(".header__form");

// Устанавливаем начальное состояние блока формы
form.style.display = 'none';
close.style.display = 'none';
// button.style.display = "block";

// Добавляем обработчик события на кнопку
button.addEventListener("click", function () {
  // if (close.style.display === "none") {
  //   showEl(close);
  //   button.style.display = "none";
  // } else {
  //   close.style.display = "none";
  //   showEl(button);
  // }

  if (form.style.display === "none") {
    
    form.style.display = "block";
    close.style.display = "block";
    button.style.display = "none";
    close.style.opacity = 0;
    form.style.opacity = 0;
    // Плавное появление блока
    fadeIn(form);
    fadeIn(close);
  } else {
      fadeOut(form);
      fadeOut(close);
    // Плавное исчезновение блока
    
  }
});

close.addEventListener("click", function () {
  button.style.display = "block";
  close.style.display = "none";
  fadeOut(form);
});

// function showEl(el) {
//   el.style.display = "block";
// }

// Функция для плавного появления блока
function fadeIn(element) {
  let opacity = 0;
  const timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 40);
}

// Функция для плавного исчезновения блока
function fadeOut(element) {
  let opacity = 1;
  const timer = setInterval(function () {
    if (opacity <= 0) {
      element.style.display = "none";
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 30);
}
