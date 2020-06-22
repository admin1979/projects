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