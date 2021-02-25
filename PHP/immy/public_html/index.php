
<?php

define('VG_ACCESS', true); //(Константа безопасности)разрешение (true) доступа к config левым людям это ведь index

header('Content-Type:text/html;charset=utf-8'); //отправка браузеру пользователя заголовка с кодировкой
session_start(); //старт сессии?????

require_once 'config.php'; //Путь к настройкам хостинга 
require_once 'core/base/settings/internal_settings.php'; //Путь к настройкам проекта

function load1($class_name)
{
      // $class_name = str_replace('\\', '/', $class_name);
    include $class_name . '.php';
}

spl_autoload_register('load1');

(new \n2\A());
