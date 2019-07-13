<div class="menu-rest">
	<ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
		@foreach($tabs as $k=>$v)
		<li class="nav-item">
			<a class="nav-link {{ $v->active?'active':'' }}" href="{{ $v->url }}">
				{{ $v->title }}
			</a>
		</li>
		@endforeach
	</ul>
</div>	 
