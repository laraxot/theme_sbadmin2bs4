//$(document).ready(function(){
//jQuery(document).ready(function($){
	$('[data-toggle="tooltip"]').tooltip(); 
	$('table').addClass('table table-striped table-bordered table-hover table-condensed table-responsive');
	var current_title;
	$(window).blur(function() {
		//var current_href = $(location).attr('href');
		current_title = $(document).attr('title');
		$(document).attr("title", "Torna Qua !");
	});
	$(window).focus(function() {
		$(document).attr("title", current_title);
	}); 
//});   
/*
var engine=[];
	$(".typeahead").each(function(){
		$this=$(this);
		console.log('typeahead');
		console.log($this.data('id'));
		// Set the Options for "Bloodhound" suggestion engine
		engine[$this.data('id')] = new Bloodhound({
			remote: {
				url: $this.data('href'),//'{{ url('/getPost') }}?post_type=recipe&query=%QUERY%',//$(":focus").data(href),
				wildcard: '%QUERY%'
			},
			datumTokenizer: Bloodhound.tokenizers.whitespace('q'),
			queryTokenizer: Bloodhound.tokenizers.whitespace
		});
	});

	$(".typeahead").typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	}, {
		source: engine[$(this).data('id')].ttAdapter(),
		displayKey: 'title',
		// This will be appended to "tt-dataset-" to form the class name of the suggestion menu.
		// the key from the array we want to display (name,id,email,etc...)
		templates: {
			empty: [
				'<div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
			],
			header: [
				'<div class="list-group search-results-dropdown">'
			]
			,suggestion: function (data) {
				console.log(data);
				var html = '<div class="list-group-item item-with-img">'
							+ '<a class="item-img" href="#" style="">'
							+ '<img src="//placehold.it/30x30" alt="" title="">'
							+ '</a>'
							+ '<h5 class="title">' + data.title + '</h5>'
							+ '</div>';
			   // return '<a  class="list-group-item">' + data.title + '</a>'
				return html;
			}
		}
	});
*/
/*
var bestPictures = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  //prefetch: '../data/films/post_1960.json',
  remote: {
	url: '/admin/food/it/cuisine_cat?query=%QUERY%',
	wildcard: '%QUERY'
  }
});

$('.typeahead').typeahead(null, {
  name: 'best-pictures',
  display: 'value',
  source: bestPictures
});
//*/
/*
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
	var matches, substringRegex;

	// an array that will be populated with substring matches
	matches = [];

	// regex used to determine if a string contains the substring `q`
	substrRegex = new RegExp(q, 'i');

	// iterate through the pool of strings and for any string that
	// contains the substring `q`, add it to the `matches` array
	$.each(strs, function(i, str) {
	  if (substrRegex.test(str)) {
		matches.push(str);
	  }
	});

	cb(matches);
  };
};
*/
/*
var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('.typeahead').typeahead(null,{ 
  name: 'states',
  display: 'value',
  source: substringMatcher(states),
  templates: {
	empty: [
	  '<div class="empty-message">',
		'unable to find any Best Picture winners that match the current query',
	  '</div>'
	].join('\n'),
	suggestion: function (data) {
		console.log(data);
		return 'aaaa';
	}
  }
});
*/
/*
var path='/';
$('input.typeahead').typeahead({
	source:  function (query, process) {
		alert('aa');
	return $.get(path, { query: query }, function (data) {
			return process(data);
		});
	}
});
*/
/*
$(".typeahead").typeahead({
  // data source
  source: [],
  // how many items to show
  items: 8,
  // default template
  menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
  item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
  headerHtml: '<li class="dropdown-header"></li>',
  headerDivider: '<li class="divider" role="separator"></li>'
  itemContentSelector:'a',
  // min length to trigger the suggestion list
  minLength: 1,
  // number of pixels the scrollable parent container scrolled down
  scrollHeight: 0,
  // auto selects the first item
  autoSelect: true,
  // callbacks
  afterSelect: $.noop,
  afterEmptySelect: $.noop,
  // adds an item to the end of the list
  addItem: false,
  // delay between lookups
  delay: 0,
});
*/

	//console.log(engine.ttAdapter());
	// Initializing the typeahead
	/*
	$(".typeahead").each(function(){
		$(this).typeahead({
			name: $(this).name,
			remote: $(this).data('href'),
			source: function(query, syncResults, asyncResults) {
				console.log(remote);
				//var url = this.$el.parents(".twitter-typeahead").find(".typeahead").data().url
			}       
		});
	});
	*/

var suggestions = function($url) {
	return function findMatches(q, syncResults, asyncResults) {
		//var matches=[{'title':'test'}];
		//cb(matches);
		var $url_q=$url.replace('%QUERY%',q);
		//console.log(url_q);
		axios.get($url_q).then(function (response) {
			//console.log(response.data);
			asyncResults(response.data);
		}).catch(function (error) {
			console.log(error);
		}).finally(function () {
		});
	};
};


$(".typeahead").each(function(){
	var $this=$(this);
	var $name=$this.data('name');
	$this.input=$this.closest("div").find("input[name="+$name+"]");
	$this.on('keyup',function(e){
		$this.input.val(''); //se digito svuoto
	});
	$this.bind('typeahead:select', function(ev, suggestion) {
  		var $val=suggestion['id'];
  		$this.input.val($val);
	});
	$this.typeahead({  
		hint: true,
		highlight: true, // Enable substring highlighting 
		minLength: 3, // Specify minimum characters required for showing suggestions 
	},{
		name: $this.data('name'),
		displayKey:'label',//senza questo mi mostra il json
		source: suggestions($this.data('url')), //meglio passare a data url per standard
		templates: {
			pending :[
				'<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div>'
			],
			empty: [
				'<div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'
			],
			header: [
				'<div class="list-group search-results-dropdown">'
			],
			suggestion: function (data) {
				return '<a href="#" class="list-group-item">'+data.label+'</a>'
			}
		}
	});
});    
	/*

	https://itsolutionstuff.com/post/laravel-56-dynamic-ajax-autocomplete-using-vuejsexample.html

	$('#selector').on('typeahead:select', function(evt, item) {
    console.log(evt)
    console.log(item)
    // Your Code Here
})

	*/