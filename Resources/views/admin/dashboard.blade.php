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
    
     
    <ul>Aree
    @foreach (\Auth::User()->areas as $area)
        <li>
            {{ $area->getKeyName() }} : {{ $area->getKey() }}
        </pre>
    @endforeach
    </ul>
    {{-- 
    --}}
    {{--  
    <ul>Groups
    @foreach (\Auth::User()->groups as $group)
        <li>
            {{ $group->getKeyName() }} : {{ $group->getKey() }}
        </pre>
    @endforeach
    </ul>
    
      
    <ul>Rights
    @foreach (\Auth::User()->rights as $right)
        <li>
            {{ $right->getKeyName() }} : {{ $right->getKey() }}
        </pre>
    @endforeach
    </ul>
    --}}

@endsection
