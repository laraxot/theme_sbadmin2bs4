<head>
  {!! Theme::metatags() !!}
  @php
  Theme::add('adm_theme::dist/css/app.css',1);
  @endphp
    {!! Theme::showStyles(false) !!}
    @livewireStyles
    @stack('styles')
    {{--
    --}}
</head>
