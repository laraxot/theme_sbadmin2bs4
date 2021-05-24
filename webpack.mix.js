const mix = require('laravel-mix');
require('dotenv').config({
    path: __dirname + '/../../../../.env'
});

<<<<<<< HEAD
//require('laravel-mix-polyfill');
=======
require('laravel-mix-polyfill');
>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
});

<<<<<<< HEAD
mix.js('Resources/js/app.js', 'Resources/views/dist/js')
    .sass('Resources/sass/app.scss', 'Resources/views/dist/css');
=======
mix.js('Resources/js/app.js', 'dist/js')
    .sass('Resources/sass/app.scss', 'dist/css');
>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72


mix.extract(['jquery']);

<<<<<<< HEAD
/*
=======
>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72
mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: { "firefox": "50", "ie": 11 }
});
<<<<<<< HEAD
*/
=======

>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72

var $prefix = '../../../../';
var $suffix = '/themes/sb-admin-2-bs4'
var $resource_root = $prefix + $suffix;
var $public_path = $prefix + process.env.MIX_PUBLIC_FOLDER + $suffix;

console.log('public_path :' + $public_path);
console.log('dirname :' + __dirname);
<<<<<<< HEAD
$res = mix.copyDirectory(__dirname + '/Resources/views/dist', $public_path + '/dist');
=======
$res = mix.copyDirectory(__dirname + '/dist', $public_path + '/dist');
>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72
