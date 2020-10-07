<<<<<<< HEAD
<script>
    var base_url='{{ asset('') }}';
    var lang='{{ \App::getLocale() }}';
    {{--  var google_maps_api='{{ config('xra.google.maps.api') }}'; --}}
@if(\Request::has('address'))
    var address ="{{ \Request::input('address') }}";
@endif
@if(\Request::has('lat') && \Request::has('lng'))
=======
@php
	Theme::add('adm_theme::dist/js/manifest.js',1);
	Theme::add('adm_theme::dist/js/vendor.js',2);
    Theme::add('adm_theme::dist/js/app.js',3);
    if(!isset($lang)){
        $lang=App::getLocale();
    }
    $base_url=url('');
@endphp


<script>
    var base_url='{{ $base_url }}';
    var lang='{{ $lang }}';
    {{--  var google_maps_api='{{ config('xra.google.maps.api') }}'; --}}
@if(Request::has('address'))
    var address ="{{ \Request::input('address') }}";
@endif
@if(Request::has('lat') && \Request::has('lng'))
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
    var lat ="{{ \Request::input('lat') }}";
    var lng ="{{ \Request::input('lng') }}";
@endif
</script>
<<<<<<< HEAD
@stack('scripts_before')
@php
	// Bootstrap core JavaScript
	//Theme::add('/theme/pub/vendor/jquery/jquery.min.js',1);
/*
	Theme::add("/theme/bc/jquery/dist/jquery.min.js",1);

	Theme::add('/theme/vendor/bootstrap/js/bootstrap.bundle.min.js',2);
	//Core plugin JavaScript
	Theme::add('/theme/vendor/jquery-easing/jquery.easing.min.js',3);
	//Custom scripts for all pages
	Theme::add('/theme/js/sb-admin-2.min.js',4);
	Theme::add('/theme/js/xot.js');
*/
	Theme::add('adm_theme::dist/js/manifest.js',1);
	Theme::add('adm_theme::dist/js/vendor.js',2);
	Theme::add('adm_theme::dist/js/app.js',3);
@endphp
=======

@stack('scripts_before')

>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303

{!! Theme::showScripts(false) !!}
@livewireScripts
@stack('scripts')
<<<<<<< HEAD
{{--  test funzionamento
<script>
	$( document ).ready(function () {
		Swal.fire('Hello world!');
	});
</script>
--}}
=======
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
