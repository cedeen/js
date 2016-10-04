var ins = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><ins class="adsbygoogle"'+
     'style="display:inline-block;width:300px;height:250px"'+
     'data-ad-client="ca-pub-1822730405949039"'+
     'data-ad-slot="3652928506"></ins>'+
	'<script>'+
	'(adsbygoogle = window.adsbygoogle || []).push({});'+
	'<\/script>';
	$(document).ready(function() {
	    $.getJSON('//ip-api.com/json?callback=?', function(deke) {
		  var k = deke.city;
		  var n = deke.country;
		  var kn = deke.countryCode;
		  //console.log(JSON.stringify(deke, null, 2));
		  //console.log(calcTime('Markas', '-7'));
		  sapaDeke(k,njedul(deke.as),calcTime('Markas','-7'));
		})
	});
	function njedul(str) {
	    var res = str.match(/google/gi);
	    return res;
	}
	function sapaDeke(kot,sapa,jam){
		if ((kot == 'Mountain View') || (sapa!=null)) {
		  	if (jam>9 && jam<17) {
			    $('.adarea').remove();
		  		$('.topsidebar').html(ins);
			  }
		  }else{
		  	$('.adarea').html(ins);
		  }
	}
	function calcTime(city, offset) {
	     d = new Date();
	     utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	     nd = new Date(utc + (3600000*offset));
	     jam = nd.getHours();
	     //return jam+"=> The local " + city + " is " + nd.toLocaleString();\
	     return jam;
	}
