@extends('adm_theme::errors.illustrated-layout')

@section('title', __('Server Error'))
@section('code', '500')
@section('message')
 {{  $msg ?? $message ?? __('Server Error') }}
 {{--  
 <pre>{{ dddx(debug_backtrace()) }}</pre>
 --}}
 <ul>
 @foreach(debug_backtrace() as $v)
        <li> {{ $v['file'] }} - {{ $v['line'] }}</li>
 @endforeach
 </ul>
@endsection
