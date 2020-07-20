"use strict";

// 210. запуск таймера.

/* function timer() {
    console.log('!');
}


setInterval(timer, 6000);

function timer() {
    console.log('!');
}

setInterval(function () {
    console.log('Привет обед');
}, 3000);


let i = 0;
setInterval(() => console.log(++i), 1000);


let i = 100;
setInterval(() => console.log(--i), 1000);

// 212.Остановка таймера

let i = 0;

let timerId = setInterval(function () {
    console.log(++i);

    if (i >= 10) {
        clearInterval(timerId);
    }
}, 1000);



let i = 10;

let timerId = setInterval(function () {
    console.log(--i);

    if (i == 0) {
        clearInterval(timerId);
        console.log("the end");
    }
}, 1000);


// 213.Кнопка для запуска таймера

let start = document.querySelector('#start');

start.addEventListener('click', function () {
    let i = 100;

    setInterval(function () {
        console.log(--i);
    }, 1000);
});



let start = document.querySelector('#start');

start.addEventListener('click', function func() {
    let i = 0;

    setInterval(function () {
        console.log(++i);
    }, 1000);

    this.removeEventListener('click', func); // отвязываем обработчик
});


// 214.Кнопки для запуска и остановки таймера

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let timerId; // сделаем переменную глобальной

start.addEventListener("click", function () {
  let i = 0;

  timerId = setInterval(function () {
    console.log("!");
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timerId);
});

// 215.Практика на таймеры и работу с DOM в JavaScript


let elem = document.querySelector("#elem");

setInterval(function () {
  elem.value = Number(elem.value) + 1;
  //   elem.value = elem.value + 1;
}, 1000);

let num = 10;

let timeID = setInterval(() => {
  if (num <= 0) {
    clearInterval(timeID);
  } else {
    console.log((num -= 1));
  }
}, 1000);

// 215.Таймеры и потеря контекста в JavaScript

let elem = document.querySelector("#elem");

elem.addEventListener("click", function () {
  let self = this;
  setInterval(function () {
    console.log(self.value);
  }, 1000);
});


let elem = document.querySelector("#elem");

// elem.addEventListener("click", function () {
//   let self = this;

//   setInterval(() => {
//     self.value++;
//   }, 1000);
// });

elem.addEventListener("click", function () {
  setInterval(() => this.value++, 1000);
});
// 217.Передача контекста параметром функции setInterval

setInterval(func, 1000, "a", "b");

function func(str1, str2) {
  document.write(str1, str2); // каждую секунду будет вводить 'a','b'
}
*/

let elem = document.querySelector("#elem");

elem.addEventListener("click", function () {
  setInterval(func, 1000, this); // параметром передаем this

  function func(self) {
    // в self попадает this
    console.log(self.value);
  }
});

// 218.Практика на таймеры и работу с DOM в JavaScript
