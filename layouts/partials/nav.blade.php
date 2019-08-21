@php
	if(!is_array($nav)) return;
@endphp
<nav aria-label="month year navigation">
  <ul class="pagination justify-content-center">
<<<<<<< HEAD
  	@if(isset($nav['hierselect']))
  		<li>
  		<select class="form-control hierselect" data-url="{{ url('/admin/sigma/it/repart') }}" data-idhier="sec">
  		@foreach($nav['hierselect']['options'] as $k=>$v)
  			<option value="{{ $k }}">{{ $v }}</option>	
  		@endforeach	
  		</select>
  		</li>
  		<li>
  			<select id="repar" class="form-control"></select>
  		</li>
  	@else
=======
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
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d
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
<<<<<<< HEAD


$(document).ready(function($){
    $('.hierselect').change(function(){
    	var $this=$(this);
    	var $url=$this.data('url');
    	$.get($url, 
    		{ 
    			stabi: $(this).val(),
    			format:'json'

    		 }, 
    		function(data) {
    		//console.log(data);
        	var model = $('#repar');
        	model.empty();
        	$.each(data, function(index, el) {
        		//console.log(el);
            	model.append("<option value='"+ el.repar +"'>" + el.repar + '] '+el.dest1 + "</option>");
        	});
        
    	});
    });
});


=======
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
>>>>>>> 95a29bfc2b4f260c1a7c4d62dbe7d5a1d48a375d
</script>
@endpush