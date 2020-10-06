@php
Theme::add('adm_theme::dist/css/app.css',1);
@endphp

<head>
    {!! Theme::metatags() !!}
    {!! Theme::showStyles(false) !!}
    @livewireStyles
    @stack('styles')
</head>
