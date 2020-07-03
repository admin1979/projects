'use strict';
// 173.Манипулирование CSS классами в JavaScript
// Массив классов

/*
let elem = document.querySelector('#elem');

let length = elem.classList.length;
console.log(length);

let elem = document.querySelector('#elem');
let classNames = elem.classList;

for (let className of classNames) {
    document.write(className + '<br>');
}

let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length);

let elem = document.querySelector('#elem');
let classNames = elem.classList;

// for (let className of classNames) {
//     document.write('<h2>' +
//         className + '</h2>');
// };


for (let i = 0; i < classNames.length; i++) {
    console.log(i); // выведет 1, 2... 9

    document.write('<h2>' +
        classNames + '</h2>');
};

let elem1 = document.querySelector('#elem');
elem1.classList.add('kkk');
elem1.classList.add('xxx');
elem1.classList.remove('wwwrr');
elem.classList.remove('zzzyyy4');
console.log(elem1);


let elem = document.querySelector('#elem');

let contains = elem.classList.contains('ggg1');

console.log(contains);

elem.classList.toggle('asadfgfgdffdfg555555');

console.log(elem);

// 174.Стилизация элементов через атрибут style в JavaScript

let elem = document.querySelector('#elem');
elem.style.color = 'blue';

let square = document.querySelector('.square');
let button = document.querySelector('.button');

button.addEventListener('click', function () {
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.border = '2px solid green';
});


let square1 = document.querySelector('.square1');
let button1 = document.querySelector('.button1');

button1.addEventListener('click', function () {
    square1.style.fontSize = '20px';
    square1.style.marginLeft = '40px';
    square1.style.background = 'green';
});

//175.Стилизация с помощью CSS классов на JavaScript

let elems = document.querySelectorAll('p');

for (let elem of elems) {
    elem.addEventListener('click', function () {
        this.classList.add('colored'); // добавляем абзацу класс
    });
}


let text = document.querySelector('.lorem');

let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

button1.addEventListener('click', function () {
    // text.classList.add('my-bold-font');
    text.classList.toggle('my-bold-font');
});

button2.addEventListener('click', function () {
    // text.classList.add('colored');
    text.classList.toggle('colored');

});

button3.addEventListener('click', function () {
    // text.classList.add('del');
    text.classList.toggle('del');
});

let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function () {
    elem.classList.toggle('active');
});


//176.Отработка изученного материала на работу с DOM

let inp = document.querySelector('#inp');
let abz = document.querySelector('#abz');

inp.addEventListener('blur', function () {
    abz.innerHTML = inp.value;
});
*/


let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
let p = document.querySelector('#p');

button.addEventListener('click', func);

function func() {
    let sum = 0;

    for (var input of inputs) {
        sum += +input.value;
    }
    p.innerHTML = sum;

    // очистим инпут
    for (var input of inputs) {
        input.value = '';
    }
}

//продолжение в script6.js