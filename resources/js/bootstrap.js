window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
	window.Popper = require('popper.js').default;
	window.$ = window.jQuery = require('jquery');

	const Swal = window.Swal = require('sweetalert2');
	require('bootstrap');
	require('magnific-popup');
	require('jquery.easing');
	require('typeahead.js');
	//const Bloodhound = window.Bloodhound = require('bloodhound-js');
	//require('typeahead.js/dist/typeahead.bundle.js');
	//require('startbootstrap-sb-admin-2'); Module not found: Error: Can't resolve 'startbootstrap-sb-admin-2' 
} catch (e) {}

//import 'jquery-ui/ui/widgets/datepicker.js'; //???import 
//$('#datepicker').datepicker();

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
	window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
	console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/*
https://www.npmjs.com/package/bloodhound-js

var Bloodhound = require('bloodhound-js');
var engine = new Bloodhound({
  local: ['dog', 'pig', 'moose'],
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  datumTokenizer: Bloodhound.tokenizers.whitespace
});
 
var promise = engine.initialize();
 
promise.then(function() {
  console.log('engine init done');
 
  engine.search(
	'd',
	function(d) {
	  console.log(d);
	},
	function(d) {
	  console.log(d);
	}
  );
});


*/