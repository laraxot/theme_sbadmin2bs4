<<<<<<< HEAD
@extends('adm_theme::layouts.app')
@section('page_heading', 'DashBoard')

@section('content')
    <div class="row">
        {{-- da ripristinare
        @foreach (\Auth::User()->areas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach
        @foreach (\Auth::User()->areaAdminAreas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach
        --}}

    </div>
@endsection
=======
@extends('adm_theme::layouts.app')
@section('page_heading', 'DashBoard')

@section('content')
    <div class="row">
        {{-- da ripristinare !
        @foreach (\Auth::User()->areas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach
        @foreach (\Auth::User()->areaAdminAreas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach
        --}}

    </div>
@endsection
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
