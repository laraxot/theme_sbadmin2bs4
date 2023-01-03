@extends('adm_theme::layouts.app')
@section('page_heading', 'DashBoard')

@section('content')
    <div class="row">
        @foreach($profile->areas() as $area)
        {{--  
        <x-dashboard.item.area :area="$area" />
        --}}
        @endforeach
    </div>
@endsection
