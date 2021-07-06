<<<<<<< HEAD
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
    components: { Example, CookieLaw }
=======
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
    components: { Example, CookieLaw }
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
});