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
 */
const firstName = 'Denis';

let value;

value = firstName.indexOf('n');

console.log(value);
console.log(typeof value);

//008 Шаблонные строки----------------------------------------------------------------------
const f = "Denis";
const l = 'Minin';
const age = 13;

let str;

str = '<ul>' +
    '<li>Имя бля:' + f + '</li>' +
    '<li>Фамилие:' + l + '</li>' +
    '<li>ВозростФундаминтальный:' + age + '</li>' +
    '</ul>';

//ES6
str = `
    <ul>
        <li>Куё моё: ${f}</li>
        <li>Фамилиё: ${l}</li>
        <li>возрастт:${age}</li>
        <li>ПИ:${Math.random()}</li>
    </ul>
`;

document.body.innerHTML = str;