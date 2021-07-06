@extends('errors/illustrated-layout')

@section('code', '403')
@section('title', __('Forbidden'))

@section('image')
    <div style="background-image: url({{ asset('/svg/403.svg') }});"
        class="absolute pin bg-cover bg-no-repeat md:bg-left lg:bg-center">
    </div>
@endsection

<<<<<<< HEAD
@section('message', __($exception->getMessage() ?: 'Sorry, you are forbidden from accessing this page.'))
=======
@section('message')
{{ $msg }}
{{-- dddx(get_defined_vars()) --}}
@endsection
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
