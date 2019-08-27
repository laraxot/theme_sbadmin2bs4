let mix = require('laravel-mix');
const webpack = require('./webpack.config');

/*
 //https://statamic.com/marketplace/addons/laravel-mix
 */
mix.options({
 	purifyCss: false,
});


mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader', {
          loader: 'vuetify-loader',
          options: {
            theme: path.resolve('./node_modules/vuetify/src/stylus/theme.styl')
          }
        }]
      }
    ]
  }
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

 
mix
	.js(src+'/js/app.js', dest+'/js/app.js')
	.sass(src+'/sass/app.scss', dest+'/css/app.css',{ outputStyle: 'expanded' })
	.setResourceRoot('../')
	.setPublicPath(dest)
  .webpackConfig(Object.assign(webpack))
  .sourceMaps()
 ;
