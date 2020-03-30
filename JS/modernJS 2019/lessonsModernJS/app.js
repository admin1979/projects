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
*/
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

//012 Циклы--------------------------------------------------------------
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i++ < 10) {
//   console.log(i);
// }

// let i = 20;
// while (i--) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let colors = ["white", "black", "yellow", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

//console.log(colors);

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