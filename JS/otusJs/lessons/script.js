/* console.error('Hello world!');

console.clear();

console.log('Hello user!');

alert('Hello world!');
*/

const auto = {
    model: "Kalina",
    color: "Red",
    year: 2012
}

const input = prompt('Enter a property:');
const value = auto[input];

if (value) {
    console.log(value);
} else {
    console.log('Not found');
}

