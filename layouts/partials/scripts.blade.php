<script>
    var base_url = '{{ url('
    ') }}';
    var lang = '{{ \App::getLocale() }}'; <
    ? php /* blade_comment_start */ ? >
        var google_maps_api = '{{ config('
    xra.google.maps.api ') }}' < ? php /* blade_comment_end */ ? >
        <
        beautify start = "@if "
    exp = "^^^\Request::has('address')^^^" >
        var address = "{{ \Request::input('address') }}"; <
    /beautify end="@endif"> <
    beautify start = "@if "
    exp = "^^^\Request::has('lat') && \Request::has('lng')^^^" >
        var lat = "{{ \Request::input('lat') }}";
    var lng = "{{ \Request::input('lng') }}"; <
    /beautify end="@endif">

</script>
@stack('scripts_before')
@php
// Bootstrap core JavaScript
Theme::add('adm_theme::dist/js/manifest.js',1);
Theme::add('adm_theme::dist/js/vendor.js',2);
Theme::add('adm_theme::dist/js/app.js',3);
@endphp

{!! Theme::showScripts(false) !!}
@livewireScripts
@stack('scripts')
