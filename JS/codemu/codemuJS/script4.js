"use strict";

/*
//160.Работа с атрибутами тегов через свойства элементов
let button = document.querySelector("#button");
let elem = document.querySelector("#elem");

button.addEventListener("click", function () {
  //   alert(elem.id); // выведет 'elem'
  alert((elem.type = "submit")); // выведет 'text'
});

let ya = document.querySelector("#ya");
let button1 = document.querySelector("#button1");
let inp = document.querySelector("#inp");

button1.addEventListener("click", function () {
  inp.innerHTML = "(" + ya.href + ")";
});

let mario = document.querySelector("#mario");
let climg = document.querySelector("#climg");

// climg.addEventListener("click", function () {
//   mario.innerHTML = mario.width = 300;
// });

climg.addEventListener("click", function () {
  mario.width = mario.width * 2;
});

let babo = document.querySelector("#babo");
let pir = document.querySelector("#pir");
let button2 = document.querySelector("#button2");
let batton3 = document.querySelector("#batton3");

button2.addEventListener("click", function () {
  babo.src = "images/babo.jpg";
});

button3.addEventListener("click", function () {
  pir.src = "images/pir.png";
});

//161.Работа с текстовыми полями в JavaScript

// let elem1 = document.querySelector("#elem1");

// alert(elem1.value);

// elem1.value = "new text";

let text = document.querySelector("#text");
let button4 = document.querySelector("#button4");
let abz = document.querySelector('#abz');

button4.addEventListener("click", function () {
  // alert(text.value + "!!!");
  // abz.innerHTML = text.value;
  abz.innerHTML = abz.innerHTML + text.value;

});

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");

let button5 = document.querySelector("#button5");


button5.addEventListener("click", function () {
  // text2.value = text1.value * text1.value;
  let value1 = text1.value;
  let value2 = text2.value;
  text1.value = value2;
  text2.value = value1;

});


let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let paragraph = document.querySelector("#paragraph");

let button6 = document.querySelector("#button6");

button6.addEventListener("click", function () {
  // alert((Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) + Number(num5.value)) / 5);
  let ari = (Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value) + Number(num5.value)) / 5;
  paragraph.innerHTML = ari;
});

//162.Фокус текстовых полей в JavaScript

let elem2 = document.querySelector('#elem2');

elem2.addEventListener('focus', function () {
  // console.log(elem2.value);
  // elem2.value = 1;
  elem2.value = "";
});

elem2.addEventListener('blur', function () {
  // console.log(elem2.value);
  // elem2.value = 2;
  // elem2.value = elem2.value ** 2;

  elem2.value = "введите число";

});

//163.Исключения при работе с атрибутами в JavaScript

// let elem3 = document.querySelector('#elem3');
// alert(elem3.className); // выведет 'aaa bbb'

let elem4 = document.querySelector('#elem4');
let button7 = document.querySelector('#button7');

button7.addEventListener('click', function () {
  elem4.className = 'gapapap';
  console.log(elem4.className);
});


//163.Цепочки методов и свойств в JavaScript


let elem = document.querySelector('#elem');
// alert(elem.value); // выведет 'text'
alert(document.querySelector('#elem').value); // выведет 'text'

document.querySelector('#elem').value = 'www';

console.log(document.querySelector('#image').src);

console.log(document.querySelector('#image').src);
console.log(document.querySelector('#image').width);
console.log(document.querySelector('#image').height);

let image = document.querySelector('#image');
console.log(image.src);
console.log(image.width);
console.log(image.height);

// 163.Объект this в JavaScript

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

// function func() {
//   console.log(this); // содержит ссылку на наш элемент
// }

// function func() {
//   console.log(this.value); // выведем содержимое атрибута
// }

function func() {
  this.value = '!!!';
}

let elem1 = document.querySelector('#elem1');

elem1.addEventListener('focus', function () {
  this.value = 1;
});

elem1.addEventListener('blur', function () {
  this.value = 2;
});


let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);

function func() {
  console.log(this.value);
}

let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');

p1.addEventListener('click', func1);
p2.addEventListener('click', func1);
p3.addEventListener('click', func1);
p4.addEventListener('click', func1);
p5.addEventListener('click', func1);

function func1() {
  this.innerHTML += '!';
}


let elem10 = document.querySelector('#elem10');
let elem11 = document.querySelector('#elem11');
let elem12 = document.querySelector('#elem12');

elem10.addEventListener('blur', func2);
elem11.addEventListener('blur', func2);
elem12.addEventListener('blur', func2);

function func2() {
  this.value = Math.pow(this.value, 2);
}

//166.Получение группы элементов


let elems = document.querySelectorAll(".www");

for (let elem of elems) {
  console.log(elem.innerHTML);
}


let elems = document.querySelectorAll(".qwe");
let button7 = document.querySelector("#button7");

button7.addEventListener("click", function () {
  for (let elem of elems) {
    elem.innerHTML = "text";
  }
});


let elems = document.querySelectorAll(".qwe");
let button7 = document.querySelector("#button7");
let i = 1;

button7.addEventListener("click", function () {
  for (let elem of elems) {
    elem.innerHTML += i;
    i++;
  }
});


let inputs = document.querySelectorAll("#q");
let parag = document.querySelector("#parag");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
  let sum = 0;
  for (let input of inputs) {
    sum += Number(input.value);
  }
  parag.innerHTML = "Сумма значений инпутов = " + sum;
});

// 167.Добавление обработчиков событий в цикле

function func() {
  alert(this.innerHTML);
}

let elems = document.querySelectorAll("p");

for (let elem of elems) {
  elem.addEventListener("click", func);
}


function func() {
  this.value = Number(this.value) + 1;
}

let elems = document.querySelectorAll("#elems");

for (let elem of elems) {
  elem.addEventListener("blur", func);
}
*/

function func() {
  this.innerHTML **= 2;
}

let elems = document.querySelectorAll(".www");

for (let elem of elems) {
  elem.addEventListener("click", func);
}
