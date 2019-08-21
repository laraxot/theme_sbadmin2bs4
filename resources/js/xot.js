
$('[data-toggle="tooltip"]').tooltip(); 
<<<<<<< HEAD
$('table').addClass('table table-striped table-bordered table-hover table-condensed table-responsive');
=======
$('table').addClass('table table-striped table-bordered table-hover table-condensed');
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d
var current_title;
$(window).blur(function() {
	//var current_href = $(location).attr('href');
	current_title = $(document).attr('title');
	$(document).attr("title", "Torna Qua !");
});
$(window).focus(function() {
	$(document).attr("title", current_title);
}); 


//-------------------------------------------------------
<<<<<<< HEAD

=======
 $('#multiselect').multiselect();

 //------------------------------------------------------
 /*
 $.ajaxSetup({
	headers: {
    	'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});
*/
$('.dropzone').html5imageupload({
	onAfterProcessImage: function() {
		alert('onAfterProcessImage');
		var $val=$(this.element).data('name');
		$('#{{ $name }}').val($val);
	},
	onAfterCancel: function() {
		alert('onAfterCancel');
		$('#{{ $name }}').val('');
	}
});
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d

