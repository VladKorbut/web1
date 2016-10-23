'use strict';
var dataResults='';
function getData(value){
	dataResults = value;
	return value;
}
function copyText(){
	new Clipboard('.btn-clipboard');
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
			if(!data.errorCode){
				deleteElement('p','alert-danger');
				deleteElement('input', 'short-url');
				deleteElement('a', 'btn-clipboard');
				var results = data.results[url.toString()].shortUrl;
				postInput(results);
				postButton();
			}else{
				deleteElement('p','alert-danger');
				deleteElement('input', 'short-url');
				deleteElement('a', 'btn-clipboard');
				postError();
			}
		}


	});
}
function deleteElement(tag, className){
	if(document.getElementsByClassName(className)){
		$(tag+"."+className).remove();
	}
}
function postInput(results) {
	var link = document.createElement('input');
	link.setAttribute('value', results);
	link.setAttribute('class', 'short-url form-control input-lg');
	container.appendChild(link);
}
function postButton(){
	var copy = document.createElement('a');
	copy.setAttribute('onclick', 'copyText()');
	copy.setAttribute('data-clipboard-target', '.short-url');
	copy.setAttribute('class', 'btn-clipboard');
	copy.innerHTML = "Скопировать ссылку";
	container.appendChild(copy);
}

function postError(){
	var error= document.createElement('p');
	error.className = 'alert alert-danger';
	error.innerHTML = "Неправильный ввод! Повторите попытку";
	container.appendChild(error);
}