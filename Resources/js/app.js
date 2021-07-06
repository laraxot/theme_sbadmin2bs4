<<<<<<< HEAD
require('./bootstrap');
//require('./myvue');
var pub_res = '.';

const path = require('path');


require(pub_res + '/lighbox.js'); //magnificPopup is not a function
require(pub_res + '/modal_ajax.js');
var full = path.resolve(__dirname + '../../../../../../Modules');
console.log('dirname :' + __dirname);
console.log('full:');
console.log(full);

require(pub_res + '/btnDeleteX2.js');
require(pub_res + '/flatpickr.js');
//require('./sb-admin-2.js');
require(pub_res + '/typeahead_js.js');
require(pub_res + '/html5imageupload.js');

=======
require('./bootstrap');
//require('./myvue');
var pub_res = '.';

//const path = require('path');


//require(pub_res + '/lighbox.js'); //magnificPopup is not a function
require(pub_res + '/modal_ajax.js');
//var full = path.resolve(__dirname + '../../../../../../Modules');
console.log('dirname :' + __dirname);
//console.log('full:');
//console.log(full);

require(pub_res + '/btnDeleteX2.js');
require(pub_res + '/flatpickr.js');
//require('./sb-admin-2.js');
require(pub_res + '/typeahead_js.js');
require(pub_res + '/html5imageupload.js');

>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
require(pub_res + '/xot.js');