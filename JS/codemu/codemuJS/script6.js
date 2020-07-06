"use strict";
// 177.Нахождение элементов по родственным связям

/*
let parent = document.querySelector('#parent');
let text = parent.firstElementChild.innerHTML;

console.log(text);
let elem = document.querySelector('#elem');
let text = elem.firstElementChild.innerHTML;
elem.firstElementChild.style.color = 'red';
elem.lastElementChild.style.color = 'blue';
console.log(text);
console.log(elem.children);


let parent = document.querySelector('#parent');
let elems = parent.children;

for (let elem of elems) {
    elem.innerHTML += '!';
}


let elem = document.querySelector('#elem');
let id = elem.parentElement.id;

console.log(id);

let elem = document.querySelector('#elem');
let text = elem.parentElement.style.border = '1px solid red';
console.log(elem.parentElement);

let div = document.querySelector('div');
let div1 = div.parentElement.style.border = '1px solid red';

let elem = document.querySelector('#child');
let parent = elem.closest('.www');
console.log(parent.id);


let elem = document.querySelector('#elem');
let parent = elem.closest('div');
console.log(parent);


// 178.Другие полезные методы для поиска элементов

let elem = document.getElementById('elem');
elem.value = '!!!';

let elem1 = document.getElementById('elem1');
console.log(elem1.innerHTML);


let elem = document.getElementById("elem");
elem.innerHTML = "куйня";

let li = document.getElementsByTagName("li");
for (let elem of li) {
  elem.style.color = "red";
  elem.style.listStyleType = "none";
}

let www = document.getElementsByClassName("www");
for (let elem of www) {
  elem.style.color = "blue";
}

// 179.Поиск элементов внутри другого элемента
let elems1 = document.querySelectorAll("#parent .www");
let elems2 = document.querySelectorAll("#parent .ggg");

console.log(elems1);
console.log(elems2);


//180.Работа с текстареа в JavaScript
let elem = document.querySelector("#elem");
// console.log(elem.value); // выведет 'text'
let pp = document.querySelector("p");

elem.addEventListener("blur", function () {
  pp.innerHTML += elem.value;
});

//181.Атрибут disabled в JavaScript

let elem = document.querySelector("#elem");
console.log(elem.disabled); // выведет true

elem.disabled = false;


let inp1 = document.querySelector("#inp1");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

let button3 = document.querySelector("#button3");

button1.addEventListener("click", function () {
  inp1.disabled = true;
});

button2.addEventListener("click", function () {
  inp1.disabled = false;
});

button3.addEventListener("click", function () {
  if ((inp1.disabled = true)) {
    document.write("не заблокирован");
  } else {
    document.write("заблокирован");
  }
}); //надо разобрать



let input = document.querySelector("#input");
let button = document.querySelector("#button");
let p = document.querySelector("#p");

input.disabled = true;


// button.addEventListener("click", function () {
//   !!input.disabled
//     ? (p.innerHTML = "Заблокирован")
//     : (p.innerHTML = "Разблокирован");
// });

//182.Работа с чекбоксами в JavaScript

let elem = document.querySelector("#elem");
console.log(elem.checked);

*/

let elem = document.querySelector("#elem");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");

button1.addEventListener("click", function () {
  elem.checked = false;
});

button2.addEventListener("click", function () {
  elem.checked = true;
});

// 183.Чередование атрибутов без значений
