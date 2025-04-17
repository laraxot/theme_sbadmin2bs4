@include('adm_theme::layouts.partials.breadcrumb',['_panel'=>$_panel])
@include('adm_theme::layouts.partials.tabs',['tabs'=>$_panel->getTabs()])
{!! Theme::include('topbar', [], get_defined_vars()) !!}
lllllllllll
{!! Theme::include('bottombar', [], get_defined_vars()) !!}
