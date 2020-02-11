// console.error('Hello world!');

// console.clear();

// console.log('Hello user!');

// alert('Hello world!');



//=====================================================================================================
//Что такое объект

/*     const auto = {
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
} */
 

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
//Что такое Массив

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
    console.log(nums[index]);
} else {
    console.log('Not found');
};













