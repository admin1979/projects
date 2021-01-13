<?php
class Man
{
    public $hair = 'Русые';

    public $body = 'Нормальное';

    public function eat($calories)
    {
        if ($calories > 500) {
            $this->body = 'Толстый';
        } else {
            $this->body = 'Худой';
        }
    }
}

$masha = new Man();
$ivan = new Man();

echo 'Волосы Маши - ' . $masha->hair . '<br>';
echo 'Волосы Ивана - ' . $ivan->hair . '<br>';

$masha->hair = 'Белые';

echo 'Волосы Маши - ' . $masha->hair . '<br>';
echo 'Волосы Ивана - ' . $ivan->hair . '<br>';

$masha->eat(200);
$ivan->eat(2000);

echo 'Тело Маши - ' . $masha->body . '<br>';
echo 'Тело Ивана - ' . $ivan->body . '<br>';
