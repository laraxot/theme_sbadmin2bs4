@extends('adm_theme::layouts.app')
@section('page_heading', 'DashBoard')

@section('content')
    <div class="row">
        {{-- Guardare NOVA cosa fa --}}
        {{-- da ripristinare
        @foreach (\Auth::User()->areas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach
        @foreach (\Auth::User()->areaAdminAreas as $area)
            {!! $area->dashboard_widget() !!}
        @endforeach --}}

    </div>
@endsection
