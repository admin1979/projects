"use strict";
/*
alert('Привет, мир!');

let num;
num = 123;
alert(num);

let a = 1,
    b = 2,
    c = 3;
alert(b);

let a = 1 + 2 + 3;
alert(a);

const c = 10;
const d = 5;

const result = c + d;
alert(result);


let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);


let a = 5 + 5 * 3 + 3;
alert(a);

let b = 8 + 2 / 2;
alert(b);


let c = (2 + 3) * 2 + 3;
alert(c);

let d = -100;
alert(d);

let f = 23;
alert(-f);

let a = 10;
let b = 3;
alert(10 % 3);

alert(2 ** 10);

let a = 3 * 2 ** (3 + 1);
alert(a);
alert(2 ** 5);

//строки

let str = '!!!';
alert(str);

let j = "java";
let s = 'script';
alert(j + s);

let h = 'hello';
let w = 'world';
alert(h + ' ' + w);

let name = "Дмитрий Трепачов";
alert('Пивет ' + name);

let age = '99 лет';
alert('тебе ' + age + ' ,ура бля!');

let str = 'абвгдейка';
alert(str.length);

let str1 = `a,
    b,
    c`;
alert(str1);

let x;
alert(x);
console.log(x);

let a = null;
alert(a);

let r = false;
let y = true;
// alert(r);
// alert(y);
alert(r + y);

let s = 'Dmitro';
let d = 'Trpachev';
alert(s * d);

alert(10 / 0);
alert(-10 / 0);

let a = '5' + 2;
alert(a);

let a = 5 + '2';
alert(a);

let a = '5' * '2';
alert(a);

let a = '5' - '2';
alert(a);

let a = '5' / '2';
alert(a);

let a = '5' % '2';
alert(a);

let a = '5s' * '2';
alert(a);

let a = '5s' + '2';
alert(a);

let a = (-'5') + (-'2');
alert(a);

let a = '5' * 1 + '2' * 1;
alert(a);

let a = '5' * '1' + '2' * '1';
alert(a);

let a = '' + 3 + 1;
alert(a);

//Принудительное преобразование типов данных в JavaScript

let a = '10';
let b = '20';
alert(Number(a) + Number(b));

alert('2' + Number('3'));


let a = +'2';
let b = +3;
alert(a + b);

let q = '5px';
let w = '6px';
alert(parseFloat(q) + parseFloat(w));


let q = '5.5px';
let w = '6.25px';
alert(parseFloat(q) + parseFloat(w) + 'px');

let str = String(1234).length;
alert(str);

let num1 = 43456;
let num2 = 34567655;
alert(String(num1).length + String(num2).length);

alert('1' + true);


alert(String(true) + 1);
alert(String(true) + Number(true));

//Преобразование к логическому типу в JavaScript

let test = Boolean(3);
alert(test);

let test = Boolean(0);
alert(test);

let test = Boolean(-1);
alert(test);

let test = Boolean(-0);
alert(test);

let test = Boolean('');
alert(test);

let test = Boolean('0');
alert(test);

let test = Boolean(true);
alert(test);

//Получение символов строки на JavaScript
let str = 'abcde';
let num = 2;
alert(str[0]);
alert(str[num]);
alert(str[4]);

let str = 'abcde';
alert(str[4]);
alert(str[3]);
alert(str[2]);
alert(str[1]);
alert(str[0]);

let str = '1322ewdfddfrtrt';
alert(str[str.length - 3]);

let str = '12345';
let sum = (+(str[0]) + +(str[1]) + +(str[2]) + +(str[3]) + +(str[4]));
alert(sum);

let str = '12345';
let sum = ((str[0]) * (str[1]) * (str[2]) * (str[3]) * (str[4]));
alert(sum);

let num = 12345;
let str2 = String(num);
alert(str2[4] + str2[3] + str2[2] + str2[1] + str2[0]);

//Сокращенные операции в JavaScript

let num = 1;
num = num + 1;
num = num + 1;
alert(num);

let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;

alert(num);

//Операции инкремента и декремента в JavaScript

let num = 10;
num++;
num++;
num--;
alert(num);

let num = 3;
alert(++num);

let num = 3;
alert(num++);

let num1 = 3;
let num2 = ++num1;
alert(num1);
//alert(num2);

//Функция prompt в JavaScript

let age = +prompt('Введите возраст: ');
alert('Ваш возраст: ' + age);

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

alert(num1 + num2);

let h = prompt('Введите первую строну квадрата: ');
let h1 = prompt('Введите вторую сторону квадрата: ');
let p = (h * h1);
alert(p);

//Массивы в JavaScript

let arr = [1, false, 'www.ya.ru', null];
let sumstr = (String(arr[0]) + String(arr[1]) + String(arr[2]) + String(arr[3]));


console.log(sumstr);

let arr = [1, false, 'www.ya.ru', null];
console.log(arr[arr.length - 1]);


let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = -3;
console.log(arr);

let num = [2, 5, 89];
num[0] += 3;
num[1] += 3;
num[2] += 3;
console.log(num);

let arr = [1, 2, 3];
arr[0]++;
arr[1]++;
arr[2]++;
console.log(arr);

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
console.log(arr);

//17.Объекты в JavaScript

let obj = {
    1: 'a',
    2: 'b',
    3: 'c'
};
console.log(obj[2]);

let obj = {
    a: 1,
    b: 2,
    c: 3,
    false: 1
};
console.log(obj['b'] + obj['a'] + obj['c'] + obj[false]);

let obj = {
    '1a': 1,
    '2b': 2,
    'c-c': 3
};
console.log(obj['1a'] + obj['2b'] + obj['c-c']);


let obj = {
    key1: 1,
    key2: 2,
    key3: 3
};
console.log(obj.key1 + obj.key2 + obj.key3);

let user = {
    name: 'Ivan',
    surname: 'Parhomenko',
    patronymic: 'Abdurahmanovich'
};
console.log(user.surname + ' ' + user.name + ' ' + user['patronymic']);

let date = {
    year: '2020',
    month: '04',
    day: '07',
    tire: '-'
};
console.log(date.year + date.tire + date.month + '-' + date.day);
//18 Ключи из переменных в JavaScript

let a = ['a',
    'b',
    'c'
];
let key = 0
console.log(a[key]);

let arr = [1, 2, 3, 4, 5];
let key1 = arr[1];
let key2 = arr[2];
let result = key1 + key2;
console.log(result);

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
let key = obj.b;
console.log(key);

//19 Примитивы и объекты. Типизация массивов и объектов в JavaScript

console.log(typeof {});
console.log(typeof { a: 1, b: 2, c: 3 });
console.log(typeof [1, 2, 3]);
//let arr = [1, 2, 3];
//console.log(typeof arr[0]);
let arr = ["1", "2", "3"];
console.log(typeof arr[0]);
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ a: 1, b: 2, c: 3 }));

let a = [1, 2, 3];
let b = a;

b[0] = "!"; // меняем массив из переменной b
console.log(a[0]); // выведет '!' - переменная a тоже поменялась
console.log(b);
console.log(b[0]);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
console.log(arr2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
arr2[1] = "b";

console.log(arr1);

//21 Конструкция if-else в JavaScript

let test = +prompt("Введите число:");

if (test >= 10) {
  alert("верно это число ");
} else {
  alert(Boolean(test) + " " + "else");
}

let test = +prompt("Введите число:");

if (test == 10) {
  alert("верно");
} else {
  alert("неверно");
}

let test = +prompt("Введите число:");

if (test != 10) {
  alert("верно");
} else {
  alert("неверно");
}

let test1 = +prompt("Enter number 1:");
let test2 = +prompt("Enter number 2:");

if (test1 > test2) {
  alert("test1>больше чем test2");
} else if (test1 < test2) {
  alert("test1<меньше чем test2");
} else if (test1 == test2) {
  alert("равно");
}

//22 Типы данных и конструкция if-else в JavaScript

let test1 = "3";
let test2 = "3";

if (test1 === test2) {
  alert("верно");
} else {
  alert("неверно");
}
let test1 = "3";
let test2 = "3";

if (test1 != test2) {
  alert("верно");
} else {
  alert("неверно");
}

let test1 = "3";
let test2 = "3";

if (test1 !== test2) {
  alert("верно");
} else {
  alert("неверно");
}
let test1 = 3;
let test2 = "3";

if (test1 != test2) {
  alert("верно");
} else {
  alert("неверно");
}

let test1 = 3;
let test2 = 2;

if (test1 !== test2) {
  alert("верно");
} else {
  alert("неверно");
}

//23 Логическое и и или. Сложные условия в if-else в JavaScript
let num = +prompt("Enter number:");

if (num >= 10 && num <= 20) {
  alert("верно");
} else {
  alert("неверно");
}

let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
  alert("верно");
} else {
  alert("неверно");
}

let num1 = 0;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
  alert("верно");
} else {
  alert("неверно");
}

let num1 = -5;
let num2 = 15;

if (num1 >= 0 || num2 >= 0) {
  alert("верно");
} else {
  alert("неверно");
}


let num = 1;

if (num == 0 || num == 1) {
  alert("верно");
} else {
  alert("неверно");
}


let num = 2;

if (num == 0 || num == 1 || num == 2) {
  alert("верно");
} else {
  alert("неверно");
}


let num = 3;

if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
  alert("верно");
} else {
  alert("неверно");
}

let num = 3;

if ((num > 5 && num < 10) || num == 20) {
  alert("верно");
} else {
  alert("неверно");
}

let num = 3;

if (num > 5 || (num > 0 && num < 3)) {
  alert("верно");
} else {
  alert("неверно");
}



let num = 3;

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
  alert("верно");
} else {
  alert("неверно");
}

//Инвертирование высказываний
let num1 = 1;
let num2 = 3;

if (!(num1 >= 0 || num2 <= 10)) {
  alert('верно');
} else {
  alert('неверно');
}


let test = 1;

if (test == false) {
  alert('верно');
} else {
  alert('неверно');
}


let test = 1;

if (test != true) {
  alert('верно');
} else {
  alert('неверно');
}



let test = NaN;

if (test == false) {
  alert('верно');
} else {
  alert('неверно');
}

let test = '';

if (test == false) {
  alert('верно');
} else {
  alert('неверно');
}


let test;

if (test == true) {
  alert('верно');
} else {
  alert('неверно');
}



let test = 3 * 'a';
alert(test);
if (test == true) {
  alert('верно');
} else {
  alert('неверно');
}


let test = true;

if (!test) {
  alert('верно');
} else {
  alert('неверно');
}

let test = true;

if (test) {
  alert('верно');
} else {
  alert('неверно');
}



let test = 3;

if (test) {
  alert('верно');
} else {
  alert('неверно');
}



let test = 'abc';

if (test) {
  alert('верно');
} else {
  alert('неверно');
}

let test = '';

if (test) {
  alert('верно');
} else {
  alert('неверно');
}


let test = 3 * 'abc';

if (test) {
  alert('верно');
} else {
  alert('неверно');
}


let test = null;

if (test) {
  alert('верно');
} else {
  alert('неверно');
}

//Задача 21
let test = false;

if (test) {
  alert('верно');
} else {
  alert('неверно');
}


let test = -1;
alert(Boolean(test));
if (test) {
  alert('верно');
} else {
  alert('неверно');
}


//Сокращенный синтаксис if-else в JavaScript
let test = 1;

if (test) {
  alert('yes');
}

let test = 0;
if (test == 0)
  alert('верно');
else
  alert('неверно!');
//Комбинации конструкций if-else в JavaScript
let day = +prompt('Введите день месяца:');
if (day <= 10) {
  alert('первая декада');
}
if (day <= 20) {
  alert('вторая декада');
}
if (day <= 31) {
  alert('третья декада');
} else {
  alert('введите дни месяца от 1 до 31');
}

let day = +prompt('Введите день месяца:');
if (day <= 10) {
  alert('первая декада');
} else if (day <= 20) {
  alert('вторая декада');
} else if (day <= 31) {
  alert('третья декада');
} else {
  alert('введите дни месяца строго от 1 до 31')
}


let age = +prompt('Введите число, строго от 10 до 99:')

if (age <= 10) {
  if (age >= 99)
    alert('число меньше 10 или больше 99, их сумма ');
}

let age1 = +prompt('Введите число:');
let age = age1;
if (age <= 10 || age >= 99) {
  alert(age + '-' + " " + 'число меньше 10 или больше 99')
} else {
  alert(age + age);
}
if ((age + age) <= 9) {
  alert('Сумма цифр однозначна');
} else {
  alert('Сумма цифр двузначна');
}

//Область видимости let и var в if-else
let age = 17;
let adult;

if (age >= 18) {
  adult = true;
} else {
  adult = false;
}

console.log(adult);

let age = 17;
let adult;

if (age >= 18) {
  let adult = true;
} else {
  let adult = false;
  console.log(adult);
}

let age = 17;
let adult;

if (age >= 18) {
  adult = true;
} else {
  let adult = false;
  console.log(adult);
}

let age = 23;
let result;

if (age >= 18) {
  if (age <= 23) {
    let result = "от 18 до 23";
    console.log(result);
  } else {
    let result = "больше 23";
    console.log(result);
  }
} else {
  let result = "меньше 18";
  console.log(result);
}

let age = 19;
let result;

if (age >= 18) {
  let result;
  if (age <= 23) {
    result = "от 18 до 23";
    console.log(result);
  } else {
    result = "больше 23";
    console.log(result);
  }
} else {
  result = "меньше 18";
  console.log(result);
}

let num = 1;

if (num == 1) {
  var result = "верно";
} else {
  var result = "неверно";
}

console.log(result);


let num = 1;

if (num == 1) {
  let result = "верно";
} else {
  let result = "неверно";
}

console.log(result);

//29 Примеры использования if-else в JavaScript

let min = prompt("Введите время:");

if (min >= 0 && min < 19) {
  console.log("Первая треть часа");
}
if (min >= 20 && min <= 40) {
  console.log("Вторая треть часа");
}
if (min >= 41 && min <= 60) {
  console.log("Третья треть часа");
}

let arr = [45, "abc", 98, "eeee"];
if (arr.length >= [6]) {
  console.log("yes");
} else if (arr.length < [6]) {
  console.log("no");
}

let num = prompt('Введите трёхзначное число:');
let num2 = String(num)[2];
if (num2 == 0) {
  alert('последняя цифра введённого числа =0');
} else {
  alert('последняя цифра введённого числа !=0');
}

let num = prompt('Введите первое число:');
let num1 = prompt('Введите второе число:');

let num2 = (num % num1);
if (num2 != 0) {
  alert('число нечётное');
} else {
  alert('Число чётное');
}

let num = prompt('Введите число:');
let num2 = (num % 3);

if (num2 == 0) {
  alert('число делится на три нацело');
} else {
  alert('число делится на 3 с остатком' + ' ' + num2);
}

//30 Практика на условия if-else в JavaScript

let month = prompt('Введите номер месяца или название месяца:');

if (month == 1 || month == "январь") {
  alert("зима");
} else if (month == 2 || month == "февраль") {
  alert('зима');
} else if (month == 3 || month == "март") {
  alert('весна');
} else if (month == 4 || month == "апрель") {
  alert('весна');
} else if (month == 5 || month == "май" || month == "Май") {
  alert('весна');
} else if (month == 6 || month == "июнь") {
  alert('лето');
} else if (month == 7 || month == "июль") {
  alert('лето');
} else if (month == 8 || month == "август") {
  alert('лето');
} else if (month == 9 || month == "сентябрь") {
  alert('осень');
} else if (month == 10 || month == "октябрь") {
  alert('осень');
} else if (month == 11 || month == "ноябрь") {
  alert('осень');
} else if (month == 12 || month == "декабрь") {
  alert('зима, месяц декабрь');
} else {
  alert('введите правильно');
}


let month = 10;
if (month == 1 || month == "январь") {
  alert("зима");
} else if (month == 2) {
  alert('зима');
} else if (month == 3) {
  alert('весна');
} else if (month == 4) {
  alert('весна');
} else if (month == 5) {
  alert('весна');
} else if (month == 6) {
  alert('лето');
} else if (month == 7) {
  alert('лето');
} else if (month == 8) {
  alert('лето');
} else if (month == 9) {
  alert('осень');
} else if (month == 10) {
  alert('осень');
} else if (month == 11) {
  alert('осень');
} else if (month == 12) {
  alert('зима');
} else {
  alert('введите правильно');
}


let str = 'xbcde';
if (str[0] == 'a') {
  alert('да первая буква это а');
} else {
  alert('не а');
}

let num = 32345;
let num1 = String(num);
if (num1[0] == 1 || num1[0] == 2 || num1[0] == 3) {
  alert('да' + ' ' + num1[0]);
} else {
  alert('нет' + ' ' + num1[0]);
}

let num = 123;
let num1 = String(num);
let a = +num1[0];
let b = +num1[1];
let c = +num1[2];

alert(a + b + c);

let num = prompt('введите 6-ти значное число:');

//let num = 345345;
let num1 = String(num);
if ((+num1[0]) + (+num1[1]) + (+num1[2]) == (+num1[3]) + (+num1[4]) + (+num1[5])) {
  alert('да');
} else {
  alert('нет');
}

// Конструкция switch-case в JavaScript
let num = prompt('Введите цифры от 1-4:');
switch (num) {
  case '1':
    alert('зима');
    break;
  case '2':
    alert('весна');
    break;
  case '3':
    alert('лето');
    break;
  case '4':
    alert('осень');
    break;
  default:
    alert('вечное лето');
    break;
}


let num = prompt("Цифра:");
let result = num < 0 ? true : false;
alert(result);

//33.Логические операции

let a = 1;
let b = 2;

console.log(a == b);


let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

console.log(a > b);
let a = 2 ** 4;
let b = 4 ** 2;

console.log(a != b);
console.log(a);
console.log(b);


let x = 1;

(x < 0) || (x = 1) && alert('Greater than zero!');


alert(Boolean('ssssas'));

alert(null || 2 || undefined);


alert(alert(1) || 2 || alert(3));

alert(alert(1) && alert(2));

alert(null || 2 && 3 || 4);

let age = prompt("Enter the fight zone:")
if (age >= 14 && age < 90) {
  alert('да');
} else {
  alert('нет');
}

if (-1 || 0) alert('first');

if (-1 && 0) alert('second');

//Проверка логина https://learn.javascript.ru/logical-operators
let loginp = prompt('Хто там, введите логин?', '');
let password = 54321;

if (loginp == 'admin') { //Почему тут не работает if (loginp == 'admin'||loginp== 'Admin')
  let password_p = prompt('введите пароль:', '');
  if (password_p == password) {
    alert('Здрасти');
  } else if (password_p == '' || password_p == null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (loginp == '' || loginp == null) {
  alert('Отмена');
} else {
  alert('Я вас не знаю');
}

//34 Функция confirm в JavaScript

let ok = confirm('Есть 18?');
if (ok) {
  alert('Текст для тем кому 18')
} else {
  alert('ЗапрещёнПокиньте');
}

//35.Цикл while

let i = 11; // задаем какую-нибудь переменную

while (i <= 33) {
  console.log(i); // выводим содержимое i в консоль
  i++; // увеличиваем i на единицу при каждом проходе цикла
}
let i = 33; // начальное значение 10

while (i >= 0) {
  // пока i больше 1
  console.log(i);
  i--; // уменьшаем i на единицу
}

let i = 15;
while (i <= 25) {
  console.log(i);
  i++;
}

let i = 10;
while (i <= 16) {
  console.log(i);
  i++;
}
//Цикл for в JavaScript
for (let i = 15; i <= 25; i++) {
  console.log(i); // выведет 1, 2... 9
}

for (let i = 100; i >= -100; i--) {
  console.log(i);
}

//38.Накопление результата в цикле JavaScript

let result = 0;

for (let i = 1; i <= 100; i++) {
  result = result + i;
}

console.log(result); // искомая сумма

let result = 0;

for (let i = 2; i <= 100; i++) {
  result = result + i;
}

console.log(result); // искомая сумма

//39.Цикл for для массивов в JavaScript

let arr = [1, 2, 3, 4, 5, 6, 'xyz'];

for (let i = 0; i <= 6; i++) {
  console.log(arr[i]);
}

let arr = [1, 2, 3, 4, 5, 6, 'xyz', 33, 'ss'];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

let arr = [1, 2, 3, 4, 5, 6, 'xyz', 33, 'ss'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Перебор массива и if

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}

let result = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  result += arr[i] * arr[i];
}

console.log(result);

let arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 < 10) {
    console.log(arr[i]);
  }
}


//Перебор массива циклом for-of в JavaScript

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let g of arr) {
  console.log(g);
}


let arr = [1, 2, 3, 4, 5];
for (let g of arr) {
  console.log(g + g);
}

let arr = ['январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь'
];
// for (let month of arr) {
//   console.log(month);
// }

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


let arr = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
];

let month = arr[10];

console.log(month.italics());

//41.Перебор объекта циклом for-in в JavaScript
let result = 0;
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  console.log(obj[key]); //Полное гавно а не задача, нет объяснения.
}
*/

//Сокращенный синтаксис циклов в JavaScript
//Общий синтаксис цикла for в JavaScript
for (let i = 0, j = 0; i <= 9; i++, j += 2) {
  console.log(i, j);
}

//43
