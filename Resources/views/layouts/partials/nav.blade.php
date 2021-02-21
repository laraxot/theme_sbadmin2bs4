@php
	if(!is_array($nav)) return;
@endphp
<nav aria-label="month year navigation">
  <ul class="pagination justify-content-center">
	@if(isset($nav['hierselect']))
		<li>
		<select class="form-control hierselect" data-url="{{ url('/admin/sigma/it/repart') }}" data-idhier="sec">
		@foreach($nav['hierselect']['options'] as $k=>$v)
			<option value="{{ $k }}">{{ $v }}</option>	
		@endforeach	
		</select>
		</li>
		<li>
			<select id="sec" class="form-control"></select>
		</li>
	@else
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
	@endif
  </ul>
</nav>



@push('scripts')
<script>
$(document).ready(function($){
	$('.hierselect').change(function(){
		var $this=$(this);
		var $url=$this.data('url');
		var $idhier=$this.data('idhier');
		$.ajax({
			method: "GET",
			dataType: "json",
			url:$url,
			data:{ stabi: $(this).val(), format:'json' }
		}).done(function(response) {
  			var model = $('#'+$idhier);
			model.empty();
			$.each(response.data, function(index, el) {
				//console.log(el);
				model.append("<option value='"+ el.repar +"'>" + el.repar + '] '+el.dest1 + "</option>");
			});
		});
	});
});
</script>
@endpush