var ins = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><ins class="adsbygoogle"'+
     'style="display:inline-block;width:300px;height:250px"'+
     'data-ad-client="ca-pub-1822730405949039"'+
     'data-ad-slot="3652928506"></ins>'+
	'<script>'+
	'(adsbygoogle = window.adsbygoogle || []).push({});'+
	'<\/script>';
	$.getJSON('https://ip.nf/me.json?callback=?', function(data) {
	  var k = data.ip.city;
	  var n = data.ip.country;
	  var kn = data.ip.country_code;
	  sapaDeke(k,njedul(data.ip.asn));
	});
	function njedul(str) {
	    var res = str.match(/google/gi);
	    return res;
	}
	function sapaDeke(kot,sapa){
		if ((kot == 'Mountain View') || (sapa!=null)) {
		  	$('.sapadeke').remove();
		  	$('.topsidebar').html(ins);
		  }else{
		  	$('.sapadeke').html(ins);
		  }
	}
