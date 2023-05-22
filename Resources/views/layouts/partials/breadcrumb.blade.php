<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        @foreach ($_panel->getBreads() as $bread)
            <li class="breadcrumb-item">
                <a href="{{ $bread->url('index') }}">{{ $bread->getName() }}</a>
            </li>
            @if ($bread->guid() != null)
                <li class="breadcrumb-item">
                    <a href="{{ $bread->url('show') }}">{{ $bread->guid() }}</a>
                </li>
            @endif
        @endforeach
        @php
            $routename = Route::currentRouteName();
            $act = last(explode('.', $routename));
        @endphp
        <li class="breadcrumb-item active" aria-current="page">
            <a href="{{ url()->current() }}" class="active">{{ $act }}</a>
        </li>
    </ol>
</nav>
