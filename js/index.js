'use strict';

$( document ).ready(function() {
var dataResults='';
function getData(value){
	dataResults = value;
	return value;
}
(function(){
    new Clipboard('.btn-clipboard');
})();
function sendLink(){
	var url = document.getElementById('link').value;
	var decodedUrl = encodeURIComponent(url);
	var bitlyApikey = 'R_0058d022beb1467b81283053231770b7';
	var bitlyLogin = 'o_1srunel3i1';
	var apiURL = 'http://api.bit.ly/shorten?version=2.0.1&longUrl='+decodedUrl+ '&login=' + bitlyLogin + '&apiKey=' + bitlyApikey;
	$.ajax({
		url: apiURL,
		type: 'POST',
		dataType: 'jsonp',
		success: function(data) {
			if(!data.errorCode){	
				var source   = $("#template").html();
				var template = Handlebars.compile(source);
				$('.shorten-url').html(template(data.results[url.toString()]));
			}else{
				postError();
			}
		},
	    error: function(){
	        postNoConn();
	    }
	});
}
$("#send").click(function(){
	sendLink();
})
function postError(){
	var error= document.createElement('p');
	error.className = 'alert alert-danger';
	error.innerHTML = "Неправильный ввод! Повторите попытку";
	$('.shorten-url').html(error);
}
function postNoConn(){
	var error= document.createElement('p');
	error.className = 'alert alert-danger';
	error.innerHTML = "Нет подключения";
	$('.shorten-url').html(error);
}
});