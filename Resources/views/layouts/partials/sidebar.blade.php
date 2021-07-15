{{-- Sidebar --}}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {{-- Sidebar - Brand --}}
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ url('/admin') }}">
        {{-- <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin <sup>2</sup></div> --}}
        <div class="sidebar-brand-text mx-3">
            @yield('page_heading')
        </div>
    </a>


    @if (\Auth::check())
        @php
            $user_panel = Panel::get(\Auth::user());
        @endphp
        @include('adm_theme::layouts.partials.sidebar.menu')
        @include('adm_theme::layouts.partials.sidebar.areas')
        @if ($user_panel->isSuperAdmin())
            @include('adm_theme::layouts.partials.sidebar.models')
        @endif
    @endif


    {{-- Divider --}}
    <hr class="sidebar-divider d-none d-md-block">

    {{-- Sidebar Toggler (Sidebar) --}}
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>

{{-- End of Sidebar --}}
