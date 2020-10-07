<<<<<<< HEAD
{{--
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        @foreach ($params as $k => $v)
            @if (is_object($v))
                <li class="breadcrumb-item">
                    <a href="{{ $v->url }}">{{ isset($v->title) ? $v->title : $v->getKey() }}</a>
                </li>
                @else
                @php
                $bread=Theme::getBread(['k'=>$k,'v'=>$v]);
                @endphp
                @if ($k != 'lang')
                    <li class="breadcrumb-item">
                        <a href="{{ $bread->url }}">{{ $bread->title }}</a>
                    </li>
                @endif
            @endif
        @endforeach
        @php
        $routename=Route::currentRouteName();
        $act=last(explode('.',$routename));
        @endphp
        <li class="breadcrumb-item active" aria-current="page">
            <a href="{{ url()->current() }}" class="active">{{ $act }}</a>
        </li>
    </ol>
</nav>
--}}
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
=======
{{--
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        @foreach ($params as $k => $v)
            @if (is_object($v))
                <li class="breadcrumb-item">
                    <a href="{{ $v->url }}">{{ isset($v->title) ? $v->title : $v->getKey() }}</a>
                </li>
                @else
                @php
                $bread=Theme::getBread(['k'=>$k,'v'=>$v]);
                @endphp
                @if ($k != 'lang')
                    <li class="breadcrumb-item">
                        <a href="{{ $bread->url }}">{{ $bread->title }}</a>
                    </li>
                @endif
            @endif
        @endforeach
        @php
        $routename=Route::currentRouteName();
        $act=last(explode('.',$routename));
        @endphp
        <li class="breadcrumb-item active" aria-current="page">
            <a href="{{ url()->current() }}" class="active">{{ $act }}</a>
        </li>
    </ol>
</nav>
--}}
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
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
