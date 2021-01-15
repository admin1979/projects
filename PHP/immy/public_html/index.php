<?php

define('VG_ACCESS', true); //разрешение (true) доступа к config левым людям это ведь index

header('Content-Type:text/html;charset=utf-8');
session_start();

require_once 'config.php'; //Путь к настройкам хостинга 
require_once 'core/base/internal_settings.php'; //Путь к настройкам проекта

echo 'Прывет';
