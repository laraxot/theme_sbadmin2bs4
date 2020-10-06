@php

@endphp

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">

        @foreach ($_panel->getParents() as $parent)
            <li class="breadcrumb-item">
                <a href="{{ $parent->url(['act' => 'index']) }}">{{ $parent->postType() }}</a>
            </li>
            <li class="breadcrumb-item">
                <a href="{{ $parent->url(['act' => 'show']) }}">{{ $parent->guid() }}</a>
            </li>
        @endforeach
        <li class="breadcrumb-item">
            <a href="{{ $_panel->url(['act' => 'index']) }}">{{ $_panel->postType() }}</a>
        </li>
        @if ($_panel->guid() != null)
            <li class="breadcrumb-item">
                <a href="{{ $_panel->url(['act' => 'show']) }}">{{ $_panel->guid() }}</a>
            </li>
        @endif
        @php
        $routename=Route::currentRouteName();
        $act=last(explode('.',$routename));
        @endphp
        <li class="breadcrumb-item active" aria-current="page">
            <a href="{{ url()->current() }}" class="active">{{ $act }}</a>
        </li>

    </ol>
</nav>
