<?php


namespace core\base\settings;


class Settings
{
private $routes = [
  'admin' => [                              //настройки админ панели
      'name' => 'admin',
      'path' => 'core/admin/controller/',
      'hrUrl' => false
    ],
    'settings' => [                         //настройки сайта
        'path' => 'core/base/settings'
    ],
    'plugins' => [                          //настройки плагинов
        'path' => 'core/plugins/',
        'hrUrl' => false
    ],

];

}