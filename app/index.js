'use strict'
let url = 'https://vk.com/feed';
let decodedUrl = encodeURIComponent(url);
console.log(decodedUrl);
let bitlyApikey = "R_0058d022beb1467b81283053231770b7";
let bitlyLogin = "o_1srunel3i1";
let apiURL = 'http://api.bit.ly/shorten?version=2.0.1&longUrl=' + url + '&login=' + bitlyLogin + '&apiKey=' + bitlyApikey;
console.log(apiURL);
$.ajax({
	url: apiURL,
	type: "POST",
	dataType: "jsonp",
	success: function(data) {
		results = data.results;
		console.log(JSON.stringify(results))
		console.log(results);
		for (res in results) {
			console.log()
		}
	}

});