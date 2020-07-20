// 196.Основы работы с объектом Event в script8

'use strict';

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    console.log(event);
}); 

// 197.Координаты события 

let elem = document.getElementById('elem');

document.addEventListener('mousemove', function (event) {
    elem.innerHTML = event.clientX + ' : ' + event.clientY;
    // ИЛИ:
    // elem.innerHTML = event.pageX + ' : ' + event.pageY;
});

// 198.Тип события в объекте Event в JavaScript

elem.addEventListener('click', function (event) {
    console.log(event.type); // выведет 'click'
});

elem.addEventListener('dblclick', function (event) {
    console.log(event.type); // выведет 'click'
});


let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
    event.type == 'click' ? elem.style.background = 'green' : 0;
    event.type == 'dblclick' ? elem.style.background = 'red' : 0;
}

// 199.Элемент события в объекте Event 

let elem = document.getElementById('elem');

elem.addEventListener('click', function (event) {
    let tagName = event.target.tagName.toLowerCase();

    if (tagName == 'ul') {
        let li = document.createElement('li');
        li.innerHTML = elem.firstElementChild.innerHTML;
        elem.appendChild(li);
    }
    tagName == 'li' ? event.target.innerHTML += '!' : 0;
});

//200.Получение нажатых клавиш

kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(e) {
    if (form.elements[e.type + 'Ignore'].checked) return;

    let text = e.type +
        ' key=' + e.key +
        ' code=' + e.code +
        (e.shiftKey ? ' shiftKey' : '') +
        (e.ctrlKey ? ' ctrlKey' : '') +
        (e.altKey ? ' altKey' : '') +
        (e.metaKey ? ' metaKey' : '') +
        (e.repeat ? ' (repeat)' : '') +
        "\n";

    if (area.value && Date.now() - lastTime > 250) {
        area.value += new Array(81).join('-') + '\n';
    }
    lastTime = Date.now();

    area.value += text;

    if (form.elements[e.type + 'Stop'].checked) {
        e.preventDefault();
    }
}

// 202.Отмена действия по умолчанию в JavaScript

let elem = document.querySelector('#elem');

elem.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Вы не можете перейти по этой ссылке!');
});


// 203.Основы работы с контекстом в JavaScript

let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);

function func() {
    console.log(this.value); // выведет или 'text1', или 'text2'
}

// 204.Контекст непривязанной функции в JavaScript

function func() {
    console.log(this);
}

func();

// 207.Привязывание контекста через метод call в JavaScript

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelectorAll('#elem1');

function func() {
    console.log(this.value);
}

func.call(elem1);
func.call(elem2);



function func(param1, param2) {
    console.log(this.value + param1 + param2);
}

func.call(elem, param1, param2);


let elem = document.querySelector('#elem');

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func.call(elem, 'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'


// 208.Привязывание контекста через метод apply

let elem = document.querySelector('#elem');

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['Иванов', 'Иван']); // тут должно вывести 'привет, Иванов Иван'

// 209.Привязывание контекста через метод bind

*/

let elem = document.getElementById('elem');

function func(param1, param2) {
    console.log(this.value + param1 + param2);
}

let newFunc = func.bind(elem);
newFunc('1', '2');