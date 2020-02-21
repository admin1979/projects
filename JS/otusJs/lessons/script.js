   
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
*/

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



