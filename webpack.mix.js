const mix = require('laravel-mix');
require('dotenv').config({
    path: __dirname + '/../../../../.env'
});

require('laravel-mix-polyfill');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
});

mix.js('Resources/js/app.js', 'Resources/dist/js')
    .sass('Resources/sass/app.scss', 'Resources/dist/css');


mix.extract(['jquery', 'jqueryui', 'juqery-ui']);


mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    //targets: { "firefox": "50", "ie": 11 }
    targets: "firefox 50, IE 11"
});


var $from = './Resources/dist';
var $to = '../../../public_html/themes/SbAdmin2Bs4/dist';
console.log('from :' + $from);
console.log('to :' + $to);

mix.copyDirectory($from, $to);



/*
(node:640) UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open '/Resources/views/dist/css/app.css'
if (mix.inProduction()) {
    mix.version();
    mix.sourceMaps();
}
*/