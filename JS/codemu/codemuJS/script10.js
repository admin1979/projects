// 220.Создание и вставка элементов на JavaScript

/* let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.innerHTML = '!';

parent.appendChild(p); 

let parent = document.querySelector('#parent');
let li = document.createElement('li');
li.innerHTML = 'пункт';
parent.appendChild(li);
// 221.Привязывание событий при вставке элементов

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.innerHTML = 'текст из абзаца';

p.addEventListener('click', function () {
    alert(this.innerHTML); // по клику выведем текст абзаца
});

parent.appendChild(p);

*/


let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = 'пункт';
    parent.appendChild(li);
});

// 222.Создание элементов в цикле на JavaScript