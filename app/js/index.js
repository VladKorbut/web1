'use strict';
var dataResults='';
function getData(value){
	dataResults = value;
	return value;
}
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
			var results = data.results[url.toString()].shortUrl;
			var link = document.createElement('a');
			link.setAttribute('href', results);
			link.className = 'btn bnt-link';
			link.innerHTML = results.toString();
			container.appendChild(link);			
		}

	});
}
