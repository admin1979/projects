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

//Сокращенный синтаксис циклов в JavaScript
//Общий синтаксис цикла for в JavaScript
for (let i = 0, j = 0; i <= 9; i++, j += 2) {
  console.log(i, j);
}

//44.Инструкция break в JavaScript
let arr = [56, 0, 4, -1, 9, 2, 3, -1];
for (let el of arr) {
  if (el == 3) {
    console.log("есть");
    break;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
  let result;

  if (elem % 2 == 0) {
    result = elem * elem;
  } else if (elem % 3 == 0) {
    result = elem * elem * elem;
  } else {
    continue;
  }

  console.log(result); // вынесли вывод за условие
}

//Работа с флагами в JavaScript

let arr = [1, 2, 3, 4, 3, 5];

for (let elem of arr) {
  if (elem == 3) {
    console.log("есть"); // выведет несколько раз
    break;
  }
}

let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента 3 нет в массиве

for (let elem of arr) {
  if (elem == 3) {
    flag = true; // элемент есть - переопределим переменную flag
    break; // выйдем из цикла
  }
}
console.log(flag);

let arr = ["a", "b", "c", "d", "e"];
let flag = false;

for (let elem of arr) {
  if (elem == "a") {
    flag = true;
    break;
  }
}

if (flag === true) {
  console.log("есть");
} else {
  console.log("нет");
}

//48.Нахождение простых чисел на JavaScript

//Формирование строк через циклы в JavaScript

let str = '-';

for (let i = 9; i > 0; i--) {
  str = str + i + '-';
}

console.log(str);

//Цикл for и типы данных JavaScript

let result = '';

for (let i = 1; i <= 30; i++) {
  result += i;
}

console.log(result);

//52.Вложенные циклы в JavaScript

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
}

// 54.Заполнение массивов через цикл в JavaScript
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

let arr2 = [];
arr2[0] = "x";
arr2[1] = "x";
arr2[2] = "x";
arr2[3] = "x";
arr2[4] = "x";

console.log(arr2);


let arr = [];

for (let i = 0; i <= 100; i++) {
  arr[i] = i + 1;
}

document.write(arr);

let arr = [];

for (let i = 2; i <= 100; i += 2) {
  arr[i] = i;
}

document.write(arr);
let arr = [];

for (let i = 1, j = 0; i <= 100; i += 3, j++) {
  arr[j] = i;
}
document.write(arr);


// 55.Изменение массива в цикле JavaScript

let arr = [1, 2, 3, 4, 5];

arr[0] = arr[0] * 2;
arr[1] = arr[1] * 2;
arr[2] = arr[2] * 2;
arr[3] = arr[3] * 2;
arr[4] = arr[4] * 2;

document.write(arr); // выведет [2, 4, 6, 8, 10]

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.pow(arr[i], 3);
}

console.log(arr); // выведет [2, 4, 6, 8, 10]

// Сокращенные операции

let arr = [5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] += 10;
}
document.write(arr);

// 56.Заполнение массива методом push в JavaScript

let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

document.write(arr);
console.log(arr);


let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

console.log(arr); // выведет [1, 2, 3, 4, 5]

// Заполнение массива из другого массива

let arr = [1, -9, 2, -3, 4, 5, 0, -123, -10];
let result = [];

for (let elem of arr) {
  if (elem > 0) {
    result.push(elem);
  }
}

console.log(result);

//Переворот массива это всё в 56 пункте
let arr = [-1, 9, 30, 0, -40, -7, "a"];
let result = [];
for (let elem of arr) {
  if (elem > 0 || elem == 0) {
    result.push(elem);
  }
}

console.log(result);
document.write(result);

let arr = [1, 2, 3, 4, 5];
let result = arr.reverse();
console.log(result);

let arr = ["a", "b", "c", "d", "e"];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}

console.log(result);

let arr = [];
arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr);

let arr = [];
for (let i = 1; i <= 5; i++) {
  arr.push(i);
}

document.write(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let elem of arr) {
  if (elem % 2 != 0) {
    result.push(elem);
  }
}

console.log(result);

// 57.Заполнение объектов через цикл в JavaScript

let obj = {};
obj['a'] = 1;
obj['b'] = 2;
obj['c'] = 3;
obj['d'] = 4;
obj['e'] = 5;
console.log(obj);

let day = {};
day['пн'] = 1;
day['вт'] = 2;
day['ср'] = 3;
day['чт'] = 4;
day['пт'] = 5;
day['сб'] = 6;
day['вс'] = 7;
console.log(day);

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i <= 4; i++) {
  let key = keys[i];
  let value = values[i];

  obj[key] = value;
}

console.log(obj);

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i <= 6; i++) {
  let key = arr2[i];
  let value = arr1[i];

  obj[key] = value;
}
console.log(obj);

let obj = {
  'a': 12,
  'b': 21,
  'c': 13,
  'd': 23,
  'e': 17
};
let result = {};
for (let key in obj) {
  if (obj[key] >= 10 && obj[key] <= 20) {
    result[key] = obj[key];
  }
}
console.log(result);

let obj = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'сб',
  7: 'вс'
};

let result = {};
for (let key in obj) {
  if (key % 2 !== 0) {
    result[key] = obj[key];
  }
}
console.log(result);

let obj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5
};

for (let key in obj) {
  obj[key] = Math.pow(obj[key], 5);
}

console.log(obj);

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = {};

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
let result = {};

for (let key in obj) {
  result[obj[key]] = key;
}

console.log(result); // выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

// 58.Практика на циклы с массивами и объектами JavaScriptt

let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
let result = {}
for (let key in obj) {
  if (key <= 400) {
    result[key] = obj[key] * 0.2;
  }

}

console.log(result);

// 59.Подсчет количества элементов в массиве JavaScript
let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for (let elem of arr) {
  if (elem == 'a') {
    counter++;
  }
}

console.log(counter);

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
  if (elem == 3 || elem == 2) {
    counter++;
  }
}
console.log(counter);
document.write(counter);
alert(counter);

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let count = {
  a: 0,
  b: 0,
  c: 0
};

for (let elem of arr) {
  count[elem]++;
}

console.log(count); //выведет {a: 3, b: 2, c: 1}

let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'gopa'];
let count = {};
for (let elem of arr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}
console.log(count);

// 60.Получение соседей элементов в массиве JavaScript

let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i - 1 + arr[i]]);
}

// 61.Получение чисел Фибоначчи в JavaScript

let one = 0;
let two = 1;

for (let i = 1; i <= 10; i++) {
  let current = one + two;

  one = two;
  two = current;

  console.log(current);
}

// 62.Вывод пирамидок на JavaScript

let str = '';

for (let i = 0; i < 5; i++) {
  str += 'xx';
  document.write(str + '<br>');
}
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
  document.write('<br>' + '<br>');
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }

  document.write('<br>');
}


// 65. Многомерные массивы в JavaScript

let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
];
// console.log(arr[0][1]);
console.log(arr[2][2]);

let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0]);

let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
let sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1];
console.log(sum);


let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = arr[0][0][0] + arr[0][1][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][1][1] + arr[1][1][0] + arr[1][1][1];
console.log(sum); //ошибка где-то, пошли дальше, принцип понятен


// 66. Перебор многомерных массивов в JavaScript

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
  [9, 10]
];

for (let subArr of arr) {
  for (let elem of subArr) {
    console.log(elem);
  }
}

let arr = [
  [1, 2, 3],
  [4, 5],
  [6]
];
for (let subArr of arr) {
  for (let elem of subArr) {
    console.log(elem + elem);
  }
}


let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
  [9, 10]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// 67.Заполнение многомерных массивов JavaScript

//78. Математические методы.

console.log(Math.pow(3, 4));
console.log(Math.pow(2, -5));
document.write(Math.sqrt(4));



console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; //получение суммы элементов массива через цикл
}
console.log(sum);

var arr = [3, 2, 5, 6];
function arraySum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
arraySum(arr);


// Задача 3

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3); //получение суммы элементов массива через цикл
}
console.log(Math.sqrt(sum));


console.log(Math.round(6.4));
console.log(Math.ceil(6.4));

let num = 1.1111;
console.log(num.toFixed(2));

let num = 678.19324;
console.log(num.toPrecision(4));
let num = Math.sqrt(379);

console.log(Math.round(num));
console.log(num.toFixed(2));
console.log(num.toFixed(1));

//Задача 5

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let num1 = Math.sqrt(587);
let obj = {};
// console.log(Math.ceil(num1));
// console.log(Math.floor(num1));

obj["ceil"] = Math.ceil(num1);
obj["floor"] = Math.floor(num1);

console.log(obj);

//Тоже самое с помощью цикла.
let num1 = Math.sqrt(587);

let keys = ["ceil", "floor"];
let values = [Math.ceil(num1), Math.floor(num1)];
let obj = {};

for (let i = 0; i <= 1; i++) {
  let key = keys[i];
  let value = values[i];

  obj[key] = value;
}

console.log(obj);

//Нахождение максимального и минимального числа


console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

let arr = [1, 5, 10, 34, 100];
let max = Math.max.apply(null, arr);

console.log(max);

//Метод Math.random

document.write(Math.random());

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(10, 100));

// Задача 7

// Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));



// Задача 8

// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomInt(1, 10));

let arr = [];

for (let i = 0; i <= 4; i++) {
  arr[i] = getRandomInt(1, 10);
}

console.log(arr);

// Метод Math.abs

console.log(Math.abs(-3));

// Задача 9

// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

let a = 10;
let b = 20;
let m = a - b;

console.log(m);

console.log(Math.abs(m));

//79.Строковые методы JavaScript
//Работа с регистром символов

let str = 'js';
console.log(str.toUpperCase());

let str1 = 'JS';
console.log(str.toLowerCase());


let str = 'abcde';
let sub = str.substr(0, 3);

console.log(sub);


let str = 'abcde';
let sub = str.substr(2);

console.log(sub);

let str = 'я учу javascript!';
console.log(str.slice(2, 5));

//Работа с indexOf

let str = 'Я учу учу Javascript';
console.log(str.indexOf('учу', 3));

let str2 = 'Б..Б..Б';
console.log(str2.lastIndexOf('Б'));

let str3 = 'abcde';
console.log(str3.indexOf('c'));


let str4 = 'dsdafge';
//console.log(str4.lastIndexOf('a'));
if (str4.lastIndexOf('a') == -1) {
  alert("Нет буквы а");
} else {
  console.log('есть а');
}


let str4 = 'adsdafge';
//console.log(str4.lastIndexOf('a'));
if (str4.lastIndexOf('a', 0) == -1) {
  alert("Нет буквы а");
} else {
  console.log('есть а');
}


//Работа с startsWith, endsWith

let str = 'http://ya.ru/';
if (str.startsWith('http://')) {
  alert('да начинается');
} else {
  console.log('нет не начинается');
}


let str = 'http://ya.html';
if (str.endsWith('html')) {
  alert('да заканчивается');
} else {
  console.log('нет не заканчивается');
}


let str = 'html-css-javascript';
let arr = str.split('-');

console.log(arr);


let str = 'html-css-javascript';
let arr = str.split('-', 2);

console.log(arr);


let str = 'abcde';
let arr = str.split('');

console.log(arr);


let str = 'abcde';
let arr = str.split('', 3);

console.log(arr);


let str = '123456789';
let arr1 = str.split('');
let arr2 = arr1.reverse();
let result = arr2.join('');

console.log(result);


let str = '123456789';

let result = str.split('').reverse().join('');
console.log(result);


let str = '12345';
let arr = str.split('');
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += Number(arr[i]);
}

console.log(sum);


let num = 12345;
let str = String(num);
let arr = str.split('');

console.log(arr);

//Задача 15 

//Дан следующий массив:

let arr = [1, 2, 3, 4, 5];
let result = arr.join('-');

console.log(result);

//80.Методы для массивов в JavaScript. Работа с push, unshift

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

let arr1 = [1, 2, 3];
arr1.unshift(4, 5, 6);
console.log(arr1);


let arr = [];

for (let i = 1; i <= 109; i++) {
  arr.push(i)
}

console.log(arr);


let arr = ['a', 'b', 'c', 'd', 'e'];

arr.shift();
console.log(arr);



let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];

while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
  let first = arr.shift();
  let last = arr.pop();

  let str = first + last; // тут будет строка '16', потом '25', потом '34'
  result.push(str);
}

// После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
result = result.join('-');
console.log(result);


let arr5 = ["js", "css", "jq"];
console.log(arr5.shift());

let arr6 = ["js", "css", "jq"];
console.log(arr6.pop());

//Работа с slice

let arr7 = [1, 2, 3, 4, 5];
arr7 = arr7.slice(1, 3);
console.log(arr7);

let a = [1, 2, 3, 4, 5];
let b = a.slice(3, 6);
console.log(b);

let a = [1, 2, 3, 4, 5];
let b = a.splice(1, 3);
console.log(b);

let a = [1, 2, 3, 4, 5];
let b = a.splice(0, 3, "a", "b", "c");
console.log(b);

let arr = ["a", "b", "c", "d", "e"];

arr.splice(2, 1, "1", "2", "3");
console.log(arr);


let a = [1, 2, 3, 4, 5];
console.log(a.indexOf(2));

//81.Практика на использования изученных методов

let str = "london";

let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result); // выведет 'London'

let str = "london";

let result = str.slice(5, 6).toUpperCase() + str.slice(0 - 4);
console.log(result); //куйня какаято вышла

//82.Основы работы с пользовательскими функциями в JavaScript

function fu() {
  alert("!!!!!!!");
}
fu();
fu();
fu();
fu();



function name() {
  alert("Пушкин");
}
name();

function summa() {
  let sum = 0;

  for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
  }
}
summa();

//83.Параметры функций в JavaScript

function func(num) {
  console.log(Math.pow(num, 3));
}
// func(2);
func(2);


function f(num) {
  if (num < 0) {
    console.log("число отрицательное ---");
  } else {
    console.log("число положительное +++");
  }
}
f(3);


function func1(num1, num2) {
  console.log(num1 * num2);
}

func1(3, 2);

function func1(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

func1(3, 2, 4);


function func(num) {
  alert(num * num);
}

func(2);

function func(num) {
  alert(num * num);
}

let param = 3;
func(param);

function func(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3);

function func(name) {
  alert("ваше имя: " + name);
}

func("Вася");

function func(name = "Аноним") {
  console.log("ваше имя: " + name);
}
func();
func("Василий Задов");

function func(num = 5) {
  console.log(num * num);
}

func(2);
func(3);
func();

function func(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
func(2, 3);
func(3);
func();

function func(num) {
  return num * num;
}

let result = func(2);
console.log(result);

function func(num) {
  return Math.pow(num, 3);
}
console.log(func(3));

function func(num) {
  return num * num;
}

let result = func(2) + func(3);
alert(result); // выведет 13

//Инструкция return в JavaScript

function func(num) {
  return num * num;
}

let result = func(3); // в переменной result теперь 9
console.log(result);


function func(num) {
  return num * num;
}

let result = func(3);
result = result + 1;
alert(result); // выведет 10

function func(num) {
  return num * num;
}

alert(func(3)); // выведет 9


//Функции в функциях

//Тонкое место return

function func(num) {
  if (num >= 0) {
    return '+';
  } else {
    return '-';
  }
}

console.log(func(3)); // выведет '+'
console.log(func(-3)); // выведет '-'

function func(num) {
  return num;

  let result = num * num;
  return result;
}

console.log(func(3));


function func(num) {
  if (num <= 0) {
    return Math.abs(num);
  } else {
    return num * num;
  }
}

console.log(func(10));
console.log(func(-5));

function func(num) {
  if (num <= 0) {
    return Math.abs(num);
  }

  return num * num;
}

console.log(func(10));
console.log(func(-5));


function func() {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    sum += i;
    return (sum);
  }

  return sum;
}

let result = func();
console.log(result); // выведет 15


function func(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;

  }
  return sum;
}

console.log(func(5));

//Применение return в цикле

function func(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // Если сумма больше или равна 10:
    if (sum >= 10) {
      return i + 1; // выходим из цикла и из функции
    }
  }
}

let result = func([1, 2, 3, 4, 5]);
console.log(result);

//Приемы работы с return

function func(num) {
  let result;

  if (num >= 0) {
    result = Math.sqrt(num);
  } else {
    result = 0;
  }

  return result;
}

console.log(func(3));


function func(num) {
  if (num >= 0) {
    return Math.sqrt(num);
  } else {
    return 0;
  }
}

console.log(func(2));


function func(num1, num2) {
  let result;

  if (num1 > 0 && num2 > 0) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}

console.log(func(-1, -3));


//85.Примеры на создание функций в JavaScript

let arr = [1, 2, 3, 4];

// Код, находящий сумму:
let sum = 0;

for (let elem of arr) {
  sum += elem;
}

alert(sum);



function getSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log(getSum(arr1));
console.log(getSum(arr2));


function getSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem * elem;
  }

  return sum;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log(getSum(arr1));
console.log(getSum(arr2));

//Задача 2 

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.

function gitDigitsSum(num) {
  return num.toString().split('');

}

console.log(gitDigitsSum(12345));

let sum = 0;
for (let elem of gitDigitsSum(12345)) {
  sum += elem;
}

console.log();   //  Всё не так


function getDigitsSum(num) {
  let sum = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
  return sum;
}
let num = +prompt("Введите число");
console.log(getDigitsSum(num));

// Задача 3

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].

//86.Флаги в функциях JavaScript

let num = 31;

let flag = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = false;
    break;
  }
}

console.log(flag);


function isPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

console.log(isPrime(10));
console.log(isPrime(31));


function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(10));
console.log(isPrime(31));

//87.Логические операторы без if в функциях JavaScript
function func(a, b) {
  return a > b;
}

console.log(func(1, 2));

function func(a, b) {
  return a == b;
}

console.log(func(2, 2));

function func(a, b) {
  return a != b;
}

console.log(func(1, 2));


function func(a, b) {
  return a + b >= 10;
}

console.log(func(9, 2));

*/

//88.Правильное использование функций JavaScript

let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];

for (let elem of arr) {
  if (checkDigitsPairsSum(elem)) {
    result.push(elem);
  }
}

console.log(result);

function checkDigitsPairsSum(num) {
  let str = String(num);
  let sum1 = Number(str[0]) + Number(str[1]);
  let sum2 = Number(str[2]) + Number(str[3]);

  return sum1 == sum2;
}
console.log(checkDigitsPairsSum(10));

// Перерыв
