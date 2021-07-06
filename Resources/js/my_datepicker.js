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

>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
}(jQuery);