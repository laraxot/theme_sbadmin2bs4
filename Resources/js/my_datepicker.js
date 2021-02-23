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

>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
}(jQuery);