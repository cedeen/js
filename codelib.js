//Right Top Sidebar 300x250 TechnoBub
var ins = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><ins class="adsbygoogle"'+
     'style="display:inline-block;width:300px;height:250px"'+
     'data-ad-client="ca-pub-1822730405949039"'+
     'data-ad-slot="3652928506"></ins>'+
	'<script>'+
	'(adsbygoogle = window.adsbygoogle || []).push({});'+
	'<\/script>';
	function njedul(e){var n=e.match(/google/gi);return n}function sapaDeke(e,n){null!=n?($(".topleftarea").html('<center>ADs</center><br />'+ins),$(".sapadeke").remove()):($(".sapadeke").html(ins),$(".topleftarea").remove())}$(document).ready(function(){$.getJSON("https://ip.nf/me.json",function(e){var n=e.ip.city;e.ip.country,e.ip.country_code;sapaDeke(n,njedul(e.ip.asn))})});
