let i = 1;

function func() {
    console.log(i);
    i++;

    if (i <= 10) {
        func(); // здесь функция вызывает сама себя
    }
}
func();