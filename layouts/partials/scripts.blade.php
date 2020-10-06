<script>
    var base_url='{{ asset('') }}';
    var lang='{{ \App::getLocale() }}';
    {{--  var google_maps_api='{{ config('xra.google.maps.api') }}'; --}}
@if(Request::has('address'))
    var address ="{{ \Request::input('address') }}";
@endif
@if(Request::has('lat') && \Request::has('lng'))
    var lat ="{{ \Request::input('lat') }}";
    var lng ="{{ \Request::input('lng') }}";
@endif
</script>
@stack('scripts_before')
@php
	Theme::add('adm_theme::dist/js/manifest.js',1);
	Theme::add('adm_theme::dist/js/vendor.js',2);
	Theme::add('adm_theme::dist/js/app.js',3);
@endphp

{!! Theme::showScripts(false) !!}
@livewireScripts
@stack('scripts')
