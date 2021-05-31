<<<<<<< HEAD
@extends('adm_theme::errors.minimal')
=======
@extends('pub_theme::errors.minimal')
>>>>>>> c83417ec4b320eede295db3f30b7b4e00751af9c

@section('title', __('Not Found'))
@section('code', '404')
@section('message', $message ?: __('Not Found'))
