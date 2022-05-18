const mix = require('laravel-mix');
require('dotenv').config({
    path: __dirname + '/../../../../.env'
});

require('laravel-mix-polyfill');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
});

<<<<<<< HEAD
mix.js('Resources/js/app.js', 'Resources/dist/js')
    .sass('Resources/sass/app.scss', 'Resources/dist/css');


mix.extract(['jquery', 'jqueryui', 'juqery-ui']);
=======
mix.js('Resources/js/app.js', 'Resources/views/dist/js')
    .sass('Resources/sass/app.scss', 'Resources/views/dist/css');


mix.extract(['jquery']);
>>>>>>> f17ed95 (up)


mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    //targets: { "firefox": "50", "ie": 11 }
    targets: "firefox 50, IE 11"
});


<<<<<<< HEAD
var $from = './Resources/dist';
var $to = '../../../public_html/themes/SbAdmin2Bs4/dist';
console.log('from :' + $from);
console.log('to :' + $to);

mix.copyDirectory($from, $to);

=======
var $prefix = '../../../../';
var $suffix = '/themes/sb-admin-2-bs4'
var $resource_root = $prefix + $suffix;
var $public_path = $prefix + process.env.MIX_PUBLIC_FOLDER + $suffix;

console.log('public_path :' + $public_path);
console.log('dirname :' + __dirname);
$res = mix.copyDirectory(__dirname + '/Resources/views/dist', $public_path + '/dist');
>>>>>>> f17ed95 (up)


/*
(node:640) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open '/Resources/views/dist/css/app.css'
if (mix.inProduction()) {
    mix.version();
    mix.sourceMaps();
}
*/