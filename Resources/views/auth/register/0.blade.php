@extends('pub_theme::layouts.guest', ['title' => 'Register'])

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
                            {{ csrf_field() }}
                            <x-flash-message />
                            <x-input.group type="text" name="username" />
                            <x-input.group type="email" name="email" />
                            <x-input.group type="password.with.confirm"  name="password"/>
                            <x-button type="submit">Register</x-button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
