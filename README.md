## CConsent
Cookie consent law - it's easy!

## Getting Started
You need to include the CSS file in the `<head>` section of your HTML and you need to include the js before the `</body>` tag in your HTML. Note you can optionally include a theme CSS file in the `<head>` too.

```html
<html>
	<head>
		...
		<link rel="stylesheet" href="/path/to/css/cconsent.min.css">
		...
	</head>
	<body>
		...
		<script src="/path/to/js/jquery.min.js"></script>
		<script src="/path/to/js/cconsent.min.js"></script>
	</body>
</html>
```
And next you need to initialize the CConsent (paste this lines after including cconsent.min.js!)

```html
<script>
$(function () {
	$.cconsent({
		text: "We're using HTTP cookie for your comfort",
		link: 'https://en.wikipedia.org/wiki/HTTP_cookie',
		link_text: 'Details',
		btn_text: 'Accept'
	});
});
</script>
```

Of course you can initialize CConsent without any parameters, like this:
```html
<script>
$(function () {$.cconsent()});
</script>
```
but we don't recommend this, because it's very-very boring :)