{{--  
<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
	@foreach($params as $k=>$v)
		@if($loop->index >1)
			@if(is_object($v))
				<li class="breadcrumb-item"><a href="{{ $v->url }}">{{ $v->title }}</a></li>
			@else
				@php
					$container=Theme::xotModel($v);
				@endphp 
				<li class="breadcrumb-item">
					<a href="{{ $container->index_url }}">{{ $v }}</a>
				</li>
			@endif
		@endif
	@endforeach
	@php
		$routename=Route::currentRouteName();
		$act=last(explode('.',$routename));
	@endphp
	<li class="breadcrumb-item active" aria-current="page">
		<a href="{{ url()->current() }}" class="active">{{ $act }}</a>
	</li>
	</ol>
</nav>
--}} 
<nav aria-label="breadcrumb">
	<ol class="breadcrumb">
	@foreach($params as $k=>$v)	
		@if(is_object($v))
			<li class="breadcrumb-item">
				<a href="{{ $v->url }}">{{ isset($v->title)?$v->title:$v->getKey() }}</a>
			</li>
		@else
			@php
				$bread=Theme::getBread(['k'=>$k,'v'=>$v]);
			@endphp
			@if($k!='lang') 
			<li class="breadcrumb-item">
				<a href="{{ $bread->url }}">{{ $bread->title }}</a>
			</li>
			@endif
		@endif
	@endforeach 
	@php
		$routename=Route::currentRouteName();
		$act=last(explode('.',$routename));
	@endphp
	<li class="breadcrumb-item active" aria-current="page">
		<a href="{{ url()->current() }}" class="active">{{ $act }}</a>
	</li>
	</ol>
</nav>
