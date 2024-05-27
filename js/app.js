import * as jsFunctions from "./modules/functions.js";

jsFunctions.isWebp();

//slider news
$(document).ready(function () {
  $(".news-slider").slick({
    infinite: true,
    speed: 500,
    mobileFirst: true,
    easing: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    touchThreshold: 10,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//slider team mobile
$(document).ready(function () {
  $(".team__slider").slick({
    infinite: true,
    speed: 300,
    easing: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//slider partners
$(document).ready(function () {
  $(".partner-partners__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    adaptiveHeight: true,
    mobileFirst: true,
    speed: 1500,
    arrows: false,
    dots: false,
    draggable: true,
    infinite: true,
    useTransform: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });
});

//partner-partners cards slider mobile
// $(document).ready(function () {
//   $(".partner-partners__card-slider").slick({
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // infinite: true,
//     // // adaptiveHeight: true,
//     // // mobileFirst: true,
//     arrows: false,
//     draggable: true,
//     dots: false,
//   });
// });

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
form.style.display = "none";
close.style.display = "none";
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

//burger-menu

const burgerBtn = document.querySelector(".header__burger");

// burgerBtn.style.display = "none";

if (window.innerWidth <= 768) {
  burgerBtn.style.display = "block";
}

const burgerClose = document.querySelector(".header__burger-close");

burgerClose.style.display = "none";

const burgerMenu = document.querySelector(".header__burger-menu");

burgerMenu.style.display = "none";

burgerBtn.addEventListener("click", function () {
  if (burgerMenu.style.display === "none") {
    burgerMenu.style.opacity = 0;
    burgerClose.style.opacity = 0;
    burgerClose.style.display = "block";
    burgerBtn.style.display = "none";
    burgerMenu.style.display = "flex";
    fadeIn(burgerClose);
    fadeIn(burgerMenu);
  } else {
    fadeOut(burgerClose);
    fadeOut(burgerMenu);
  }
});

burgerClose.addEventListener("click", function () {
  burgerClose.style.display = "none";
  burgerBtn.style.opacity = 0;
  burgerBtn.style.display = "block";
  fadeIn(burgerBtn);
  fadeOut(burgerMenu);
});

//скролл к блокам по ссылкам в меню

// const newsBlock = document.getElementById("menu-news");
// const teamBlock = document.getElementById("menu-team");

$("#menu-news").click(function () {
  // ID откуда кливаем
  $("html, body").animate(
    {
      scrollTop: $(".news").offset().top, // класс объекта к которому приезжаем
    },
    1000
  ); // Скорость прокрутки
});

$("#menu-team").click(function () {
  // ID откуда кливаем
  $("html, body").animate(
    {
      scrollTop: $(".team").offset().top, // класс объекта к которому приезжаем
    },
    1000
  ); // Скорость прокрутки
});
