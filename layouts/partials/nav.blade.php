@php
	if(!is_array($nav)) return;
@endphp
<nav aria-label="month year navigation">
  <ul class="pagination justify-content-center">
	@foreach($nav as $k=>$v)
		<li class="page-item {{ $v->active?'active':'' }} ">
			<a class="page-link" href="{{ $v->url }}" >
				@if($loop->first)
				<span aria-hidden="true">&laquo;</span>&nbsp;&nbsp;
				@endif
				{{ $v->title }} 
				@if($loop->last)
				&nbsp;&nbsp;<span aria-hidden="true">&raquo;</span>
				@endif
			</a>
		</li>
	@endforeach
	{{--  
	<li class="page-item">
		<a class="page-link" href="#" aria-label="Previous">
			<span aria-hidden="true">&laquo;</span>&nbsp;&nbsp;'.$d->subMonth()->isoFormat('MMMM YYYY').'
		</a>
	</li>
	<li class="page-item active" aria-current="page">
		<a class="page-link" href="#">'.$d->isoFormat('MMMM YYYY').' <span class="sr-only">(current)</span></a>
	</li>
	<li class="page-item">
		<a class="page-link" href="#" aria-label="Next">
		'.$d->addMonth()->isoFormat('MMMM YYYY').'&nbsp;&nbsp;<span aria-hidden="true">&raquo;</span>
		</a>
	</li>
	--}}
  </ul>
</nav>