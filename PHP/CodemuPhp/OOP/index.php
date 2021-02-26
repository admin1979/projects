<?php
class Employee
{
    public $name;
    public $age;
    public $salary;

    public function show()
    {
        return $this ->name;
    }

    public function show2()
    {
        return $this ->age;
    }

    public function show3()
    {
        return $this ->salary;
    }

    public function checkAge()
    {
        if ($this->age > 18)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}

$Empl = new Employee;
$Empl ->name = 'Вася';
$Empl ->age = 19;
$Empl ->salary = 100500;


echo $Empl ->name;
echo "\r";
echo $Empl ->show();
echo "\r";
echo $Empl ->show2();
echo "\r";
echo $Empl ->show3();
echo "\r";
echo $Empl ->checkAge();
echo "\r";


