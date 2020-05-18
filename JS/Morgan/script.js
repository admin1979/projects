"use strict";
/*
let drawCats = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(4);

//стр. 40
//стр. 47
let age = 11;
let acco = true;
if (age >= 11 || acco === true) {
    console.log("можно");
} else {
    console.log("нельзя");
}


let dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон", "Апатозавр", "Диплодок", "Компсогнат"];



console.log(dinosaurs);

var animals1 = ['Кабан', 'Рыба', 'Динозавр', '10т', 110];
var animals2 = ['Крокодил', 'Кенгуру', 'Бегемот', 'Собака'];
let animals3 = ['Ara', 'Dodo'];
var newArray = animals1.concat(animals2, animals3);
console.log(newArray.indexOf('Крокодил'));
console.log(newArray.indexOf('Dodo'));
console.log(newArray[2]);


var animals1 = ['Кабан', 'Рыба', 'Динозавр', '10т', 110];
var j = animals1.join(' =^-^= ');
console.log(j);


var animals1 = ["Кабан", "Рыба", "Динозавр", "10т", 110];
var j = animals1.join(" и ");
console.log(j);

//63

var landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");

landmarks.pop();
landmarks.pop();

let r = landmarks.pop();
let t = landmarks.pop(Math.random());

console.log(landmarks);
console.log(r);
console.log(t);

let u = Math.floor(Math.random() * 4);
console.log(u);

var phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет",
];

// Мне выпить еще молочного коктейля?

let i = phrases[Math.floor(Math.random() * 5)];
console.log(i);


let a = [
  "глаз",
  "нос",
  "череп",
  "компьютер",
  "магнитофон",
  "собака",
  "нацяльника",
];
let b = [
  "вонючая",
  "унылая",
  "дурацкая",
  "гнилая",
  "ржавая",
  "красивая",
  "уродливая",
];
let c = ["муха", "выдра", "дубина", "мартышка", "крыса", "куйня", "вагина"];

let d = a[Math.floor(Math.random() * a.length)];
let e = b[Math.floor(Math.random() * b.length)];
let f = c[Math.floor(Math.random() * c.length)];

// console.log("У тебя " + d + " словно " + e + " " + f + "!!!");

document.write(["У тебя", d, "словно", e, f + "!!!"].join(" "));

let a = [
  "У твоего шефа",
  "У моего насяльника",
  "У твоего эффективного менеджера",
];
let b = ["куй", "вагина", "нос", "прививка", "ноги", "руки", "жопа", "голова"];
let c = ["ещё более", "как", "словно", "совсем как"];
let d = ["куй", "вагина", "нос", "ноздри", "лапы", "хвост", "мозги"];
let dd = ["слона", "обезьяны", "зайца", "мартышки", "собаки", "лошади"];

let e = a[Math.floor(Math.random() * a.length)];
let f = b[Math.floor(Math.random() * b.length)];
let g = c[Math.floor(Math.random() * c.length)];
let h = d[Math.floor(Math.random() * d.length)];
let i = dd[Math.floor(Math.random() * dd.length)];

document.write([e, f, g, h + " у " + i + ". Ахахахаха!!!"].join(" "));

let arr = [3, 2, 1];
document.write(arr.join(" больше, чем "));

//72

let cat = {
  legs: 3,
  name: "Гармония",
  color: "Черепаховый",
};

console.log(cat.name);
console.log(Object.keys(cat));

let dog = {};

dog["legs"] = 4;
dog["name"] = "Tobik";

console.log(dog);

//75

let u = {};
u.name = "Барсик";
u.age = "19";
console.log(u);

var dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];

console.log(dinosaurs[0]["name"]);

var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
console.log(friends[2].luckyNumbers[2]);

var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Джимми"] += 3;

owedMoney["Элис"] = 5;
owedMoney["Элис"] += 5;

console.log(owedMoney["Элис"]);


var movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD",
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD",
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray",
  },
};

var find = movies["Гарри Поттер и Кубок огня"];
console.log(find.actors[1]);

var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
  format: "Blu-ray",
};
movies["Тачки"] = cars;

document.write(Object.keys(movies));
console.log(movies);

let scores = {
  "Vasilyi Zadov": {
    score: 0,
  },
  "Nina Zadova": {
    score: 2,
  },
};

scores["Vasilyi Zadov"].score += 1;
scores["Nina Zadova"].score -= 1;
console.log(scores);

var myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};

console.log(myCrazyObject["some array"][2].number);

//97

var name = "Николай";
//console.log("Привет, " + name);
if (name.length <= 7) {
  console.log("имя нормальное");
} else {
  console.log("Ну и длиннющее же у вас имя!");
}

let condition = null;
if (condition) {
  console.log("Делаем что-то");
} else {
  console.log("Делаем что-то другое!");
}


var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
if (lemonChicken) {
  console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
  console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
  console.log("Ладно, закажу свинину.");
} else {
  console.log("Что ж, остается рис с яйцом.");
}


let enter = prompt("Введите своё имя:");
if (enter === "Oleg") {
  alert("Привет мне!");
} else if (enter === "Andrey") {
  alert("Привет Папа");
} else if (enter === "Kate") {
  alert("Привет Мама");
} else {
  console.log("Привет незнакомец");
}

var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("Хрррррррррр-псссс");

var sheepCounted = 0;

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("Посчитано овец: " + sheepCounted + "!");
}
console.log("Хрррррррррр-псссс");


var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
  console.log("Привет!");
}


var animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
  console.log("В этом зоопарке есть " + animals[i] + ".");
}

var name = "Oleg";
for (var i = 0; i < name.length; i++) {
  console.log("В моём имени есть буква:" + name[i] + ".");
}


for (var x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

let x = 3;
while (x < 10000) {
  console.log(x);
  x = x * 3;
}


let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i] + " - прекрасное животное");
}



var randomString = "";
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
console.log(Math.floor(Math.random() * alphabet.length));



var alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
var randomString = "";
var stringLength = 6;

while (randomString.length < stringLength) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);



let name = prompt("Как вас зовут?");
console.log("Привет, " + name);


let likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
  console.log("Молодец");
} else {
  console.log("Что ж, не проблема. Все равно ты молодец!");
}


var words = ["программа", "макака", "прекрасный", "оладушек"];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
console.log(remainingLetters);


// Создаем массив со словами
var words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "сталин",
  "обама",
  "путин",
  "трамп",
  "горбачёв",
];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));

  // Запрашиваем вариант ответа
  var guess = prompt("Угадайте Букву или нажмите отмена для выхода из игры.");
  // guess = guess.toLowerCase;
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

//126

var ourFirstFunction = function () {
  document.write("Привет, функция!");
};
ourFirstFunction();

let drawCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(101);

//130

var fu = function (h, w) {
  for (var i = 0; i < h; i++) {
    console.log(i + " " + w);
  }
};
fu(5, "=^.^=");

// 134
let y = function () {
  document.write("My " + 2 + 3);
};
y(5);

//157

let timeUp = function () {
  alert("Время не вышло");
};

setTimeout(timeUp, 5000);
// timeUp();


var doHomeworkAlarm = function () {
  alert("Эй! Пора делать домашку!");
};
var timeoutId = setTimeout(doHomeworkAlarm, 5000);
clearTimeout(timeoutId);


//160

var leftOffset = 0;
var moveHeading = function () {
  $("#heading").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 0;
  }
};
setInterval(moveHeading, 30);

//165

// var dog = {
//   name: "Оладушек",
//   legs: 4,
//   isAwesome: true
// };
// dog.age = 6;
// dog.bark = function () {
//   console.log("Гав-гав! Меня зовут " + this.name + "!");
// };

var speak = function () {
  console.log(this.sound + "! Меня зовут " + this.name + "!");
};

var cat = {
  sound: "Мяу",
  name: "Варежка",
  speak: speak
};

let tiger = {
  sound: 'rrrrr',
  name: 'Sherhan',
  voise: speak
};

// console.log(dog.name);
// console.log(dog);
// dog.bark();

cat.speak();
tiger.voise();




var pig = {
  sound: "Хрю",
  name: "Чарли",
  speak: speak
};
var horse = {
  sound: "И-го-го",
  name: "Мэри",
  speak: speak
};
pig.speak();

horse.speak();

*/
var car = new Car(100, 200);