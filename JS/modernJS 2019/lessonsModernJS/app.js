/* const user = {
    firstName: 'Denis',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-adress': {
        city: 'Kharkov'
    },
    skills: ['thml', 'css', 'js'] 
};

let value;

value = user.firstName;
value = user['isAdmin'];



console.log(value);

//005 Преобразование типов---------------------------------------------------------------
let value;

value = (10 + 11 + 'Privet').toString();

value = String({
    name: 'Denis',
    age: 16
});

value = Number(123);

value = parseFloat('12.03as');
value = parseInt('12.03as');


console.log(value);
console.log(typeof value);

//006 Числа---------------------------------------------------------------------------------

let value;

value = 5 % 2;

value += 100;

value++;

--value;

value = 0.6 + 0.7;
value = +value.toFixed(1);

value = Math;
value = Math.PI;

const rrr = [1, 4, 6, 10, 19, "flowerPower"];
const eee = rrr[Math.floor(Math.random() * rrr.length)];

console.log(eee);
console.log(typeof eee);

//console.log(value);
//console.log(typeof value);

//007 Строки----------------------------------------------------------------------------

const value = 'Olegas' + ' ' + 'Bachiskis';
console.log(value);
const firstName = 'Denis';

let value;

value = firstName.indexOf('n');

console.log(value);
console.log(typeof value);

//008 Шаблонные строки----------------------------------------------------------------------
const f = "Denis";
const l = "Minin";
const age = 13;

let str;

// str = '<ul>' +
//     '<li>Имя бля:' + f + '</li>' +
//     '<li>Фамилие:' + l + '</li>' +
//     '<li>ВозростФундаминтальный:' + age + '</li>' +
//     '</ul>';

//ES6
str = `
    <ul>
        <li>Куё моё: ${f}</li>
        <li>Фамилиё: ${l}</li>
        <li>возрастт:${age}</li>
        <li>Рандом:${Math.random()}</li>
        <li>Денег:${4 * 2 + 5}</li>
    </ul>
`;

document.body.innerHTML = str;

//009 Введение в объекты----------------------------------------------------------
const user = {
  firstName: "Deonis",
  age: 30,
  isAdmin: true,
  email: "sdsd@ddd.ua",
  "user - addres": {
    city: "Kharkov"
  },
  skuls: ["html", "css", "js"]
};

let value;
let prop = "skuls";

value = user.firstName;
value = user.isAdmin;
value = user[prop][1];

console.log(value);
console.log(user);

//010 Логические операторы, if statement----------------------------------------------------------

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 === "1";
value = 2 == true;
value = "a".charCodeAt();
value = "b".charCodeAt();
value = "A".charCodeAt();
value = "G".charCodeAt();
value = "G" > "A";
value = "A" > "G";

console.log(value);

let number;
let number2;
let number3;

number = 30;
number2 = 10;
number3 = 15;

if (number < number2) {
  console.log(number3);
} else {
  console.log(number + number2);
}

//----------------------

value = [];

if (value.length) {
  console.log(value);
} else {
  console.log('Нету');
}


let age = prompt('Введите свой возраст:');

if (age < 16 && age > 60) {
  console.log("Входите");
} else if (age !== 51) {
  alert('возраст age = 51', age);
} else {
  console.log('else');
}
//011 Тернарный оператор. Конструкция switch case-----------------------------
let color = prompt("Введите цвет:");

switch (color) {
  case "yellow":
    console.log("found yellow");
    break;
  case "жёлтый":
    console.log("Найден жёлтый");
    break;
  default:
    alert("DEfault");
}

012 Циклы--------------------------------------------------------------
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let i = 0;
while (i++ < 10) {
  console.log(i);
}

let i = 20;
while (i--) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let colors = ["white", "black", "yellow", "orange"];

for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}

console.log(colors);

//013 Введение в функции--------------------------------------------------------------------------
function sayHello() {
  //alert("Hello World");
  console.log("Hello World");
}
sayHello();

function sayHello2(
  firstName = "Default",
  lastName = "Default1",
  iho = "Default2"
) {
  return `Hello ${firstName} ${lastName} ${iho}`;
}

let res = sayHello2("Ivan", "Ivaninov", "DennisSun") + " " + "hz?";
let res2 = sayHello2("Olehandro", "Bucanerovskiy");

console.log(res);
console.log(res2);

const square = function(x) {
  return x * x;
};

(function(msg) {
  console.log(msg);
})("Hello world");

//014 Методы массивов-----------------------------------------

const numArr = [2, 32, 212, 33243, 66];
const nArr2 = [777, 396, "sega"];

let value;

value = numArr.length;
value = Array.isArray(numArr);
value = numArr.indexOf(212);
value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(4325436);
value = numArr.shift();
value = numArr.slice(2, 4);
value = numArr.splice(1, 1, "сложный", "язык", 1234567);
value = numArr.concat(nArr2);
value = "hello world!".split(" ");

console.log(value, numArr);

//015 Функции высшего порядка. Callbacks---------------------------------------------------

function foo() {
  console.log("Hello");
}

foo();

foo.field = "Dennis";

console.log(foo.field);

const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}

console.log(newArr);

// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('Denis Mescheryakov');

function question(job) {
  const jobsDictionary = {
    developer: 'Что такое JS?',
    teacher: 'Какой предмет вы преподаете?',
  };

  return function (name) {
    return jobsDictionary[job] + ' ' + name;
  };
}

const developerQustion = question('developer');
console.log(developerQustion);
console.log(developerQustion('Denis'));

//016 Что такое this. Контекст вызова функции------------------------------------------

const prod1 = {
  name: "itel",
  price: 100,
  getPrice: function () {
    console.log(this.name);
    console.log(this.price);
  },
};
prod1.getPrice();



//018 Перебирающие методы массивов---------------------------------------------
const users = [{
    _id: "112wewewewrrer3",
    index: 0,
    age: 16,
    phone: 1234567890,
    isActive: true
  },
  {
    _id: "112wewewewrr4444444444444er3",
    index: 56,
    age: 25,
    phone: 54778575885858858,
    isActive: false
  }
];

// users.forEach((user1, i2, arr33) => {
//   console.log(user1, i2, arr33);
// });

// const userLess25 = users.filter(u1 => u1.age < 25);
// console.log(userLess25);

const userActive = users.filter(u2 => u2.isActive);
console.log(userActive);

const userPhone = users.map(u3 => u3.phone);
console.log(userPhone);

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

*/