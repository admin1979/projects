<?php
class User
{
    public $name;
    public $age;

    // Создаем метод:
    public function show($str)
    {
        return $str . '!!!';
    }
}

$user = new User;
$user->name = 'Коля';
$user->age = 25;

// Вызовем наш метод:
echo $user->show('hello'); // выведет '!!!'
echo $user->name;
?>

