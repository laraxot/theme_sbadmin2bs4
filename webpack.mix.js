let mix = require('laravel-mix');

/*
 //https://statamic.com/marketplace/addons/laravel-mix
 */
<<<<<<< HEAD
=======
  mix.options({
 	purifyCss: false,
 });

>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    tether: ['window.Tether', 'Tether'],
	'tether-shepherd': ['Shepherd'],
	'popper.js/dist/popper.js': ['Popper'],
  	sweetalert2:['Swal'],
  	'magnific-popup':['magnificPopup'],
<<<<<<< HEAD
=======
  	'multiselect-two-sides':['multiselect'],
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d
    moment: 'moment' // only one
});

var src = 'resources'; 
var dest = 'dist'; 

<<<<<<< HEAD
mix.options({
 	purifyCss: false,
 });



=======
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d
 
mix
	.js(src+'/js/app.js', dest+'/js/app.js')
	.sass(src+'/sass/app.scss', dest+'/css/app.css',{ outputStyle: 'expanded' })
	.setResourceRoot('../')
	.setPublicPath(dest)
 ;
