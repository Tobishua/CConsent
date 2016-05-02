$(document).ready(function(){
	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
			"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	$.cconsent = function (conf) {
		var link = 'https://en.wikipedia.org/wiki/HTTP_cookie';
		var link_text = 'More';
		var text = "We're using HTTP cookie for your comfort";
		var btn_text = 'Accept';
		if (conf) {
			var link = conf.link;
			var link_text = conf.link_text;
			var text = conf.text;
			var btn_text = conf.btn_text;
			
		}
		if (getCookie('cookie-consent') === undefined) {
			$("body").append('<div class="cconsent">'+text+' <a href="'+link+'">'+link_text+'</a><div><a id="cookie-consent" class="btn-accept">'+btn_text+'</a></div></div>');
			$(".cconsent").fadeIn();
		}
		$("#cookie-consent").click(function(){
			var date = new Date;
			date.setDate(date.getDate() + 365);
			$(".cconsent").fadeOut();
			document.cookie = "cookie-consent=yes;expires="+date.toUTCString()+";domain="+window.location.hostname+";path=/";
		});
	}
});