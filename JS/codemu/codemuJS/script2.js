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
*/

let obj = {
    'a': 1,
    'b': 2,
    'c': 3
};
let key = obj.b;
console.log(key);

//19 Примитивы и объекты. Типизация массивов и объектов в JavaScript