@extends ('adm_theme::layouts.plane',['body_class'=>'bg-gradient-primary'])
@section('body')
    @php
        //https://laravel.com/api/8.x/Illuminate/Auth/AuthManager.html#method_createEloquentProvider
        /*
        dddx([
            'auth'=>auth()->user(),//null
            'get_class'=>get_class(auth()),//Illuminate\Auth\AuthManager
            'auth_methods'=>get_class_methods(auth()),
            'getDefaultUserProvider'=>auth()->getDefaultUserProvider(),//null
            'getDefaultDriver'=>auth()->getDefaultDriver(),//web
            //'provider'=>auth()->provider('web'),
            //'createEloquentProvider'=>auth()->createEloquentProvider([]),//minate\Auth\SessionGuard::createEloquentProvider does not exist
            'config'=>config('auth.providers.users.model'),
        ]);
        */
    @endphp
    <div class="container">
        @include('theme::includes.flash')
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div
                                class="col-lg-6 d-none d-lg-block {{--  bg-login-image --}}">
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" role="form" method="POST"
                                        action="{{ route('login', ['lang' => $lang, 'referrer' => $referrer], false) }}">
                                        @csrf
                                        @if (count($errors) > 0)
                                            <div class="alert alert-danger">
                                                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                                                <ul>
                                                    @foreach ($errors->all() as $error)
                                                        <li>{{ $error }}</li>
                                                    @endforeach
                                                </ul>
                                            </div>
                                        @endif
                                        @if (config('xra.login_type'))

                                            {{ Form::bsText('ente', null, ['class' => 'form-control form-control-user1']) }}
                                            {{ Form::bsText('matr', null, ['class' => 'form-control form-control-user1']) }}
                                        @else
                                            {{ Form::bsText('email', null, ['class' => 'form-control form-control-user1']) }}
                                        @endif
                                        {{ Form::bsPassword('password', null, ['class' => 'form-control form-control-user1']) }}
                                        {{--
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember Me</label>
                                            </div>
                                        </div>
                                        --}}
                                        {!! Form::bsSubmit('Login') !!}
                                        {{--
                                        <a href="index.html" class="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                        --}}
                                        {!! Form::close() !!}
                                        <hr>
                                        <div class="text-center">
                                            <a class="small" href="{{ route('password.request') }}">@lang('lu::auth.login.forgot_password?')</a>
                                        </div>
                                        {{--
                                        <div class="text-center">
                                            <a class="small" href="register.html">Create an Account!</a>
                                        </div>
                                        --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
