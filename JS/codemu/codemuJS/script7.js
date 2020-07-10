// 193.Пользовательские атрибуты

/* let elem = document.querySelector('#elem');
alert(elem.dataset.num); // выведет 1000 

let elem1 = document.querySelector('#elem1');

elem1.addEventListener('click', function () {
    elem1.innerHTML += elem1.dataset.text;
});

let div = document.querySelectorAll('div');


for (let elem of div) {
    elem.addEventListener('click', function () {
        elem.innerHTML += elem.dataset.num;
    });
}


// 194.Пользовательские атрибуты с дефисами в JavaScript

let elem = document.querySelector('#elem');

elem.addEventListener('click', function () {
    elem.innerHTML += '=' + elem.dataset.productPrice * elem.dataset.productAmount + 'руб';
});

*/

// 195.Обращение через методы к data атрибутам в JavaScript

let elem = document.querySelector('#elem');

alert(elem.getAttribute('data-num')); // выведет 1000
alert(elem.getAttribute('data-my-num')); // выведет 2000