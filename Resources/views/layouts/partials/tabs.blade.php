<<<<<<< HEAD
@php
	//dd(get_class(Panel::get($row)));
	//dddx(get_defined_vars());
@endphp

<div class="menu-rest">
	@foreach($tabs as $tabs_level)
	<ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
		@foreach($tabs_level as $k=>$v)
		<li class="nav-item">
			<a class="nav-link {{ $v->active?'active':'' }}" href="{{ url($v->url) }}">
				{{ $v->title }}
			</a>
		</li>
		@endforeach
	</ul>
	@endforeach
</div>
=======
@php
	//dd(get_class(Panel::get($row)));
	//dddx(get_defined_vars());
@endphp

<div class="menu-rest">
	@foreach($tabs as $tabs_level)
	<ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
		@foreach($tabs_level as $k=>$v)
		<li class="nav-item">
			<a class="nav-link {{ $v->active?'active':'' }}" href="{{ url($v->url) }}">
				{{ $v->title }}
			</a>
		</li>
		@endforeach
	</ul>
	@endforeach
</div>
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
