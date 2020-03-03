   
   /*
    console.error('Hello world!');

    console.clear();

    console.log('Hello user!');

    alert('Hello world!');



//=====================================================================================================
//Что такое объект

     const auto = {
    model: "Kalina",
    color: "Red",
    year: 2012
};

const input = prompt('Enter a property:');
const value = auto[input];

if (value) {
    console.log(value);
} else {
    console.log('Not found');
} 
 

//==================================================================================================================
//Добавление и удаление свойств

    const auto = {
    model: "Kalina",
    color: "Red",
    year: 2012
};

const input = prompt ("Enter a property: ");
const hasProp = input in auto; //есть или нет такое свойство в объекте

if(hasProp) {
  delete auto[input];
} else {
    auto[input] = null;
}

//console.log(auto); 

//===========================================================================================================
//Копирование объектов / Ссылка на объект

let value = {
    width: 150,
    color: 'green'
};

let newValue = value;

value.width = 170;

// console.log(newValue);
// console.log(value);

//-------------------//
const block = {};
block.width = 140;
block.color = 'blue';

// console.log(block);

//------------------//
let obj = {
    width: 190,
    height: 350,
    color: 'yellow',
    age: 15
};

let clone = Object.assign ({},obj);  

// console.log(clone);
//------------------//

let obj = {width: 120, color: 'grey', speed: '25 km/h'};

Object.assign (obj,{width: 900, height: 500, speed: '100 km/h'});

// console.log(obj);
//-----------------//

let obj = {width: 180};

Object.assign (obj, {width: 600},{height: 100});

// console.log(obj);
//-----------------//

let product = {numberProduct: 133, storageSpace: 99, weight: '94 kg'};

let item = Object.assign (product,{price: "100 руб"});

// console.log(item);

//-----------------//

const storeGood = {
    number: 1001,
    place: 'A101',
    weight: 25
};

const shopGood = Object.assign({}, storeGood, {cost: 10});

storeGood.number = 2000;

// console.log(storeGood, shopGood);

//=========================================================================================================================
//2.1.4 Деструктуризация объектов. Запись свойств.
let block = {
    width: 170,
    height: 90
};

let width = block.width;

// console.log(width);
//-------------------------//

let block = {
    width: 170,
    height: 90,
    price: 290,
    type: 'Solid'
};

let width = block.width;
let height = block.height;
let price = block.price;
let type = block.type;

// console.log(width, height, price, type);

//------------------------------------------------//
let block = {
    width: 170,
    height: 90,
    price: 290,
    type: 'Solid'
};

let {width, height, price, type} = block;

// console.log(width, price);


//------------------------------------------------//
let block = {width: 170, height: 90};

let {width, height:CamelCase1} = block;

// console.log(CamelCase1);

//-------------------------------------------//
let block = {
    width: 170
};

let{width, height = 100} = block;

// console.log(block);
// console.log(width);
// console.log(height);

//---------------------------------//
let block = {
    width: 170,
    height: 90,
    price: 290,
    type: 'Solid'
};

let  {width, height, ...rest} =block;

let {type, ...rest1} = block;

// console.log(rest);
// console.log(rest1);

//--------------------------------------//
let block = {
    width: 170, 
    height: {value:50, 
        unit: 'cm'}};
let {height, ...rest2} = block;
// console.log(rest2);

//---------------------------------------//

let block = {width: 170, height: {value:50, unit: 'cm'}};
let {height} = block;
// console.log(height);

//--------------------------------------------------//
let block = {
    width: 170, 
    height: {value:50, 
        unit: 'cm'}
    };

let {width, height: {value, unit}} = block;

// console.log(unit, value);

//-------------------------------------------------//
let example = {
    width: 10,
    height: 15,
    length: 25,
    beauty: {chest: 90, 
            waist: 60, 
            hips: 90}
};

let {width, height, length, beauty: {chest, waist, hips}} = example;

// console.log(chest+waist+height);

//----------------------------------------------------//
let person = {
    name: 'Sam',
    years: 25
};

let {name, years:age, height = null} = person;

// console.log(name, age, height);

//======================================================================================================
//======================================================================================================
//Массивы. Что такое Массив

// 1  2  3  4  5  6  7  8  9  
//[ ][ ][ ][ ][ ][ ][ ][ ][ ]

const arr = [];
//----------------------------------------//
const nums = [2, 3, 4, 1, 2, 3];
const greets = ['hi', 'Hello'];
//---------------------------------------//

const nums = [2, 3, 4, 1, 2, 3];
const length = nums.length;
// console.log(length);
// console.log(nums);
//----------------------------------------//
const nums = [2, 3, 4,"CamelTrophy", 2, 3];
const element = nums[3];
// console.log(element);
//---------------------------------------//
const nums = [2, 3, 4,"CamelTrophy", 2, 3];
const element = nums[30];
// console.log(element);
//---------------------------------------//
const nums = [2, 3, 4,"CamelTrophy", 2, 3];
nums [3] = 20;
console.log(nums);
//---------------------------------------//
const nums = [10, 20, 30, 40, 50];
const index = nums.indexOf(30);
// console.log(index);
//---------------------------------------//
const nums = [10, 20, 30, 40, 50, 63, 49];
const index = nums.indexOf(49);
// console.log(index);
//---------------------------------------//
const nums = [10, 20, 30, 40, 50, 63, 49];
const index = nums.indexOf(35);
// console.log(index);
//---------------------------------------//
const nums = [10, 20, 30, 30, 40, 50, 63, 49];
const index = nums.indexOf(30);
// console.log(index);
//---------------------------------------//

const nums = [23,12,25,35,28];

const input = +prompt('Enter a number: '); //плюс означает требование ввести числовое значение?
const index = nums.indexOf(input);

if (index > -1) {                         // -1 это означает что значения нет в массиве 
    //console.log(nums[index]);
} else {
    //console.log('Not found');
};

//=====================================================================================================
//2.2.2 Добавление и удаление элементов в массив

const nums = [10, 20, 30];
nums.push(40, 'CamelCase');
                               
//console.log(nums);
//---------------------------------------------------------//

const nums = [10, 20, 30];
nums.unshift(50);

//console.log(nums);
//-----------------------------------------------------//

const nums = [10, 20];
nums[4] = 40;

//console.log(nums);
//------------------------------------------------------//

const arr = [];
for(let i = 0; i < 5; i++) {
    let input = prompt('Enter a five number: ');
    arr.push(input);
}

//console.log(arr);

//--------------------------//

for (let i = 0; i<=40; i = i + 5) { // Это относиться к циклу for (учитель забежал вперёд курса)
    //console.log(i);
} 
//--------------------------//

const nums = [10, 20, 30];
delete nums[1];

console.log(nums);

//--------------------------//
const nums = [10, 20, 30];

nums.splice(1, 1);

console.log(nums);

//------------------------//
const nums = [10, 20, 30];

nums.pop();

console.log(nums);

//------------------------//

const nums = [10, 20, 30];  
const element = nums.pop();
nums = [20, 30];                    //не работает

console.log(nums);

//--------------------------//
const nums = [10, 20, 30];  
const element = nums.shift();
nums = [20, 30];                    //не работает

console.log(nums);
//--------------------------//

const nums = [2,12,34,23,21];

const input = +prompt('Enter a value: ');
const index  = nums.indexOf(input);

if (index > -1) {
    nums.splice(index, 1);
}

//console.log(nums);  

//=========================================================================================================
//2.2.3 Изменение массива

const first = [10, 20, 'CamelCase111'];
const second = [30, 40, 'CamelCase222'];

const arr = first.concat(second);

console.log(arr);
//-------------------------------------------

const first = [10, 20, 'CamelCase111'];
const second = [30, 40, 'CamelCase222'];

const arr = second.concat(first);

console.log(arr);
//------------------------------------------------

const arr = [10, 20];

const newArr = arr.concat(5, 6, 7, 'You');

console.log(newArr);
//------------------------------------------------

const arr = [10, 20];
const newArr = arr;
arr.push(22);

console.log(newArr);

//-------------------------------------------------
const arr = [10, 20];
const newArr = arr.concat();
arr.push(22);

console.log(newArr);
console.log(arr);

//-------------------------------------------------

const nums = [10, 20, 30, 40];
const str = nums.join();

console.log(str);
//--------------------------------------------------

const nums = [10, 20, 30, 40];
const str = nums.join('-_*_-');

console.log(str);

//--------------------------------------------------
const nums = [10, 20, 30, 40];
const str = nums.join('');

console.log(str);

//--------------------------------------------------

const str = '12,13,14,15';
const arr = str.split(',');

console.log(arr);

//--------------------------------------------------

const str = '12,13,14,15';
const arr = str.split();

console.log(arr);

//---------------------------------------------------

const str = 'JavaScript';
const arr = str.split('');

console.log(arr);

//---------------------------------------------------

const nums = [12,17,89,4,8];

const input = prompt('Enter a numbers: ');

const userArr = input.split(',');

const newArr = nums.concat(userArr);

console.log(newArr);


//======================================================================================
//2.2.4 Перебор массива

const nums = [10, 20, 30, 40];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

//-------------------------------------
const nums = [10, 20, 30, 40];

for (let i=0; i < nums.length; i++) {
    console.log(nums[i]);
}

//-------------------------------------
const nums = [10, 20, 30, 40];

nums.forEach(function (el) {
    console.log(el);
});

//-------------------------------------
const nums = [12, 23, 31, 47];
let sum = 0;

nums.forEach(function(el){
    sum = sum + el;
    console.log(sum);
});

//-------------------------------------
const nums = [10, 20, 30, 40];

nums.forEach(function(el, i){
    console.log(i);
});

//------------------------------------
const nums = [10, 20, 30, 40];
                                            
nums.map(function(el) {
    let modified = el + 2;
    return modified; 
    console.log(nums);  
}); // не работает

//------------------------------------
let arr = [12, 23, 34, 53, 89];
arr = arr.map(function(el){
    let newValue;

    if (el % 2 == 0) {
        newValue = (el+1000)*3;
    } else {
        newValue = el;
    }

    return newValue;
});
console.log(arr);

//----------------------------------
const arr = [2, 6, 4, 8];

let match = arr.find(function(el) {
    return el > 5;
});

console.log(match);

//-----------------------------------
const arr = [2, 6, 4, 8];

let match = arr.find(function(el) {
    return el > 9;
});

console.log(match);

//---------------------------------------
const arr = [2, 6, 4, 8];

let filtered11111 = arr.filter(function(el) {
    return el > 5;
});

console.log(filtered11111);

//-----------------------------------------

const arr = [2, 6, 4, 8];

let filtered11111 = arr.filter(function(el) {
    return el > 10;
});

console.log(filtered11111);

//--------------------------------------------


const arr = [3,15,6,23,43];

const input = +prompt('Enter a number: ');

const newArr = arr.filter(function(el){
    return el < input;
});

console.log(newArr);

//=============================================================================
//2.2.5 Деструктуризация массива

let nums = [10, 20, 30];

let firstNum = nums[0];
let secondNum = nums[1];
let thirdNum = nums[2];

console.log(thirdNum);
console.log(secondNum);
console.log(firstNum);
//--------------------------------

let nums = [10, 20, 30];

let[secondNum, firstNum, thirdNum] = nums;

console.log(nums);
//------------------------------------------

let username = 'John Smith Ivanovich';

let [fName, sName, familia] = username.split(' ');

console.log(familia);
//------------------------------------------

let nums = [10, 20, 30];

let[num1, ,num2] = nums;

console.log(num1, num2);
//------------------------------------------

let nums = [10, 20];

let [num1, num2, num3=50] = nums;

console.log(num1, num2, num3);
//------------------------------------------

let nums = [10,20,30,40,50,60,'CamelCase'];

let [num1, num2, ...rest] = nums;

console.log(rest);
console.log(num1, num2);
//------------------------------------------

const olipics = [12, 23, 45];

let [gold=0, , bronze=0] = olipics;

console.log(gold, bronze);

//------------------------------------------

const olipics = [12, 23];

let [gold=0, , bronze=0] = olipics;

console.log(gold, bronze);

//------------------------------------------

const olipics = [12, 23];

let [gold, , bronze=14] = olipics;

console.log(gold, bronze);

//============================================================================================
//============================================================================================

//1.2.1 Что такое переменная
//1.2.2 Как объявить переменную

let value = 157;

//Можно изменять
let value = 157;
value = 189;
console.log(value);

//Можно объявить пустой
let value;
value = 157;
console.log(value);

//---------------------------------------

const value = 17;

//Нельзя изменять
const value = 157;
value = 189;
console.log(value);// не выйдет

//Нельзя объявить пустой
const value;
value = 157;
console.log(value); //не выйдет

//--------------------------------------

const value = 250;
value = 150;

console.log(value); //не выйдет

//--------------------------------------

let value;

console.log(value); //undefined
value=250;

//--------------------------------------

console.log(value); //undefined  
var value = 157; 

//----------------------------------------

var value = 157;

//тоже самое, что и 
var value;
value = 157;        // Хоистинг  

//----------------------------------------

var value1 = 157;
var value2 = 517;
value1 = 256;

//тоже самое, что и 
var value1;
var value2;

value1 = 157;
value2 = 517;
value1 = 256;

console.log(value1, value2); // Хоистинг 

//==================================================================================================
//==================================================================================================

//Типы данных
//Строки 
const firstString = 'First message';
const secondString = 'Second message';

const sum = firstString + secondString;

console.log(sum);

//--------------------------------------

const firstString = 'First message';
const secondString = 'Second message';

const sum = firstString + ' ' + secondString;

console.log(sum);
//---------------------------------------

const firstName = 'Yan';
const secondName = 'Petrichenko';

console.log('Hello,' + firstName + ' ' + secondName);
//------------------------------------------------------

const name = 'Yanis';
const greet = `Oh, hi ${name}`;

console.log(greet);
//----------------------------------------------------

const firstName = 'Yan';
const secondName = 'Petrichenko';

console.log(`Hello, ${firstName} ${secondName}`);
//----------------------------------------------------

prompt('Enter you name');

//---------------------------------------------------
const name = prompt('Name?');
console.log(`Oh, hi ${name}`);

//------------------------------------

const name = 'Vladimir';

console.log(name.length);

//--------------------------------------


const name = prompt('Enter a word ');

console.log(name.length);

//--------------------------------------

const name = prompt('Enter a word ');
const length111 = name.length;

console.log(length111);

//=========================================================================================
//1.3.2 Числа

const num = 25.45;

const num1 = .45;

const num12 = (5 % 4);
console.log(num12);        //остаток от деления = 1

//-----------------------------------------------------

let num4 = 5;

num4++;
num4++;

console.log(num4); // =7

//------------------------------------------------------

let num4 = 5;

num4--;
num4--;

console.log(num4); // =5

//-------------------------------------------------------
const Kb =15;
const bit = 15 * 1024 * 8;

console.log(bit);

//--------------------------------------------------------

const sum = 0.1 + 0.4;

console.log(sum.toFixed(3)); //вывод до третьего знака

//----------------------------------------------------------

const sum = 0.1 + 0.4;

console.log(+sum.toFixed(3)); //убрать нули???

//----------------------------------------------------------

const num22 = +prompt('Enter a mile ');

const mi = num22;

const km = (mi*1.61);


console.log(km);

//-----------------------------------------------

const miles = prompt('Enter miles: ');

const kilometers = miles * 1.6;

console.log(+kilometers.toFixed(2)); //плюс означает перевод значения из строки в числовое

//---------------------------------------------

const str = 'Text';
const num = 256;

console.log(str * num); // =NaN

//---------------------------------------------

const num = 256;
const zero = 0;

console.log(num/zero);

//========================================================================================
//1.3.3 Булевый тип, undefined и null

//===================================================================================
//1.3.4 Как определить тип данных
const type = typeof(5);

console.log(type);

//---------------------------------------------
const type = typeof('Ivan');

console.log(type);

//-------------------------------------------

const value = 250;
const type = typeof(value);

console.log(type);

//-------------------------------------------

const v1 = typeof(true);
console.log(v1);
//-------------------------------------

const v1 = typeof(string);
console.log(v1);
//-----------------------------------------

const v1 = typeof(underfined);
console.log(v1);

//-----------------------------------------

const v1 = typeof(null);
console.log(v1);
//-----------------------------------------

let value;
let double = typeof typeof value;
console.log(double);

//тоже самое что и предыдущее, udefined строка оказывется!
let value;
let double = typeof (typeof (value));
console.log(double);

//====================================================================================================
//1.3.5 Преобразование типов

const value = 25 / '5';
console.log(value); //= 5
//-------------------------------

const value = 25 + '5';
console.log(value); //= '255'
//-------------------------------

const value = '157';
console.log(+value); // = 157

//-------------------------------

const value = Number('157');

console.log(typeof value);

//------------------------------
const value = Number('sadsaddfdf157');
console.log(value);

//-----------------------------------

const num = Number(undefined);
console.log(num);
//----------------------------------

const num = Number(null);
console.log(num); //= 0

//--------------------------------

const qWn11 = Number(true);
console.log(qWn11);

//-------------------------------

const wwWWww = Number(false);
console.log(wwWWww);

//-------------------------------

const summ = 125 + true;
console.log(summ); //= 126

//-------------------------------

const summ = 125 / false;
console.log(summ); // = infinity

//--------------------------------

const strrr = "25" + 10;

const trrr = strrr;
console.log(strrr);
console.log(trrr);

//--------------------------------

const sum = 4 + 5 + '7';
console.log(sum); //= 97

//---------------------------------

const num = 24;
const str = String(num);
console.log(typeof str); //string

//----------------------------------

String(null); //=null
String(undefined); //=undefined
String(true); //=true
String(false); //=false

//----------------------------------

Boolean(0);
Boolean('');
Boolean(NaN);              //false
Boolean(undefined);
Boolean(null);

//-----------------------------------


const a = "" + 1 + 0;   
const b = "" - 1 + 0;
const c = true + false;
const d = 6 / '3';
const e = "2" * "3";
const f = 4 + 5 + 'px';
const g = "$" + 4 + 5;
const h = "4" - 2;
const i = '4px' - 2;
const j = 7 / 0;
const k = " -9 " + 5;
const l = " -9 " - 5;
const m = null + 1;
const n = undefined + 1 ;

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m, n);


//================================================================================================
//================================================================================================

//4. Логические выражения

//1.4.1 Сравнение значений

const com = 25 > 15;
console.log(com); //true
//--------------------------------------------
const com = 25 < 15;
console.log(com); // false

//--------------------------------------------

const valuee = 12;
const comp = valuee < 15;

console.log(comp);

//---------------------------------------------

const v1 = 13;
const v2 = v1 > 14;

console.log(v2);

//----------------------------------------------

const value = 12;

const comp = value - 11 + 30 != 30;  // не равно 30

console.log(comp);

//----------------------------------------------
const value = 10;
const a = value - 1 != 10;
console.log(a);

const value = 10;
const a = value - 1 < 10;
console.log(a);

const value = 10;
const a = value - 1 <= 10;
console.log(a);

const value = 10;
const a = value - 5 > 4;
console.log(a);

const value = 10;
const a = value - 1 <= 9;
console.log(a);

const value = 10;
const a = value - 1 <= 9;
console.log(a);

const value = 10;
const a = value - 19 <= -9;
console.log(a);

//-----------------------------------------------------

const value = 20;
const b = value > 21;
console.log(b);

const value = 20;
const b = value != 20;
console.log(b);

const value = 20;
const b = value - 1 + 1 < 20;
console.log(b);

const value = 20;
const b = (value * 10) + (500 / 10) <= 21;
console.log(b);

const value = 20;
const b = value >= 21;
console.log(b);

//-----------------------------------------------------

const com = 5 < '25';

console.log(com); //true
//-----------------------------------------------


const com = 5 < 'text25';

console.log(com); //false

//---------------------------------------------------

const s = 157 == '157';

console.log(s); // true приведение к числу

//---------------------------------------------------

const s = 157 === '157';

console.log(s); // false строгое сравнение

//----------------------------------------------------

const simple = 5 != '5';
console.log(simple); // false

//---------------------------------------------------

const strict = 5 !== "5";
console.log(strict); // true

//---------------------------------------------------
const value = +prompt('Enter a positive value: ');
const p = value > 0;
console.log(p);

//==============================================================================================

//1.4.2 Логические выражения

first && second // и (логическое умножение, оно будет истинным когда истинны оба значения )

first || second // или (логическое сложение, будет истинным когда истинно хотя-бы одно значение)

/!first не (меняет значение на противоположное, true на false и обратно)

//--------------------------------------------------------------------------------------------------

const q = (25 > 5) && (11 != "txt");

console.log(q); //true

//-------------------------------------

const w = (1 == "One") || (5 >= 10);

console.log(w);

//-------------------------------------

const w = (1 == "One") || (5 < 10);

console.log(w);

//-------------------------------------

const e = !(25 > 7);

console.log(e);

//-------------------------------------

const r = (25 > 5) || (5 > 10) || (25 > 7);

console.log(r); //true

//--------------------------------------

const r = (25 > 5) || (5 > 10) && (25 > 7);

console.log(r); //true

//----------------------------------------

const r = (25 > 5) || (5 > 10) || (5 > 7);

console.log(r); //true

//-----------------------------------------

const r = (25 > 5) || (5 > 10) && (5 > 7);

console.log(r); //true х.з почему

//-----------------------------------------

const num = prompt('Enter a положительное двузначное число: ');

const compare = (num >= 10) && (num <= 99) || (num <= -10);

console.log(compare);

//----------------------------------------------
//Порядок выполнения операций: НЕ, И , ИЛИ 
                               
const tut = !('5' === 5) || (5>=10) && (25>7);

console.log(tut);
//---------------------------------------------

const rt = (12 < 5) || !('one' === 'one') && (24 > 0);

console.log(rt);

//-------------------------------------

const y = null && !(17>4) || ('text'.length===4);

console.log(y);

//=========================================================================================================
//=========================================================================================================
// 5. Условия
//1.5.1 Оператор if-else.

if (условие) {

    действия

}

const age = prompt("Введите свой возраст: ");

if(age<18) {
    alert("Доступ запрещен!");
}

//---------------------------------------------

let a = 9; // const нельзя использовать, только let, иначе не будет работать

if (a > 10) {

    a = a + 5;

} else {

    a = a -5;

}

console.log(a);

//------------------------------------------------

let i = 5;

if (i == '5') {

} else if (i > 1) {

} else if (i <= 5) {

} else {
                         
}

console.log(i);

//-------------------------------------------------
const age = prompt('Enter you age: ');

if (age < 18) {
    alert("Too yang");
} else if (age > 75) {
    alert('Too old');
} else {
    alert('Acces granted');
}

//----------------------------------
//тоже самое, что и предыдущее, только в одну строку
const age = prompt('Enter you age: ');

if (age < 18) {alert("Too yang");} else if (age > 75) {alert('Too old');} else {alert('Acces granted');}

//---------------------------------------------------

let outer = 15;

if (outer > 10) {
    let inner = 5;
    console.log(outer);
    console.log(inner);
}

console.log(inner); //oшибка, т.к переменные объявленные внутри {} не будут видны вне условного оператора

//=============================================================================================================
//1.5.2 Условный оператор

const cost = 500;
let cattegory;

if (cost > 500) {
    cattegory = 'high price';
} else {
    cattegory = 'low price';
}

console.log(cattegory);

//-----------------------------------------


//(условие) ? знач! : знач2

const cost = 500;

let cattegory = (cost > 500) ?
'high price' : 'low price';

console.log(cattegory);

//-----------------------------------------
const sym = prompt("M for male, F for female: ");

const gender = (sym === 'M') ? 'male' : 'female';

console.log(gender);

//=====================================================
//1.5.3 Оператор switch.

const city = prompt('Enter city name: ');
let cost;

switch(city) {
    case 'Moscow':
        cost = 3500;
        console.log(cost);
        break;

    case 'Kazan':
    case 'St. Petersburg':
        cost = 5000;
        console.log(cost);
        break;

    default:
        alert('All tickets are sold!');
}

//-----------------------------------------------

const city = prompt('Enter city name: ');
let cost;

if (city == 'Moscow') {
    cost = 3500;
    console.log(cost);
} else if (city == 'Kazan' || city == "St.Petersburg") {
    cost = 5000;
    console.log(cost);
} else {
    alert('All tickets are sold!');
}

//--------------------------------------------------

let num = prompt('Enter a number');

if (num == 0) {
    alert(1);
}
if (num == 1) {
    alert(1);
}
if (num == 2 || num == 3) {
    alert('2,3');
}

//---------------------------------------------------

let num = +prompt('Enter a number');

switch (num) {
    case 0:
        alert(0)
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
}

//==========================================================================================
//==========================================================================================
//6.Циклы 
//1.6.1 Цикл while

let count = 0;

while (count < 4) {

    count++;

}           

console.log(count);

//-----------------------------------------------

let sum = 0;
let number = 1;

while (number <= 100) {
    sum = sum + number;
    number = number + 1;
}

console.log(sum);

//----------------------------
//тоже самое что и предыдущее
let sum = 0;
let number = 1;

while (number <= 100) {
    sum = sum + number;
    number++;
}

console.log(sum);

//--------------------------------

//похоже но ответ другой
let sum = 0;
let number = 1;

while (number++ <= 100) {
    sum = sum + number;
   
}

console.log(sum);

//---------------------------------

//тоже самое что и предыдущее, но показывает весь путь до цифры
let sum = 0;
let number = 1;

while (number <= 100) {
    sum = sum + number;
    number++;
    console.log(sum);
}

//---------------------------------

let sum = 0;
let number = 1;

while (number++ <= 100) {
    sum = sum + number;
    console.log(sum);
}

//===================================================================================================

//1.6.2 Цикл do while

let value = 0;

do {

    value++;

} while (value < 5);

console.log(value);

//-----------------------------------
//без постусловия
let num = 0;

while (num < 0) {  //условие не выполнено и num не делает ++
    num++
}

console.log(num);

//-------------------------------
//с постусл
let num = 0;

do {
    num++;
} while (num < 0); //условие так-же как и предыдущем не выполнено, но результат другой

console.log(num);

//--------------------------------

const res = (254 * 7) + (124 - 16)/9;

let input;

do {
    input = prompt('(254*7)+(124-16)/9 = ?');
} while (input != res);

console.log('Success');


//==================================================================================================
//1.6.3 Цикл for

//for (счётчик; условие; шаг) {

//}

for (let i=0; i<=5; i++) {
    console.log(i);
}
//----------------------------

for (let i = 0; i <= 10; i = i + 2) { // если бы я написал i + 2 то получился бы бесконечный цикл и повискомп
    console.log(i);
}

//--------------------------------------------------

const input = +prompt('Enter a number: ');

let factorial = 1;

for(let i = 1; i <= input; i++) {
    factorial = factorial * i;
}

console.log(factorial); // РАЗОБРАТЬСЯ!

//================================================================================
//1.6.4 Прерывание цикла

for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

//-------------------------------------

let count = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
    console.log(i);
    }
}

//-------------------------------------

let count = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
    }

    if (count === 3) {
        result = i;
        console.log(i);
    }
}

//-----------------------------------

let count = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
    }

    if (count === 3) {
        result = i;
        break;
    }
}

console.log(result);

//------------------------------------

let sum = 0;

while (true) {
    const input = prompt('Enter a number or = ');

    if (input == '=') {
        break;
    } else {
        sum = sum + Number(input);
    }
}

console.log(sum);


//============================================================================
//============================================================================

//3. Функции

function sum(a, b) {
    return a + b;
}

//--------------------------

function sum(a, b) {
    return a + b;
}

//---------------------------

function sum111(a, b) {
    return a + b;
}

const val22 = sum111(5, 6);

console.log(val22);

//----------------------------

const num1 = 5;
const num2 = 8;

function summm(a, b) {
    return a + b;
}

const val = summm(num1, num2);

console.log(summm); //Не складывает?????????????????????

//--------------------------------

function sayHello() {
    return "Hello";
}

const val = sayHello();

console.log(val);

//--------------------------------

function calc(num, exp) {
    let res = 1;

    for(let i = 1; i <= exp; i ++) {
        res = res * num;
    }

    return res;
}

const result = calc(3, 2);
console.log(result);

//-----------------------------------

const fun = function (a) {
    ...
}

//------------------------------------

//тоже самое, что и предыдущее

const fun = (a) => {
    ...
}

//------------------------------------

conast sum = (a, b) => {
    return a + b;
}

//-------------------------------------

const area = (a, b) => {
    return a * b;
}

const result = area(5, 4);
console.log(result);

//------------------------------

const area = (a, b) => {
    if ((a>0)&&(b>0)) {
        return a * b;
    } else {
        return null;
    }
}

const result = area(5, -4);
console.log(result);

//==========================================
//2.3.2 Область видимости

//2.3.3 Замыкания

function fun() {
    let message = 'hello';

    return function () {
        console.log(message);
    }
}

const value = fun();
value();

//-------------------------------------------------

function outer () {
    return function () {
        console.log('+');
    }
    
}

const value = outer();

value();

//-------------------------------

function outer () {
    let message = 'Hello';

    return function () {
        console.log(message);
    }
    
}

const value = outer();

value();

//-------------------------------

function outer () {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const value = outer();

value();
value();
value();
value();
value();

//====================================================================================

//2.3.4 Асинхронные операции

setTimeout(() => {              //задержка функции
    console.log('now!');
}, 1000);

//-----------------------------------

const id = setTimeout (() => {
    ...
}, 1000);

clearTimeout(id); // хз что??????

//------------------------------------

function logger() {
    console.log('now');
}

setTimeout(logger, 3000);

//-------------------------------------

function sum(a, b, c) {
    console.log(a+b-c);
}

setTimeout(sum, 4000, 5, 2, 1);
//-------------------------------------

setInterval(() => {
    console.log('now1');
}, 2000);                     //бесконечно как цикл

//--------------------------------------

function counter (from, to) {
    let number = from;

    const id = setInterval(() => {
        console.log(number);

        if (number == to) {
            clearInterval(id);
        } else {
            number++;
        }
    }, 3000);
}

counter(4, 18);

//==============================================================================

//2.3.5 Колбэк-функции

const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log("resposeee");
        const data = {text: 'Hello'};
        cb(data);
    }, 2000);
}

const handler = (data) => {
    console.log('handler', data);
}

request(handler);

//--------------------------------------------

const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log("resposeee");
        const data = {text: 'Hello'};
        cb(data);
    }, 2000);
}

request((data) => {
    console.log('Hello callback', data);
});

//------------------------------------------

const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log("resposeee");
        const data = {text: 'Hello'};
        cb(data);
    }, 2000);
}

const handler = (data) => {
    console.log('handler', data);
}

request(handler);

//--------------------------------------------

const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log("resposeee");
        const data = {text: 'Hello'};
        cb(data);
    }, 2000);
}

request((err, data) => {
    if (!err){
    console.log('Hello callback', data);
    } else {
        console.error(err);
    }  
});

//============================================================================
//2.3.6 Promise

new Promise ((resolve, reject) => {
    // асинхронная операция
});

//----------------------------------

const prom = new Promise (...);

Promise.then(() => {
    // вызван resolve
}, () => {
    // вызван reject
});

//-----------------------------------

const request = new Promise((resolve222, reject111) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        reject111();
    }, 2000); 
});

request.then(() => {
    console.log('resolved'); 
},
() => {
    console.log('rejected');
});

//-----------------------------------


const request = new Promise((resolve222, reject111) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        resolve222();
    }, 2000); 
});

request.then(() => {
    console.log('resolved'); 
},
() => {
    console.log('rejected');
});

//===========================================================================
//2.3.7 Контекст вызова функции.

const person = {
    name: "John Smith",
    sayHi: function() {
        console.log('Hi');
    }
};

person.sayHi();

//---------------------------------
//тоже самое что предыд
const person = {
    name: 'John Smith',
    sayHi() {
        console.log('Hi');
    }
};
person.sayHi();

//----------------------------------

const person = {
    name: 'John Smith',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};
person.sayHi();

//------------------------------------

const person = {
    name: 'John',
    changeName(str123) {
        this.name = str123;
    }
};

person.changeName("Sam");
console.log(person.name);

//--------------------------------------

function greet() {
    console.log('hello' + ' ' + this.name);
}

const user1 = { name: 'Sam' };
const user2 = { name: 'John' };

user1.f = greet;
user2.f = greet;

user1.f(); //hello Sam
user2.f(); //hello john

//----------------------------

const calc = {
    a: 0,
    b: 0,
    sun:function() {
        console.log(this.a + this.b);
    },
    mul() {                  //:function можно не писать, это по новому
        console.log(this.a * this.b);
    },
    write(a, b) {
        this.a = a;
        this.b = b;
    }
};

calc.write(5, 9);                    // Не понял!!!!!!!!!!!!!!!!!!!!!!!!
calc.sum();

//------------------------------------------------------------------
//2.3.8 Изменение контекста вызова

const person = {
    name: "John",
    greet() {
        console.log(`I'm ${this.name}`);
    }
};

const user = { name: 'Sam'};

person.greet.call(user);

//-------------------------------------

const person = { name: 'John' };
const user = { name: 'Sam' };

function greet() {
    console.log(`I'm ${this.name}`);
}

greet.call(user);

greet.call(person);
                                                //Функции пройти заново!!!!!!!!!!!!!!!!!!!!!!!!

//================================================================================================
//================================================================================================
//3. Работа с DOM
//3.1.1 Что такое DOM

//document.body.style.background = '#f00';          к примеру изменение фона тега боди

//================================================================================================
//3.1.2 Поиск элементов

//let el = document.querySelector('div'); находит самый первый div

//let el = document.querySelectorAll('div'); находит все div

const el = document.querySelector('.last');
el.style.color = 'blue';

//=====================================================================================
//3.1.3 Изменение элементов

const input = prompt('Enter a text');
const el = document.querySelector('.title');

el.innerText = input;
//-----------------------------------------------

const input = prompt('Enter a text');
const el = document.querySelector('.title');

el.innerHTML = `<i>${input}</i>`;


const outer = document.querySelector('p');
                                            //добавление элемента
outer.append(el);

const input = prompt('Enter a message');

const messageEl = document.createElement('p');
messageEl.innerText = input;

const messageBox = document.querySelector('.messages');
messageBox.append(messageEl);

setTimeout(removeMessage, 2000);

function hideMessage() {
    messageEl.hidden = true;
}

function removeMessage() {
    messageEl.remove();
}
*/

//=================================================================================
//3.2.2 Обработка событий

//.addEventListener(событие, обработчик); это метод

const button = document.querySelector('.button');

button.addEventListener('click', hideText);

function hideText() {
    const text = document.querySelector('.text');
    text.hidden = true;

    const button = document.querySelector('.button');
    button.removeEventListener('click', hideText);
    button.addEventListener('click',showText1);
}

function showText1() {
    const text = document.querySelector('.text');
    text.hidden = false;

    const button = document.querySelector('.button');
    button.removeEventListener('click', showText1);
    button.addEventListener('click', hideText);

}

//==================================================================================
//==================================================================================
//4. Встроенные инструменты
// 1. Даты









