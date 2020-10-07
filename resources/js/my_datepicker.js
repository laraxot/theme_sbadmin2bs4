<<<<<<< HEAD
//-- https://www.blog.plint-sites.nl/modular-javascript-laravel-5/

var AllPages = function($) {

	// ---
	// add a datepicker when there are date input fields
	// ---
	if ($('.datetimepicker').length) {
		require('moment');
		require('bootstrap-datetimepicker-build');

		// DATETIME-picker
		$('.datetimepicker').datetimepicker({
			format: 'YYYY-MM-DD HH:mm:ss'
		});
	}

=======
//-- https://www.blog.plint-sites.nl/modular-javascript-laravel-5/

var AllPages = function($) {

	// ---
	// add a datepicker when there are date input fields
	// ---
	if ($('.datetimepicker').length) {
		require('moment');
		require('bootstrap-datetimepicker-build');

		// DATETIME-picker
		$('.datetimepicker').datetimepicker({
			format: 'YYYY-MM-DD HH:mm:ss'
		});
	}

>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
}(jQuery);