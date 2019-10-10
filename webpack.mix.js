let mix = require('laravel-mix');
require('dotenv').config(
{
  path:__dirname+'/../../../../.env'
}
);

$prefix='../../../../';
/** 
* nome tema == nome directory tirarla fuori da script 
* i font sono "pesanti" percio' valutare se cartella comune
* /webfa-solid-900.svg son 823 KB
**/
$suffix='/themes/sb-admin-2-bs4';

var $resource_root=$prefix;
var $public_path=$prefix+process.env.MIX_PUBLIC_FOLDER;

console.log('MIX_PUBLIC_FOLDER :');
console.log(process.env.MIX_PUBLIC_FOLDER);


/*
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.EnvironmentPlugin (
                ['MIX_PUBLIC_FOLDER']
            )
        ]
    };
});
*/

//console.log(process.env);

require('laravel-mix-polyfill');

mix.options({
 	purifyCss: false,
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    tether: ['window.Tether', 'Tether'],
	'tether-shepherd': ['Shepherd'],
	'popper.js/dist/popper.js': ['Popper'],
  	sweetalert2:['Swal'],
  	'magnific-popup':['magnificPopup'],
  	'multiselect-two-sides':['multiselect'],
    moment: 'moment' // only one
});

var src = 'resources'; 
var dest = 'dist'; 
 
mix.js(src+'/js/auth.js', dest+'/js')
	.sass(src+'/sass/auth.scss', dest+'/css',{ outputStyle: 'expanded' });
  
mix.js(src+'/js/app.js', dest+'/js')
   .sass(src+'/sass/app.scss', dest+'/css',{ outputStyle: 'expanded' });

mix.extract([
   'jquery', 'raphael',
    //    'datatables.net', 'datatables.net-bs', 'datatables.net-responsive', 'datatables.net-responsive-bs',
   'vue', 'axios'
]);
mix.version();


mix.setResourceRoot($resource_root)
  .setPublicPath($public_path)
  //.setPublicPath(url('/'))
  //.webpackConfig(Object.assign(webpack))
  //.sourceMaps()
  .polyfill({
      enabled: true,
      useBuiltIns: "usage",
      targets: {"firefox": "50", "ie": 11}
   })
 ;