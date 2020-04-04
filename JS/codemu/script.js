//Задачи не из этого курса, отсюда http://old.code.mu/tasks/javascript/base/osnovy-yazyka-javascript-dlya-novichkov.html
//Работа с переменными
//1
// let num;
// num = 3;
// alert(num);

//2
// let a = 10;
// let b = 2;

// alert(a + b);
// alert(a - b);
// alert(a / b);

//3
// let c;
// let d;
// c = 15;
// d = 2;
// let result = c + d;
// alert(result);

//4
// let a = 10;
// let b = 2;
// let c = 5;
// let s = (a + b + c);

// alert(s);
//5
/*
let a;
let b;

let c;
let d;

a = 17;
b = 10;

c = a - b;

d = 7;

let result = c + d;

alert(result);

//Работа со строками
const str = ('Привет мир!');
alert(str);


// const str1 = 'Привет,';
// const str2 = 'Мир!';
// alert(str1 + str2);

const name = 'Olegas';
alert('Привет ' + name);

const age = 20;
alert('Мне ' + age + ' лет!');

//Функция Prompt
let name = prompt('Enter you name');
alert('Your name' + ': ' + name);


let number = +prompt('Enter a number: ');
let number2 = Math.pow(number, 2);
alert(number2);
//Обращение к символам строки
let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);


let num = '12345';
alert(num[0] * num[1] * num[2] * num[3] * num[4]);

//Практика

let src = (60 * 60);
let src1 = (60 * 60 * 24);
let src2 = (60 * 60 * 24 * 30);

alert(src);
alert(src1);
alert(src2);


let hour = 10;
let min = 46;
let sec = 58;

alert(hour + ':' + min + ':' + sec);



let num = 3;
let num2 = Math.pow(num, 2);
alert(num2);



//Работа с присваиванием и декрементами
let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);


let num = 10;
num++;
num++;
num--;
alert(num);

//Работа с массивами

let arr = ['a', 'b', 'c'];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

let arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3] + '.');

let arr = [2, 5, 3, 9];
let result = (arr[0] * arr[1] + arr[2] * arr[3]);
alert(result);

let sex = ['salun', 'home', 'x'];
sex.splice(0, 1);
alert(sex);

//Объекты (ассоциативные массивы)

let obj = {
  a: 1,
  b: 2,
  c: 3
};
alert(obj.a);
alert(obj['c']);

let obj = {
  Коля: '100000',
  Вася: '222222',
  Петя: '3443254'
};
alert(obj.Коля);
alert(obj.Вася);
alert(obj['Петя']);

let obj = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'сб',
  7: 'вс'
};
alert(obj[6]);


let obj = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'сб',
  7: 'вс'
};
let day = 4;
alert(obj[4]);

//Многомерные массивы
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert(arr[1][0]);

*/
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
alert(obj.js[0]);