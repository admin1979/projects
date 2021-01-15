<?php
class Grandpa
{
    public $hair = 'Русые';

    public $body = 'Нормальное';

    protected $nose = 'Кривой';

    public function eat($calories)
    {
        if ($calories > 500) {
            $this->body = 'Толстый';
        } else {
            $this->body = 'Худой';
        }
    }
}

class Father extends Grandpa
{
}

$masha = new Father();
$ivan = new Father();
// $masha->nose;

echo 'Тело Маши - ' . $masha->body . '<br>';
echo 'Тело Ивана - ' . $ivan->body . '<br>';
// echo 'Нос Ивана - ' . $ivan->nose . '<br>';

$masha->eat(200);
$ivan->eat(2000);

echo 'Тело Маши - ' . $masha->body . '<br>';
echo 'Тело Ивана - ' . $ivan->body . '<br>';
