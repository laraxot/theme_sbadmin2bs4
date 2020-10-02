require('./bootstrap');
window.Vue = require('vue');
Vue.config.devtools = true;

import Example from './components/ExampleComponent'
import CookieLaw from './components/CookieLawComponent'

window.Vuetify = require('vuetify');
Vue.use(Vuetify);

const opts = {}

export default new Vuetify(opts);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { Example,CookieLaw }
});

var pub_res='.';

const path = require('path');


require(pub_res+'/lighbox.js'); //magnificPopup is not a function
require(pub_res+'/modal_ajax.js');
var full=path.resolve(__dirname+'../../../../../../Modules');
console.log('dirname :'+__dirname);
console.log('full:');
console.log(full);

require(pub_res+'/btnDeleteX2.js');
require(pub_res+'/flatpickr.js');
//require('./sb-admin-2.js');
require(pub_res+'/typeahead_js.js');
require(pub_res+'/html5imageupload.js');

require(pub_res+'/xot.js');
