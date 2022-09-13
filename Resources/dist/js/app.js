(self["webpackChunk"] = self["webpackChunk"] || []).push([["/Resources/dist/js/app"],{

/***/ "./Resources/js sync recursive ^.*\\/btnDeleteX2\\.js$":
/*!**************************************************!*\
  !*** ./Resources/js/ sync ^.*\/btnDeleteX2\.js$ ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./btnDeleteX2.js": "./Resources/js/btnDeleteX2.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/btnDeleteX2\\.js$";

/***/ }),

/***/ "./Resources/js sync recursive ^.*\\/flatpickr\\.js$":
/*!************************************************!*\
  !*** ./Resources/js/ sync ^.*\/flatpickr\.js$ ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./flatpickr.js": "./Resources/js/flatpickr.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/flatpickr\\.js$";

/***/ }),

/***/ "./Resources/js sync recursive ^.*\\/html5imageupload\\.js$":
/*!*******************************************************!*\
  !*** ./Resources/js/ sync ^.*\/html5imageupload\.js$ ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./html5imageupload.js": "./Resources/js/html5imageupload.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/html5imageupload\\.js$";

/***/ }),

/***/ "./Resources/js sync recursive ^.*\\/modal_ajax\\.js$":
/*!*************************************************!*\
  !*** ./Resources/js/ sync ^.*\/modal_ajax\.js$ ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./modal_ajax.js": "./Resources/js/modal_ajax.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/modal_ajax\\.js$";

/***/ }),

/***/ "./Resources/js sync recursive ^.*\\/typeahead_js\\.js$":
/*!***************************************************!*\
  !*** ./Resources/js/ sync ^.*\/typeahead_js\.js$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./typeahead_js.js": "./Resources/js/typeahead_js.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/typeahead_js\\.js$";

/***/ }),

/***/ "./Resources/js sync recursive ^.*\\/xot\\.js$":
/*!******************************************!*\
  !*** ./Resources/js/ sync ^.*\/xot\.js$ ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./xot.js": "./Resources/js/xot.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./Resources/js sync recursive ^.*\\/xot\\.js$";

/***/ }),

/***/ "./Resources/js/app.js":
/*!*****************************!*\
  !*** ./Resources/js/app.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
__webpack_require__(/*! ./bootstrap */ "./Resources/js/bootstrap.js"); //require('./myvue');


var pub_res = '.'; //const path = require('path');
//require(pub_res + '/lighbox.js'); //magnificPopup is not a function

__webpack_require__("./Resources/js sync recursive ^.*\\/modal_ajax\\.js$")(pub_res + "/modal_ajax.js"); //var full = path.resolve(__dirname + '../../../../../../Modules');


console.log('dirname :' + __dirname); //console.log('full:');
//console.log(full);

__webpack_require__("./Resources/js sync recursive ^.*\\/btnDeleteX2\\.js$")(pub_res + "/btnDeleteX2.js");

__webpack_require__("./Resources/js sync recursive ^.*\\/flatpickr\\.js$")(pub_res + "/flatpickr.js"); //require('./sb-admin-2.js');


__webpack_require__("./Resources/js sync recursive ^.*\\/typeahead_js\\.js$")(pub_res + "/typeahead_js.js");

__webpack_require__("./Resources/js sync recursive ^.*\\/html5imageupload\\.js$")(pub_res + "/html5imageupload.js");

__webpack_require__("./Resources/js sync recursive ^.*\\/xot\\.js$")(pub_res + "/xot.js");

/***/ }),

/***/ "./Resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./Resources/js/bootstrap.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

try {
  window.Popper = (__webpack_require__(/*! popper.js */ "../../../../../node_modules/popper.js/dist/esm/popper.js")["default"]);

  var $ = window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  window.Tether = __webpack_require__(/*! tether */ "./node_modules/tether/dist/js/tether.esm.js"); //window.Popper = require('popper.js').default;
  //const tether = require('Tether');

  var tooltip = __webpack_require__(/*! jquery-ui/ui/widgets/tooltip */ "./node_modules/jquery-ui/ui/widgets/tooltip.js");

  var draggable = $.draggable = __webpack_require__(/*! jquery-ui/ui/widgets/draggable */ "./node_modules/jquery-ui/ui/widgets/draggable.js"); //const droppable = $.droppable = require('jquery-ui/ui/widgets/droppable');
  //require('jquery-ui');
  //require('jquery-ui-dist/jquery-ui');


  var Swal = window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

  var flatpickr = window.flatpickr = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js"); //const it  = window.it = require("flatpickr/dist/l10n/it.js").default.it;


  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  var collapse = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");

  var magnificPopup = window.magnificPopup = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");

  __webpack_require__(/*! jquery.easing */ "./node_modules/jquery.easing/jquery.easing.js");

  __webpack_require__(/*! typeahead.js */ "./node_modules/typeahead.js/dist/typeahead.bundle.js");

  var multiselect = window.multiselect = __webpack_require__(/*! multiselect-two-sides */ "./node_modules/multiselect-two-sides/dist/js/multiselect.min.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); //require("@babel/polyfill");


  __webpack_require__(/*! startbootstrap-sb-admin-2/js/sb-admin-2.js */ "./node_modules/startbootstrap-sb-admin-2/js/sb-admin-2.js");

  var Chart = window.Chart = (__webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.mjs")["default"]);
} catch (e) {} //import 'jquery-ui/ui/widgets/tooltip.js';


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./Resources/js/btnDeleteX2.js":
/*!*************************************!*\
  !*** ./Resources/js/btnDeleteX2.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//https://gist.github.com/crystrk/32f1fb5d32102537e534b75d443ae297
var deleter = {
  //linkSelector          : "a[data-delete]",
  linkSelector: "a.btn-confirm-delete",
  modalTitle: "Are you sure?",
  modalMessage: "You will not be able to recover this entry?",
  modalConfirmButtonText: "Yes, delete it!",
  laravelToken: null,
  url: "/",
  init: function init() {
    $(this.linkSelector).on('click', {
      self: this
    }, this.handleClick);
  },
  handleClick: function handleClick(event) {
    event.preventDefault();
    var self = event.data.self;
    var link = $(this);
    self.modalTitle = link.data('title') || self.modalTitle;
    self.modalMessage = link.data('message') || self.modalMessage;
    self.modalMessage = self.modalMessage + '[' + link.data('id') + ']';
    self.modalConfirmButtonText = link.data('button-text') || self.modalConfirmButtonText; //self.url                    = link.attr('href');

    self.url = link.data('href');
    self.laravelToken = $("meta[name=csrf-token]").attr('content');
    self.confirmDelete();
  },
  confirmDelete: function confirmDelete() {
    Swal.fire({
      title: this.modalTitle,
      text: this.modalMessage,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: this.modalConfirmButtonText //,
      //closeOnConfirm    : true

    }).then(function (isConfirm) {
      if (isConfirm.value) {
        //alert('SI');
        this.makeDeleteRequest();
      } else {//alert('NO');
      }
    }.bind(this));
  },
  makeDeleteRequest: function makeDeleteRequest() {
    $.ajax({
      url: this.url,
      type: "DELETE",
      data: {
        _method: 'delete',
        _token: this.laravelToken
      },
      success: function success(data) {
        console.log(data); //$("#task" + task_id).remove();
        //alert(data);

        Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");
        location.reload();
      },
      error: function error(XMLHttpRequest, textStatus, errorThrown) {
        console.log('url : ' + this.url);
        console.log('XMLHttpRequest');
        console.log(XMLHttpRequest); //alert(XMLHttpRequest.responseText);

        $('#div_debug').html(XMLHttpRequest.responseText);
        console.log('textStatus');
        console.log(textStatus);
        console.log('errorThrown');
        console.log(errorThrown);
        alert("Status: " + textStatus);
        alert("Error: " + errorThrown);
      } //end error

    });
  },
  makeDeleteRequest1: function makeDeleteRequest1() {
    var form = $('<form>', {
      'method': 'POST',
      'action': this.url
    });
    var token = $('<input>', {
      'type': 'hidden',
      'name': '_token',
      'value': this.laravelToken
    });
    var hiddenInput = $('<input>', {
      'name': '_method',
      'type': 'hidden',
      'value': 'DELETE'
    });
    return form.append(token, hiddenInput).appendTo('body').submit();
  }
};
deleter.init();

/***/ }),

/***/ "./Resources/js/flatpickr.js":
/*!***********************************!*\
  !*** ./Resources/js/flatpickr.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(".datetime_flatpickr").flatpickr({
  wrap: true,
  locale: 'it',
  //altInput: true,
  //altFormat: "F j, Y",
  dateFormat: "d/m/Y H:i",
  enableTime: true,
  time_24hr: true
});
$(".date_flatpickr").flatpickr({
  wrap: true,
  locale: 'it',
  //altInput: true,
  //altFormat: "F j, Y",
  dateFormat: "d/m/Y",
  //enableTime: true,
  time_24hr: true
});
$(".time_flatpickr").flatpickr({
  wrap: true,
  locale: 'it',
  //altInput: true,
  //altFormat: "F j, Y",
  dateFormat: "H:i",
  noCalendar: true,
  enableTime: true,
  time_24hr: true
});

/***/ }),

/***/ "./Resources/js/html5imageupload.js":
/*!******************************************!*\
  !*** ./Resources/js/html5imageupload.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















/*
 * HTML 5 Image upload script
 * by STBeets
 * bought on CodeCanyon: http://codecanyon.net/item/html-5-upload-image-ratio-with-drag-and-drop/8712634?ref=stbeets
 * 
 * Version: 1.4.3
 * 
 */
(function (window, $, undefined) {
  "use strict";

  $.html5imageupload = function html5imageupload(options, element) {
    this.element = element;
    this.options = $.extend(true, {}, $.html5imageupload.defaults, options, $(this.element).data());
    this.input = $(this.element).find('input[type=file]');
    var $window = $(window);

    var _self = this;

    this.interval = null;
    this.drag = false;
    this.widthPercentage = 100; //buttons

    this.button = {};
    this.button.edit = '<div class="btn btn-info btn-edit" title="' + (this.options.editTitle || 'Edit') + '"><i class="glyphicon glyphicon-pencil"></i></div>';
    this.button.saving = '<div class="btn btn-warning saving">' + (this.options.saveLabel || 'Saving...') + ' <i class="glyphicon glyphicon-time"></i></div>';
    this.button.zoomin = '<div class="btn btn-default btn-zoom-in" title="' + (this.options.zoominTitle || 'Zoom in') + '"><i class="glyphicon glyphicon-resize-full"></i></div>';
    this.button.zoomout = '<div class="btn btn-default btn-zoom-out" title="' + (this.options.zoomoutTitle || 'Zoom out') + '"><i class="glyphicon glyphicon-resize-small"></i></div>';
    this.button.zoomreset = '<div class="btn btn-default btn-zoom-reset" title="' + (this.options.zoomresetTitle || 'Fullsize') + '"><i class="glyphicon glyphicon-fullscreen"></i></div>'; //		this.button.rotatecw	= '<div class="btn btn-default btn-rotate-cw" title="' + (this.options.cwTitle || 'Rotate clockwise') + '"><i class="glyphicon glyphicon-share"></i></div>';
    //		this.button.rotateccw	= '<div class="btn btn-default btn-rotate-ccw" title="' + (this.options.ccwTitle || 'Rotate counter clockwise') + '"><i class="glyphicon glyphicon-share icon-flipped"></i></div>';

    this.button.cancel = '<div class="btn btn-danger btn-cancel" title="' + (this.options.cancelTitle || 'Cancel') + '"><i class="glyphicon glyphicon-remove"></i></div>';
    this.button.done = '<div class="btn btn-success btn-ok" title="' + (this.options.okTitle || 'Ok') + '"><i class="glyphicon glyphicon-ok"></i></div>';
    this.button.del = '<div class="btn btn-danger btn-del" title="' + (this.options.delTitle || 'Delete') + '"><i class="glyphicon glyphicon-trash"></i></div>';
    this.button.download = '<a class="btn btn-warning download"><i class="glyphicon glyphicon-download"></i> ' + (this.options.downloadLabel || 'Download') + '</a>'; //this.imageExtensions	= {png: 'png', bmp: 'bmp', gif: 'gif', jpg: ['jpg','jpeg'], tiff: 'tiff'};

    this.imageMimes = {
      png: 'image/png',
      bmp: 'image/bmp',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      tiff: 'image/tiff'
    };

    _self._init();
  };

  $.html5imageupload.defaults = {
    width: null,
    height: null,
    image: null,
    ghost: true,
    originalsize: true,
    url: false,
    removeurl: null,
    data: {},
    canvas: true,
    canvasImageOnly: false,
    ajax: true,
    resize: false,
    dimensionsonly: false,
    editstart: false,
    saveOriginal: false,
    save: true,
    download: false,
    smaller: false,
    smallerWidth: false,
    smallerHeight: false,
    background: null,
    onAfterZoomImage: null,
    onAfterInitImage: null,
    onAfterMoveImage: null,
    onAfterProcessImage: null,
    onAfterResetImage: null,
    onAfterCancel: null,
    onAfterRemoveImage: null,
    onAfterSelectImage: null
  };
  $.html5imageupload.prototype = {
    _init: function _init() {
      var _self = this;

      var options = _self.options;
      var element = _self.element;
      var input = _self.input;

      if (empty($(element))) {
        return false;
      } else {
        $(element).children().css({
          position: 'absolute'
        });
      } //the engine of this script


      if (!(window.FormData && "upload" in $.ajaxSettings.xhr())) {
        $(element).empty().attr('class', '').addClass('alert alert-danger').html('HTML5 Upload Image: Sadly.. this browser does not support the plugin, update your browser today!');
        return false;
      }

      if (!empty(options.width) && empty(options.height) && $(element).innerHeight() <= 0) {
        $(element).empty().attr('class', '').addClass('alert alert-danger').html('HTML5 Upload Image: Image height is not set and can not be calculated...');
        return false;
      }

      if (!empty(options.height) && empty(options.width) && $(element).innerWidth() <= 0) {
        $(element).empty().attr('class', '').addClass('alert alert-danger').html('HTML5 Upload Image: Image width is not set and can not be calculated...');
        return false;
      }
      /*if (!empty(options.height) && !empty(options.width) && !empty($(element).innerHeight() && !empty($(element).innerWidth()))) {
      	//all sizes are filled in
      	console.log(options.width)
      	console.log(options.height)
      	console.log(options.width / options.height)
      	
      	console.log($(element).outerWidth())
      	console.log($(element).outerHeight())
      	
      	console.log($(element).outerWidth() / $(element).outerHeight())
      	
      	if ((options.width / options.height) != ($(element).outerWidth() / $(element).outerHeight())) {
      		$(element).empty().attr('class','').addClass('alert alert-danger').html('HTML5 Upload Image: The ratio of all sizes (CSS and image) are not the same...');
      		return false;
      	}
      }*/
      //copy styles


      $(element).data('style', $(element).attr('style'));
      $(element).data('class', $(element).attr('class')); //////////////
      //check sizes

      var width, height, imageWidth, imageHeight;
      options.width = imageWidth = options.width || $(element).outerWidth();
      options.height = imageHeight = options.height || $(element).outerHeight();

      if ($(element).innerWidth() > 0) {
        width = $(element).outerWidth();
      } else if ($(element).innerHeight() > 0) {
        width = null;
      } else if (!empty(options.width)) {
        width = options.width;
      }

      if ($(element).innerHeight() > 0) {
        height = $(element).outerHeight();
      } else if ($(element).innerWidth() > 0) {
        height = null;
      } else if (!empty(options.height)) {
        height = options.height;
      }

      height = height || width / (imageWidth / imageHeight);
      width = width || height / (imageHeight / imageWidth);
      /* is small window, add class small */

      if (width < 240) {
        $(element).addClass('smalltools smalltext');
      }

      $(element).css({
        height: height,
        width: width
      });
      _self.widthPercentage = $(element).outerWidth() / $(element).offsetParent().width() * 100;

      if (options.resize == true) {
        $(window).resize(function () {
          _self.resize();
        });
      }

      _self._bind();

      if (options.required || $(input).prop('required')) {
        _self.options.required = true;
        $(input).prop('required', true);
      }

      if (!options.ajax) {
        _self._formValidation();
      }

      if (!empty(options.image) && options.editstart == false) {
        $(element).data('name', options.image).append($('<img />').addClass('preview').attr('src', options.image));
        var tools = $('<div class="preview tools"></div>');
        var edit = $('' + this.button.edit + '');
        var del = $('' + this.button.del + '');
        /*$(edit).unbind('click').click(function(e) {
        	e.preventDefault();
        	$(element).children().show();
        	$(element).find('.final').remove();
        	$(input).data('valid',false);
        })*/

        $(del).unbind('click').click(function (e) {
          e.preventDefault();

          _self.reset();
        });
        /*if (options.buttonEdit != false) {
        	$(tools).append(edit)
        }*/

        if (options.buttonDel != false) {
          $(tools).append(del);
        }

        $(element).append(tools);
      } else if (!empty(options.image)) {
        _self.readImage(options.image, options.image, options.image, _self.imageMimes[options.image.split('.').pop()]); //$(img).attr('src'),)

      }

      if (_self.options.onAfterInitImage) _self.options.onAfterInitImage.call(_self, _self);
    },
    _bind: function _bind() {
      var _self = this;

      var element = _self.element;
      var input = _self.input; //bind the events

      $(element).unbind('dragover drop mouseout').on({
        dragover: function dragover(event) {
          _self.handleDrag(event);
        },
        drop: function drop(event) {
          _self.handleFile(event, $(this));
        },
        mouseout: function mouseout() {
          $(document).unbind('mouseup touchend').on('mouseup touchend', function (e) {
            e.preventDefault();

            _self.imageUnhandle(); //

          });
        }
      });
      $(input).unbind('change').change(function (event) {
        _self.drag = false;

        _self.handleFile(event, $(element));
      });
    },
    handleFile: function handleFile(event, element) {
      event.stopPropagation();
      event.preventDefault();

      var _self = this;

      var options = this.options;
      var files = _self.drag == false ? event.originalEvent.target.files : event.originalEvent.dataTransfer.files; // FileList object.

      _self.drag = false; // _self.reset();

      if (options.removeurl != null && !empty($(element).data('name'))) {
        console.log('test');
        $.ajax({
          type: 'POST',
          url: options.removeurl,
          data: {
            image: $(element).data('name')
          },
          success: function success(response) {
            if (_self.options.onAfterRemoveImage) _self.options.onAfterRemoveImage.call(_self, response, _self);
          }
        });
      }

      $(element).removeClass('notAnImage').addClass('loading'); //.unbind('dragover').unbind('drop');

      for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
          $(element).addClass('notAnImage');
          continue;
        }

        var reader = new FileReader();

        reader.onload = function (theFile) {
          //console.log(theFile);
          return function (e) {
            $(element).find('img').remove();

            _self.readImage(reader.result, e.target.result, theFile.name, theFile.type);
          };
        }(f);

        reader.readAsDataURL(f);
      }

      if (_self.options.onAfterSelectImage) _self.options.onAfterSelectImage.call(_self, response, _self);
    },
    readImage: function readImage(image, src, name, mimeType) {
      var _self = this;

      var options = this.options;
      var element = this.element;
      _self.drag = false;
      var img = new Image();

      img.onload = function (tmp) {
        //console.log(tmp);
        var imgElement = $('<img src="' + src + '" name="' + name + '" />');
        var width, height, useWidth, useHeight, ratio, elementRatio;
        width = useWidth = img.width;
        height = useHeight = img.height;
        ratio = width / height;
        elementRatio = $(element).outerWidth() / $(element).outerHeight(); //resize image

        if (options.originalsize == false) {
          //need to add the option is smaller = true, dont resize
          //also if the image == 100% the size of the element, dont add extra space
          useWidth = $(element).outerWidth() + 40;
          useHeight = useWidth / ratio;

          if (useHeight < $(element).outerHeight()) {
            useHeight = $(element).outerHeight() + 40;
            useWidth = useHeight * ratio;
          }
        } else if (useWidth < $(element).outerWidth() || useHeight < $(element).outerHeight()) {
          if (options.smaller == true) {//do nothing
          } else {
            if (ratio < elementRatio) {
              useWidth = $(element).outerWidth();
              useHeight = useWidth / ratio;
            } else {
              useHeight = $(element).outerHeight();
              useWidth = useHeight * ratio;
            }
          }
        }

        var left = parseFloat(($(element).outerWidth() - useWidth) / 2); // * -1;

        var top = parseFloat(($(element).outerHeight() - useHeight) / 2); // * -1;

        imgElement.css({
          left: left,
          top: top,
          width: useWidth,
          height: useHeight
        });
        _self.image = $(imgElement).clone().data({
          mime: mimeType,
          width: width,
          height: height,
          ratio: ratio,
          left: left,
          top: top,
          useWidth: useWidth,
          useHeight: useHeight
        }).addClass('main').bind('mousedown touchstart', function (event) {
          _self.imageHandle(event);
        });
        _self.imageGhost = options.ghost ? $(imgElement).addClass('ghost') : null; //place the images

        $(element).append($('<div class="cropWrapper"></div>').append($(_self.image)));

        if (!empty(_self.imageGhost)) {
          $(element).append(_self.imageGhost);
        } //$(element).unbind('dragover').unbind('drop');


        _self._tools(); //clean up


        $(element).removeClass('loading');
      };

      img.src = image;
    },
    handleDrag: function handleDrag(event) {
      var _self = this;

      _self.drag = true;
      event.stopPropagation();
      event.preventDefault();
      event.originalEvent.dataTransfer.dropEffect = 'copy';
    },
    imageHandle: function imageHandle(e) {
      e.preventDefault(); // disable selection

      var event = e.originalEvent.touches || e.originalEvent.changedTouches ? e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] : e;

      var _self = this;

      var element = this.element;
      var image = this.image;
      var options = this.options;
      var height = image.outerHeight(),
          width = image.outerWidth(),
          cursor_y = image.offset().top + height - event.pageY,
          cursor_x = image.offset().left + width - event.pageX;
      $(document).on({
        'dragstart mousemove touchmove': function dragstartMousemoveTouchmove(e) {
          $('body').css({
            cursor: 'move'
          });
          e.stopImmediatePropagation();
          e.preventDefault();
          var event = e.originalEvent.touches || e.originalEvent.changedTouches ? e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] : e;
          var imgTop = event.pageY + cursor_y - height,
              imgLeft = event.pageX + cursor_x - width;
          var hasBorder = $(element).outerWidth() != $(element).innerWidth();

          if (options.smaller == false) {
            if (parseInt(imgTop - $(element).offset().top) > 0) {
              imgTop = $(element).offset().top + (hasBorder ? 1 : 0);
            } else if (imgTop + height < $(element).offset().top + $(element).outerHeight()) {
              imgTop = $(element).offset().top + $(element).outerHeight() - height + (hasBorder ? 1 : 0);
            }

            if (parseInt(imgLeft - $(element).offset().left) > 0) {
              imgLeft = $(element).offset().left + (hasBorder ? 1 : 0);
              ;
            } else if (imgLeft + width < $(element).offset().left + $(element).outerWidth()) {
              imgLeft = $(element).offset().left + $(element).outerWidth() - width + (hasBorder ? 1 : 0);
              ;
            }
          }

          image.offset({
            top: imgTop,
            left: imgLeft
          });

          _self._ghost();
        },
        'dragend mouseup touchend': function dragendMouseupTouchend() {
          _self.imageUnhandle();
        }
      });
    },
    imageUnhandle: function imageUnhandle() {
      var _self = this;

      var image = _self.image;
      $(document).unbind('mousemove touchmove');
      $('body').css({
        cursor: ''
      });
      if (_self.options.onAfterMoveImage) _self.options.onAfterMoveImage.call(_self, _self);
    },
    imageZoom: function imageZoom(x) {
      var _self = this;

      var element = _self.element;
      var image = _self.image;
      var options = _self.options;

      if (empty(image)) {
        _self._clearTimers();

        return false;
      }

      var ratio = image.data('ratio');
      var newWidth = image.outerWidth() + x;
      var newHeight = newWidth / ratio;

      if (options.smaller == false) {
        //smaller then element?
        if (newWidth < $(element).outerWidth()) {
          newWidth = $(element).outerWidth();
          newHeight = newWidth / ratio;
        }

        if (newHeight < $(element).outerHeight()) {
          newHeight = $(element).outerHeight();
          newWidth = newHeight * ratio;
        }
      } else {
        if (newWidth < 1 || newHeight < 1) {
          if (newWidth > newHeight) {
            newWidth = 1;
            newHeight = newWidth / ratio;
          } else {
            newHeight = 1;
            newWidth = newHeight * ratio;
          }
        }
      }

      var newTop = image.css('top').replace(/[^-\d\.]/g, '') - (newHeight - image.outerHeight()) / 2;
      var newLeft = image.css('left').replace(/[^-\d\.]/g, '') - (newWidth - image.outerWidth()) / 2;

      if (options.smaller == false) {
        if ($(element).offset().left - newLeft < $(element).offset().left) {
          newLeft = 0;
        } else if ($(element).outerWidth() > newLeft + $(image).outerWidth() && x <= 0) {
          newLeft = $(element).outerWidth() - newWidth;
        }

        if ($(element).offset().top - newTop < $(element).offset().top) {
          newTop = 0;
        } else if ($(element).outerHeight() > newTop + $(image).outerHeight() && x <= 0) {
          newTop = $(element).outerHeight() - newHeight;
        }
      }

      image.css({
        width: newWidth,
        height: newHeight,
        top: newTop,
        left: newLeft
      });

      _self._ghost();
    },
    imageCrop: function imageCrop() {
      var _self = this;

      var element = _self.element;
      var image = _self.image;
      var input = _self.input;
      var options = _self.options;
      var factor = options.width != $(element).outerWidth() ? options.width / $(element).outerWidth() : 1;
      var finalWidth, finalHeight, finalTop, finalLeft, imageWidth, imageHeight, imageOriginalWidth, imageOriginalHeight;
      finalWidth = options.width;
      finalHeight = options.height;
      finalTop = parseInt(Math.round(parseInt($(image).css('top')) * factor));
      finalLeft = parseInt(Math.round(parseInt($(image).css('left')) * factor));
      imageWidth = parseInt(Math.round($(image).width() * factor));
      imageHeight = parseInt(Math.round($(image).height() * factor));
      imageOriginalWidth = $(image).data('width');
      imageOriginalHeight = $(image).data('height');
      finalTop = finalTop || 0;
      finalLeft = finalLeft || 0;
      var obj = {
        name: $(image).attr('name'),
        imageOriginalWidth: imageOriginalWidth,
        imageOriginalHeight: imageOriginalHeight,
        imageWidth: imageWidth,
        imageHeight: imageHeight,
        width: finalWidth,
        height: finalHeight,
        left: finalLeft,
        top: finalTop
      };
      $(element).find('.tools').children().toggle();
      $(element).find('.tools').append($(_self.button.saving));

      if (options.canvas == true) {
        var canvas = $('<canvas class="final" id="canvas_' + $(input).attr('name') + '" width="' + finalWidth + '" height="' + finalHeight + '" style="position:absolute; top: 0; bottom: 0; left: 0; right: 0; z-index:100; width: 100%; height: 100%;"></canvas>');
        $(element).append(canvas);
        var canvasContext = $(canvas)[0].getContext('2d');
        var imageObj = new Image(); //canvasContext.fillStyle = "rgba(255, 255, 255, 0)";
        //canvasContext.clearRect(0,0,finalWidth,finalHeight);

        imageObj.onload = function () {
          var canvasTmp = $('<canvas width="' + imageWidth + '" height="' + imageHeight + '"></canvas>');
          var canvasTmpContext = $(canvasTmp)[0].getContext('2d');
          var tmpImage = $('<img src="" />'); //canvasTmpContext.fillStyle = "rgba(255, 255, 255, 0)";
          //canvasTmpContext.clearRect(0,0,imageWidth,imageHeight);

          canvasTmpContext.drawImage(imageObj, 0, 0, imageWidth, imageHeight); //$(element).append(canvasTmp);

          var tmpObj = new Image();

          tmpObj.onload = function () {
            if (options.canvasImageOnly == true) {
              var _imageWidth = imageWidth;
              var _imageHeight = imageHeight;

              if (finalLeft < 0) {
                _imageWidth += finalLeft;
              } else if (finalLeft + imageWidth > finalWidth) {
                _imageWidth = finalWidth - finalLeft;
              }

              if (finalTop < 0) {
                _imageHeight += finalTop;
              } else if (finalTop + imageHeight > finalHeight) {
                _imageHeight = finalHeight - finalTop;
              }

              var canvasImageOnly = $('<canvas width="' + _imageWidth + '" height="' + _imageHeight + '"></canvas>');
              var canvasImageOnlyContext = $(canvasImageOnly)[0].getContext('2d');
              canvasImageOnlyContext.drawImage(tmpObj, finalLeft < 0 ? finalLeft : 0, finalTop < 0 ? finalTop : 0, imageWidth, imageHeight);
            }

            if (imageWidth < finalWidth || imageHeight < finalHeight) {
              canvasContext.drawImage(tmpObj, finalLeft, finalTop, imageWidth, imageHeight);
            } else {
              canvasContext.drawImage(tmpObj, finalLeft * -1, finalTop * -1, finalWidth, finalHeight, 0, 0, finalWidth, finalHeight);
            }

            var dataUrl = options.canvasImageOnly == true ? $(canvasImageOnly)[0].toDataURL(image.data('mime')) : $(canvas)[0].toDataURL(image.data('mime'));

            if (options.save == false) {
              $(element).find('.tools .saving').remove();
              $(element).find('.tools').children().toggle();
              if (_self.options.onSave) _self.options.onSave.call(_self, $.extend(obj, options.data, {
                data: dataUrl
              }));

              _self.imageFinal();
            } else if (options.ajax == true) {
              _self._ajax($.extend({
                data: dataUrl
              }, obj));
            } else {
              var json = JSON.stringify($.extend({
                data: dataUrl
              }, obj));
              $(input).after($('<input type="text" name="' + $(input).attr('name') + '_values" class="final" />').val(json));
              $(input).data('required', $(input).prop('required'));
              $(input).prop('required', false);
              $(input).wrap('<form>').parent('form').trigger('reset');
              $(input).unwrap();
              $(element).find('.tools .saving').remove();
              $(element).find('.tools').children().toggle();

              _self.imageFinal();
            }
          };

          tmpObj.src = $(canvasTmp)[0].toDataURL(image.data('mime'));
        };

        imageObj.src = $(image).attr('src');

        if (options.saveOriginal === true) {
          //console.log($(image).attr('src'));
          obj = $.extend({
            original: $(image).attr('src')
          }, obj);
        }
      } else {
        if (options.ajax == true) {
          _self._ajax($.extend({
            data: $(image).attr('src'),
            saveOriginal: options.saveOriginal
          }, obj));
        } else {
          var finalImage = $(element).find('.cropWrapper').clone();
          $(finalImage).addClass('final').show().unbind().children().unbind();
          $(element).append($(finalImage));

          _self.imageFinal();

          var json = JSON.stringify(obj);
          $(input).after($('<input type="text" name="' + $(input).attr('name') + '_values" class="final" />').val(json));
        }
      }
    },
    _ajax: function _ajax(obj) {
      var _self = this;

      var element = _self.element;
      var image = _self.image;
      var options = _self.options;

      if (options.dimensionsonly == true) {
        delete obj.data;
      }

      console.log('test');
      var $data = $.extend(obj, options.data);
      console.log($data);
      $.ajax({
        type: 'POST',
        url: options.url,
        data: $.extend(obj, options.data),
        success: function success(response) {
          if (response.status == "success") {
            var file = response.url.split('?');
            $(element).find('.tools .saving').remove();
            $(element).find('.tools').children().toggle();
            $(element).data('name', file[0]);
            $(element).data('filename', response.filename);

            if (options.canvas != true) {
              $(element).append($('<img src="' + file[0] + '" class="final" style="width: 100%" />'));
            }

            _self.imageFinal();
          } else {
            $(element).find('.tools .saving').remove();
            $(element).find('.tools').children().toggle();
            $(element).append($('<div class="alert alert-danger">' + response.error + '</div>').css({
              bottom: '10px',
              left: '10px',
              right: '10px',
              position: 'absolute',
              zIndex: 99
            }));
            setTimeout(function () {
              _self.responseReset();
            }, 2000);
          }
        },
        error: function error(response, status) {
          document.write(response.responseText);
          $(element).find('.tools .saving').remove();
          $(element).find('.tools').children().toggle();
          $(element).append($('<div class="alert alert-danger"><strong>' + response.status + '</strong> ' + response.statusText + '</div>').css({
            bottom: '10px',
            left: '10px',
            right: '10px',
            position: 'absolute',
            zIndex: 99
          }));
          setTimeout(function () {
            _self.responseReset();
          }, 2000);
        }
      });
    },
    imageReset: function imageReset() {
      var _self = this;

      var image = _self.image;
      var element = _self.element;
      $(image).css({
        width: image.data('useWidth'),
        height: image.data('useHeight'),
        top: image.data('top'),
        left: image.data('left')
      });

      _self._ghost();

      if (_self.options.onAfterResetImage) _self.options.onAfterResetImage.call(_self, _self);
    },
    imageFinal: function imageFinal() {
      var _self = this;

      var element = _self.element;
      var input = _self.input;
      var options = _self.options; //remove all children except final

      $(element).addClass('done');
      $(element).children().not('.final').hide(); //create tools element

      var tools = $('<div class="tools final">'); //edit option after crop

      if (options.buttonEdit != false) {
        $(tools).append($(_self.button.edit).click(function () {
          $(element).children().show();
          $(element).find('.final').remove();
          $(input).data('valid', false);
        }));
      } //delete option after crop


      if (options.buttonDel != false) {
        $(tools).append($(_self.button.del).click(function (e) {
          _self.reset();
        }));
      } //append tools to element


      $(element).append(tools);
      $(element).unbind(); //download

      if (options.download == true) {
        var download = $('<div class="download final"/>');
        $(download).append($(_self.button.download).attr('download', $(_self.image).attr('name')).click(function (e) {
          $(this).attr('href', $(element).find('canvas.final')[0].toDataURL(_self.image.data('mime')));
        }));
        $(element).append(download);
      } //set input to valid for form upload


      $(input).unbind().data('valid', true); //custom function after process image;

      if (_self.options.onAfterProcessImage) _self.options.onAfterProcessImage.call(_self, _self);
    },
    responseReset: function responseReset() {
      var _self = this;

      var element = _self.element; //remove responds from ajax event

      $(element).find('.alert').remove();
    },
    reset: function reset() {
      var _self = this;

      var element = _self.element;
      var input = _self.input;
      var options = _self.options;
      _self.image = null;
      $(element).find('.preview').remove();
      $(element).removeClass('loading done').children().show().not('input[type=file]').remove();
      $(input).wrap('<form>').parent('form').trigger('reset');
      $(input).unwrap();
      $(input).prop('required', $(input).data('required') || options.required || false).data('valid', false);

      _self._bind();

      if (options.removeurl != null && !empty($(element).data('name'))) {
        console.log('test');
        $.ajax({
          type: 'POST',
          url: options.removeurl,
          data: {
            image: $(element).data('name')
          },
          success: function success(response) {
            if (_self.options.onAfterRemoveImage) _self.options.onAfterRemoveImage.call(_self, response, _self);
          }
        });
      }

      $(element).data('name', null);

      if (_self.imageGhost) {
        $(_self.imageGhost).remove();
        _self.imageGhost = null;
      }

      if (_self.options.onAfterCancel) _self.options.onAfterCancel.call(_self);
    },
    resize: function resize() {
      var _self = this;

      var options = _self.options;
      var element = _self.element;
      var image = _self.image;
      if (options.resize !== true) return false;
      var oldWidth = $(element).outerWidth();
      var width = $(element).offsetParent().width() * (_self.widthPercentage / 100);
      var factor = width / oldWidth;
      var height = $(element).outerHeight() * factor;
      $(element).css({
        height: height,
        width: width
      });

      if (width < 240) {
        if (!$(element).hasClass('smalltools smalltext')) {
          $(element).addClass('smalltools smalltext smalladded');
        }
      } else {
        if ($(element).hasClass('smalladded')) {
          $(element).removeClass('smalltools smalltext smalladded');
        }
      }

      if (!empty(image)) {
        //console.log(image.offset());
        $(image).css({
          left: $(image).css('left').replace(/[^-\d\.]/g, '') * factor + 'px',
          top: $(image).css('top').replace(/[^-\d\.]/g, '') * factor + 'px'
        });
        $(image).width($(image).width() * factor);
        $(image).height($(image).height() * factor);

        _self._ghost();
      } //console.log('resize plugin');


      return true;
    },

    /*		rotate: function(degrees) {
    			var _self			= this;
    			var element			= _self.element;
    			var image			= _self.image
    			
    			$(image).addClass('rotate_90');
    			var tmp				= $(image).data('width');
    			$(image).data('width',$(image).data('height'));
    			$(image).data('height',tmp);
    		},*/
    reinit: function reinit() {
      var _self = this;

      var element = _self.element;
      this.resize();

      this._bind();

      return true;
    },
    modal: function modal() {
      var _self = this;

      var element = _self.element;
      $(element).attr('style', $(element).data('style'));
      $(element).attr('class', $(element).data('class'));

      _self._init();

      return this;
    },
    _ghost: function _ghost() {
      var _self = this;

      var options = _self.options;
      var image = _self.image;
      var ghost = _self.imageGhost; //if set to true, mirror all drag events 
      //function in one place, much needed

      if (options.ghost == true && !empty(ghost)) {
        $(ghost).css({
          width: image.css('width'),
          height: image.css('height'),
          top: image.css('top'),
          left: image.css('left')
        });
      }
    },
    _tools: function _tools() {
      var _self = this;

      var element = _self.element;
      var tools = $('<div class="tools"></div>');
      var options = _self.options; //zoomin button

      if (options.buttonZoomin != false) {
        $(tools).append($(_self.button.zoomin).on({
          'touchstart mousedown': function touchstartMousedown(e) {
            e.preventDefault();
            _self.interval = window.setInterval(function () {
              _self.imageZoom(2);
            }, 1);
          },
          'touchend mouseup mouseleave': function touchendMouseupMouseleave(e) {
            e.preventDefault();
            window.clearInterval(_self.interval);
            if (_self.options.onAfterZoomImage) _self.options.onAfterZoomImage.call(_self, _self);
          }
        }));
      } //zoomreset button (set the image to the "original" size, same size as when selecting the image


      if (options.buttonZoomreset != false) {
        $(tools).append($(_self.button.zoomreset).on({
          'touchstart click': function touchstartClick(e) {
            e.preventDefault();

            _self.imageReset();
          }
        }));
      } //zoomout button


      if (options.buttonZoomout != false) {
        $(tools).append($(_self.button.zoomout).on({
          'touchstart mousedown': function touchstartMousedown(e) {
            e.preventDefault();
            _self.interval = window.setInterval(function () {
              _self.imageZoom(-2);
            }, 1);
          },
          'touchend mouseup mouseleave': function touchendMouseupMouseleave(e) {
            e.preventDefault();
            window.clearInterval(_self.interval);
            if (_self.options.onAfterZoomImage) _self.options.onAfterZoomImage.call(_self, _self);
          }
        }));
      }
      /*			if (options.buttonRotateccw != false) {
      				$(tools).append($(_self.button.rotateccw).on({
      					'touchstart touchend click': function(e) { 
      						e.preventDefault();
      						_self.rotate(-90); 
      					}
      				}));
      			}
      			if (options.buttonRotatecw != false) {
      				$(tools).append($(_self.button.rotatecw).on({
      					'touchstart touchend click': function(e) { 
      						e.preventDefault();
      						_self.rotate(90); 
      					}
      				}));
      			}*/
      //cancel button (removes the image and resets it to the original init event


      if (options.buttonCancel != false) {
        $(tools).append($(_self.button.cancel).on({
          'touchstart touchend click': function touchstartTouchendClick(e) {
            e.preventDefault();

            _self.reset();
          }
        }));
      } //done button (crop the image!) 


      if (options.buttonDone != false) {
        $(tools).append($(_self.button.done).on({
          'touchstart click': function touchstartClick(e) {
            e.preventDefault();

            _self.imageCrop();
          }
        }));
      }

      $(element).append($(tools));
    },
    _clearTimers: function _clearTimers() {
      //function to clear all timers, just to be sure!
      var interval_id = window.setInterval("", 9999);

      for (var i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }
    },
    _formValidation: function _formValidation() {
      var _self = this;

      var element = _self.element;
      var input = _self.input;
      $(element).closest('form').submit(function (e) {
        //e.stopPropagation();
        $(this).find('input[type=file]').each(function (i, el) {
          if ($(el).prop('required')) {
            if ($(el).data('valid') !== true) {
              e.preventDefault();
              return false;
            }
          }
        });
        return true;
      });
    }
  };

  $.fn.html5imageupload = function (options) {
    if ($.data(this, "html5imageupload")) return;
    return $(this).each(function () {
      $.data(this, "html5imageupload", new $.html5imageupload(options, this));
    });
  };
})(window, $);

function empty(mixed_var) {
  //discuss at: http://phpjs.org/functions/empty/
  // original by: Philippe Baumann
  //    input by: Onno Marsman
  //    input by: LH
  //    input by: Stoyan Kyosev (http://www.svest.org/)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Francesco
  // improved by: Marc Jansen
  // improved by: Rafal Kukawski
  var undef, key, i, len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }

  if (_typeof(mixed_var) === 'object') {
    for (key in mixed_var) {
      return false;
    }

    return true;
  }

  return false;
}

/***/ }),

/***/ "./Resources/js/modal_ajax.js":
/*!************************************!*\
  !*** ./Resources/js/modal_ajax.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


$(function () {
  //jQuery(document).ready(function($){
  //$(document).ready(function(){
  var modal_callback = '';
  $('.modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal

    var title = button.data('title'); // Extract info from data-* attributes

    var modal = $(this);
    modal.find('.modal-title').text(title);
  });
  $('#myModalAjax').on('show.bs.modal', function (event) {
    /*$(this).find('.modal-dialog').css({width:'auto',
    					   height:'auto',
    					  'max-height':'100%'});
    */
    var loading = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>';
    var button = $(event.relatedTarget); // Button that triggered the modal

    var title = button.data('title'); // Extract info from data-* attributes

    var url = button.data('href'); // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

    var modal = $(this);
    modal.data('reload', 0);
    modal_callback = button.data('callback'); //alert(modal.find('#myModalLabel').text());
    //modal.find('#myModalAjaxLabel').text(title);

    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html(loading);
    modal.find('.form-msg').html('');
    $.ajax({
      url: url
    }).done(function (data) {
      ajaxLink(data, modal);
    }).fail(function (response) {
      var err = response.responseJSON.message;
      modal.find('.form-msg').html(err);
    });
  });
  $('#myModalAjax').on('hidden.bs.modal', function (event) {
    var modal = $(this); //alert(modal_callback);
    ///*

    if (modal_callback != undefined) {
      eval(modal_callback);
    } //*/
    // modal.find('#myModalLabel').text('loading..');
    // modal.find('.form-msg').html('');


    modal.find('.modal-body').html('<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>'); //alert('chiuso');

    if (modal.data('reload')) {
      //alert('contenuto aggiornato percio ricarico');
      location.reload();
    }
  });

  function ajaxLink(data, modal) {
    var loading = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>';
    modal.find('.modal-body').html(data);
    modal.find('.form-msg').html(''); //modal.modal('handleUpdate');

    modal.find('a').click(function (e) {
      modal.find('.modal-body').html(loading);
      e.preventDefault();
      var mylink = $(this);
      var actionurl = mylink.attr('href');
      $.ajax({
        url: actionurl,
        type: 'get' //dataType: 'json',
        //data: querystring

      }).done(function (data) {
        ajaxLink(data, modal);
      }).fail(function (response) {
        var err = response.responseJSON.message;
        modal.find('.form-msg').html(err);
      });
    });
    modal.find('form').submit(function (e) {
      e.preventDefault();
      modal.find('.form-msg').html(loading);
      var old_data = modal.find('.modal-body').html();
      modal.find('.modal-body').html(loading);
      var myform = $(this);
      var querystring = myform.serialize();
      var actionurl = e.currentTarget.action;
      $.ajax({
        url: actionurl,
        type: 'post',
        dataType: 'json',
        data: querystring
      }).done(function (data) {
        modal.find('.form-msg').html('<div class="alert alert-success"><strong>Success </strong>' + data.msg + '</div>');
        modal.find('.modal-body').html(old_data);
        modal.data('reload', 1);
      }).fail(function (response) {
        console.log(response);
        var err = '';
        var errors = response.responseJSON.errors;

        for (i in errors) {
          err = err + '<div class="alert alert-danger"><strong>Error! </strong>' + i + ' ' + errors[i] + '</div>';
        }

        modal.find('.form-msg').html(err);
      }); //alert('preso !');
    });
  }
});

/***/ }),

/***/ "./Resources/js/typeahead_js.js":
/*!**************************************!*\
  !*** ./Resources/js/typeahead_js.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







//----------- typeahead
var suggestions = function suggestions($url) {
  return function findMatches(q, syncResults, asyncResults) {
    //var matches=[{'title':'test'}];
    //cb(matches);
    var $url_q = $url.replace('%QUERY%', q); //console.log(url_q);

    axios.get($url_q).then(function (response) {
      console.log(response);
      asyncResults(response.data.data);
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {});
  };
};

$(".typeahead").each(function () {
  var $this = $(this);
  var $name = $this.data('name');
  $this.input = $this.closest("div").find("input[name=" + $name + "]");
  $this.on('keyup', function (e) {
    $this.input.val(''); //se digito svuoto
  });
  $this.bind('typeahead:select', function (ev, suggestion) {
    var $val = suggestion['id'];
    $this.input.val($val);
  });
  $this.typeahead({
    hint: true,
    highlight: true,
    // Enable substring highlighting 
    minLength: 3 // Specify minimum characters required for showing suggestions 

  }, {
    name: $this.data('name'),
    displayKey: 'label',
    //senza questo mi mostra il json
    source: suggestions($this.data('url')),
    templates: {
      pending: ['<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div>'],
      empty: ['<div class="list-group search-results-dropdown"><div class="list-group-item">Nothing found.</div></div>'],
      header: ['<div class="list-group search-results-dropdown">'],
      suggestion: function suggestion(data) {
        return '<a href="#" class="list-group-item">' + data.label + '</a>';
      }
    }
  });
});

/***/ }),

/***/ "./Resources/js/xot.js":
/*!*****************************!*\
  !*** ./Resources/js/xot.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$('[data-toggle="tooltip"]').tooltip();
$('table').addClass('table table-striped table-bordered table-hover table-condensed');
var current_title;
$(window).blur(function () {
  //var current_href = $(location).attr('href');
  current_title = $(document).attr('title');
  $(document).attr("title", "Torna Qua !");
});
$(window).focus(function () {
  $(document).attr("title", current_title);
}); //-------------------------------------------------------

$('.collapse').collapse();
$('#multiselect').multiselect(); //------------------------------------------------------

/*
$.ajaxSetup({
headers: {
   	'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}
});
*/

$('.dropzone').html5imageupload({
  onAfterProcessImage: function onAfterProcessImage() {
    alert('onAfterProcessImage');
    var $val = $(this.element).data('name');
    $('#{{ $name }}').val($val);
  },
  onAfterCancel: function onAfterCancel() {
    alert('onAfterCancel');
    $('#{{ $name }}').val('');
  }
}); //$('.metismenu').metisMenu();

/***/ }),

/***/ "./Resources/sass/app.scss":
/*!*********************************!*\
  !*** ./Resources/sass/app.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["Resources/dist/css/app","/Resources/dist/js/vendor"], function() { return __webpack_exec__("./Resources/js/app.js"), __webpack_exec__("./Resources/sass/app.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);