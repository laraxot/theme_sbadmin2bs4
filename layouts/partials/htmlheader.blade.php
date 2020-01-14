<head>
  {!! Theme::metatags() !!}
  @php
  Theme::add('adm_theme::dist/css/app.css',1);
  @endphp
	{!! Theme::showStyles(false) !!}
	@stack('styles')
</head>