window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

 try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
<<<<<<< HEAD
    //const tether = require('Tether');
    const tooltip =  require('jquery-ui/ui/widgets/tooltip');
    const collapse = require('bootstrap/js/dist/collapse');
    const Swal = window.Swal = require('sweetalert2');
	const flatpickr = window.flatpickr = require("flatpickr");
	//const it  = window.it = require("flatpickr/dist/l10n/it.js").default.it;
=======
    
    const Swal = window.Swal = require('sweetalert2');
	const flatpickr = window.flatpickr = require("flatpickr");
	const it = require("flatpickr/dist/l10n/it.js").default.it;
>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72
	require('bootstrap');
	const magnificPopup = window.magnificPopup = require('magnific-popup');
	require('jquery.easing');
	require('typeahead.js');
	const multiselect = window.multiselect= require("multiselect-two-sides");
    require('bootstrap');
<<<<<<< HEAD
    //require("@babel/polyfill");
    require('startbootstrap-sb-admin-2/js/sb-admin-2.js');
} catch (e) {}


//import 'jquery-ui/ui/widgets/tooltip.js';

=======
    require("@babel/polyfill");
    require('startbootstrap-sb-admin-2/js/sb-admin-2.js');
} catch (e) {}

>>>>>>> 7df8416349d647cab72ffaf1acd40cf29ae88f72
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

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

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
