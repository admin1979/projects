<?php

define('VG_ACCESS', true); //(Константа безопасности)разрешение (true) доступа к config левым людям это ведь index

header('Content-Type:text/html;charset=utf-8'); //отправка браузеру пользователя заголовка с кодировкой
session_start(); //старт сессии?????

require_once 'config.php'; //Путь к настройкам хостинга 
require_once 'core/base/settings/internal_settings.php'; //Путь к настройкам проекта

echo 'Прывет';

// =======> выпуск №3 последние 7-10 минут посмотреть
