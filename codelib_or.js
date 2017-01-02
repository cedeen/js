var ins = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script><ins class="adsbygoogle"'+
     'style="display:inline-block;width:300px;height:250px"'+
     'data-ad-client="ca-pub-1822730405949039"'+
     'data-ad-slot="3652928506"></ins>'+
	'<script>'+
	'(adsbygoogle = window.adsbygoogle || []).push({});'+
	'<\/script>';
	$(document).ready(function() {
	    $.getJSON('https://ip.nf/me.json', function(deke) {
		  var k = deke.ip.city;
		  var n = deke.ip.country;
		  var kn = deke.ip.country_code;
		  //console.log(JSON.stringify(deke, null, 2));
		  //console.log(calcTime('Markas', '-7'));
		  sapaDeke(k,njedul(deke.ip.asn),calcTime('Markas','-7'));
		});

		$.getScript( "https://rawgit.com/cedeen/js/master/lacakpencet.js", function( data, textStatus, jqxhr ) {
			var url1 = getParameter("url");
			var cate1 = getParameter("cate");
			function getParameter(e) {
			    for (var t = window.location.search.substr(1).split("&"), o = 0; o < t.length; o++) {
			        var r = t[o].split("=");
			        if (r[0] == e) return decodeURIComponent(r[1])
			    }
			    return !1
			}
			$('.sapadeke iframe').iframeTracker({
				blurCallback: function(){
					var posisi = '/p/safelink.html?clus=3382a056c5242cab0902f330c668f939&url='+url1+'&cate='+cate1;
					tabAnyar(posisi);
				}
			});
			function tabAnyar(url) {
			  var win = window.open(url, '_blank');
			  win.focus();
			}
		});
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
	$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});
