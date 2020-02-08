/* console.error('Hello world!');

console.clear();

console.log('Hello user!');

alert('Hello world!');
*/


//----------------------------------------------------------
//Что такое объект

/* const auto = {
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
 */

//-------------------------------------------------------------- 
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

console.log(auto);
