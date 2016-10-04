//Right Top Sidebar 300x250 TechnoBub
var ins = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><ins class="adsbygoogle"' +
    'style="display:inline-block;width:300px;height:250px"' +
    'data-ad-client="ca-pub-1822730405949039"' +
    'data-ad-slot="3652928506"></ins>' +
    '<script>' +
    '(adsbygoogle = window.adsbygoogle || []).push({});' +
    '<\/script>';

function njedul(e) {
    var n = e.match(/google/gi);
    return n
}

function sapaDeke(kot,sapa){
	if ((kot == 'Mountain View') || (sapa!=null)) {
		$('.sapadeke').remove();
		$('.topsidebar').html(ins);
	  }else{
		$('.sapadeke').html(ins);
	  }
}
function calcTime(city, offset) {
     d = new Date();
     utc = d.getTime() + (d.getTimezoneOffset() * 60000);
     nd = new Date(utc + (3600000*offset));
     jam = nd.getHours();
     if (jam>19 && jam<6) {
      sapaDeke(n, njedul(e.ip.asn))
  }
     return jam+"=> The local " + city + " is " + nd.toLocaleString();
 }
$(document).ready(function() {
    console.log(calcTime('Markas', '-7'));
    $.getJSON("https://ip.nf/me.json", function(e) {
	var n = e.ip.city;
	e.ip.country, e.ip.country_code;
    })
});
