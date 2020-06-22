"use strict";
//Введение в DOM

//151.Основы работы с DOM в JavaScript

//152.DOM элементы в JavaScript

let button = document.querySelector("#button");
button.addEventListener("click", function () {
    alert("!!!");
});

// Продолжение в папке 30DOM
//159.Работа с текстом тега на JavaScript

let button1 = document.querySelector("#button1");
let elem1 = document.querySelector("#elem1");

button1.addEventListener("click", function () {
    alert(elem1.innerHTML);
});

let q = document.querySelector("#q");
let w = document.querySelector("#w");

button2.addEventListener("click", function () {
    alert(Number(q.innerHTML) + Number(w.innerHTML));
});

let e = document.querySelector("#e");
let r = document.querySelector("#r");

button3.addEventListener("click", function () {
    alert((e.innerHTML = "!!!"));
});

button4.addEventListener("click", function () {
    alert(r.innerHTML + "!!!");
});

let t = document.querySelector("#t");
let y = document.querySelector("#y");
let u = document.querySelector("#u");

t.addEventListener("click", function () {
    alert((t.innerHTML = "1"));
});
y.addEventListener("click", function () {
    alert((y.innerHTML = "2"));
});
u.addEventListener("click", function () {
    alert((u.innerHTML = "3"));
});

let i = document.querySelector("#i");
let button5 = document.querySelector("#button5");

button5.addEventListener("click", function () {
    alert(Number(Math.pow(i.innerHTML, 2)));
}); //Задача 5

let o = document.querySelector("#o");
let button6 = document.querySelector("#button6");

button6.addEventListener("click", function () {
    o.innerHTML = Number(o.innerHTML) + 1;
}); //Задача 6

let a = document.querySelector("#a");
let button7 = document.querySelector("#button7");

button7.addEventListener("click", function () {
    a.innerHTML = "!" + Number(a.innerHTML) + "!";
}); //Задача 7 ,8

let s = document.querySelector("#s");
let button8 = document.querySelector("#button8");

button8.addEventListener("click", function () {
    s.innerHTML = s.innerHTML + "<i>hello</i>";
}); //9

let d = document.querySelector("#d");
let button9 = document.querySelector("#button9");

button9.addEventListener("click", function () {
    d.innerHTML = "<b><i>" + d.innerHTML + "</b></i>";
}); //10

//160.Работа с атрибутами тегов через свойства элементов

let buttonn = document.querySelector("#buttonn");
let elemm = document.querySelector("#elemm");

buttonn.addEventListener("click", function () {
    alert(elemm.id); // выведет 'elem'
    alert(elemm.type); // выведет 'text'
});

// buttonn.addEventListener("click", function () {
//   elemm.type = "submit"; // присвоим новое значение атрибуту type
// });

let ele = document.querySelector("#ele");
buttonn.addEventListener("click", function () {
    alert(ele.type);
});

let ele2 = document.querySelector("#ele2");
let button10 = document.querySelector("#button10");
button10.addEventListener("click", function () {
    ele2.type = ele2.submite;
}); //Задача 2

//Продолжаю в index1.html и script4.js из-за путаницы