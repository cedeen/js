var isActive;
window.isActive = true;
$(window).focus(function() {
    this.isActive = true;
});
$(window).blur(function() {
    this.isActive = false;
});
window.onblur = function() {
    isActive = false;
};
window.onfocus = function() {
    isActive = true;
};
function a_to_fa() {
    var e = new Array;
    return protected_links = protected_links.replace(" ", ""), e = protected_links.split(",")
}
function generate() {
    var e = window.location.hostname;
    "" == protected_links || protected_links.match(e) ? "" == protected_links && (protected_links = e) : protected_links += ", " + e;
    var t = "",
        o = new Array,
        r = 0;
    t = document.getElementsByTagName("a"), a_to_va = t.length, o = a_to_fa(), r = o.length;
    for (var n = !1, a = 0, i = "", d = 0; a_to_va > d; d++) {
        for (n = !1, a = 0; 0 == n && r > a;) i = t[d].href, !i.match(o[a]) && i && i.match("http") || (n = !0), a++;
        if (0 == n) {
            var s = base64_encode(i),
                c = base64_encode(document.getElementById("cate").rel);
            t[d].href = page_engine + "?url=" + s + "&cate=" + c, t[d].rel = "nofollow", a_to_vb++, a_to_vc += d + ":::" + t[d].href + "\n"
        }
    }
    var p = document.getElementById("anonyminized"),
        l = document.getElementById("found_links");
    p && (p.innerHTML += a_to_vb), l && (l.innerHTML += a_to_va);
    for (var m = document.getElementById("plainuri").getElementsByTagName("a"), d = (document.title, 0); d < m.length; d++) m[d].setAttribute("target", "_blank");
    for (var d = 0; d < m.length; d++);
    document.getElementById("plainuri").getElementsByTagName("*")
}
function load() {
    skip();
    var e = document.getElementById("btn"),
        t = document.getElementById("dlurl"),
        o = document.getElementById("download"),
        r = 15,
        n = document.createElement("span");
    t.parentNode.replaceChild(n, t);
    var a;
    a = setInterval(function() {
        if (0 > r) {
            n.parentNode.replaceChild(t, n), clearInterval(a), o.style.display = "inline", e.style.display = "inline";
            var i = getParameter("url"),
                d = 'http://www.safetylink.xyz/p/linkconvert.html?url='+i+'&cate='+getParameter('cate');
            document.getElementById("dlurl").innerHTML = '<a id="download" href="' + d + '"><button id="btn" class="Visit_Link" style="display: inline; background-color: rgb(76, 175, 80); padding: 8px 18px; text-align: justify;">Visit Link</button></a>'
        } else {
            var i = getParameter("url"),
                d = 'http://www.safetylink.xyz/p/linkconvert.html?url='+i+'&cate='+getParameter('cate');
            n.innerHTML = '<h2 style="padding-bottom:-10px;">Link will appear in ' + r.toString() + ' Second<br /><button id="btn" style="display: inline; background-color: rgb(76, 175, 80);padding-bottom:-10px;" class="Visit_Link btn">Skip ...</button></h2>', document.getElementById("btn").onmouseover = function() {
                return document.getElementById("btn").style.display = "none", !1
            }, e.style.display = "none", o.style.display = "none", $("#adsright").click(function() {
                $(this).slideUp(), window.open(d), n.parentNode.replaceChild(t, n), clearInterval(a), o.style.display = "inline", e.style.display = "inline", document.getElementById("dlurl").innerHTML = '<a id="download" href="' + d + '"><button id="btn" class="Visit_Link" style="display: inline; background-color: rgb(76, 175, 80);text-align:justify;margin-bottom:2px;">Visit Link</button></a>'
            })
        }
        if (window.isActive) {
            r--
        }
    }, 1e3);
    var i = getParameter("cate");
    "techno" == i && (document.getElementById("fokus").innerHTML = "<p><b>Tag :</b> <i>android apps best, android best apps, android smartphone, android smartphones, best android, best android app, best android applications, best android apps free, best android game, best android mobile, best android phone, best android phones, best android smartphone, best android tablet, best apps for android, best browser for android, best free android games, best games for android, best video editing software, buy pc, cheap pc, cheapest desktop computer, compare desktop computers, computer desktop, computer desktops, computer game, computer games, computer gaming, computer gaming chair, computer hardware, computer hardware basics, computer pc, computer repair, computer repair courses, computer repair jobs, computer repair service, computer repair services, computer repair tools, computer repairs, custom pc, desktop computer, desktop computers, free audio editing software, free editing software, free image editing software, free movie editing software, free music editing software, free photo editing software, free picture editing software, free video capture software, free video converter software, free video editing software, free video editing software download, fun computer games, game computers, gamer pc, games computer, games for computer, gaming computer, gaming computer cases, gaming computers, gaming computers australia, gaming computers uk, gaming desktop computers, gaming pc, good gaming computer, good gaming computers, google smartphone, hardware, hd video editing software, image editing software free, latest science and technology news, latest science news, movie editing software free, movie editing software free download, pc, pc components, pc computer, pc computers, pc deals, pc for sale, pc hardware, pc online shop, pc sale, pc sales, pc shop, photo editing software free, photo editing software free download, picture editing software free, professional video editing software, recent science news, refurbished desktop computers, refurbished pc, repair computer, science and technology news, science news, science technology news, smartphone, smartphone android, the best android apps, the best android phone, video capture software, video chat software, video converter software, video editing software, video editing software download, video editing software free, video editing software free download, video editor software, video effects software, video player software, video software, what is computer hardware, what is the best android phone </i></p>")
}
function getParameter(e) {
    for (var t = window.location.search.substr(1).split("&"), o = 0; o < t.length; o++) {
        var r = t[o].split("=");
        if (r[0] == e) return decodeURIComponent(r[1])
    }
    return !1
}
function skip() {
    document.getElementById("dlurl").innerHTML = '<a id="download" href="#"><button id="btn" class="Visit_Link" style="text-align:justify;margin-bottom:2px;"><h2>Please Wait ...</h2></button></a>'
}
var protected_links = "",
    a_to_va = 0,
    a_to_vb = 0,
    a_to_vc = "";
load();
