@if (Theme::getArea() == false)
    <hr class="sidebar-divider">
    <div class="sidebar-heading">
        Areas
    </div>
    @php
        //$panel = Panel::get(\Auth::user());
        //$areas = $panel->areas();
        //dddx($profile->areas());
    @endphp

    @foreach ($profile->areas() as $area)
        <li class="nav-item {{ $area->active ? 'active' : '' }}">
            <a href="{{ $area->url }}" class="nav-link" title="{{ $area->area_define_name }}">
                <img src="{{ Theme::asset($area->icon_src) }}" width="32" />
                <span>{{ $area->area_define_name }}</span>
            </a>
        </li>
    @endforeach
@endif
