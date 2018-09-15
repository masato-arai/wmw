<?php

return [
    // Global settings
    '*' => [
        'defaultWeekStartDay' => 0,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
        'siteUrl' => getenv('SITE_URL'),
    ],

    'dev' => [
        'devMode' => true,
    ],

    'staging' => [
        'devMode' => false,
    ],

    'production' => [
        'devMode' => false,
    ],
];
