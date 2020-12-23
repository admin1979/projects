'use strict';
let figure = document.querySelectorAll('.figure');
// alert(figure.innerHTML);
let i;
for (i = 0; i < figure.length; i++) {
    figure[i].addEventListener('click',myFunction);   
}
function myFunction(){
    // alert('Привет');
    figure.style.width = '100px';
}

// figure.addEventListener('click',function(){
//     alert('!!!');
// });


