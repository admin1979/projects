<?php

defined('VG_ACCESS') or die('Access denied'); //запрет отображения файла левым людям

const TEMPLATE = 'templates/default/'; //путь к шаблонам, если создать другую папку например 2 то тут пишется 2 вместо default
const ADMIN_TEMPLATES = 'core/admin/views/'; //Константа отвечающая за пути к админ панели сайта

const COOKIE_VERSION = '1.0.0';
const CRYPT_KEY = ''; //ключ шифрования для куки файла
const COOKIE_TIME = 60; //константа для админ аккаунта с временем 60 минут, по истечении времени если панель открыта то происходит выход из логина
const BLOCK_TIME = 3; //защита от перебора паролей, блокировка на нное колличество времени после ошибки ввода пароля

const QTY = 8; //константа количества товаров на странице
const QTY_LINKS = 3; //константа колличества ссылок на странице

const ADMIN_CSS_JS = [ //пути в массиве CSS и JS админ панели сайта 
    'styles' => [],
    'scripts' => []
];

const USER_CSS_JS = [ //пути к CSS и JS сайта  
    'styles' => [],
    'scripts' => []
];
