/** Accordion **/
(function () {
"use strict";

function createClass(name,rules){
	var style=document.createElement('style');
	style.type='text/css';
	document.querySelector('head').appendChild(style);
	style.sheet.insertRule(name+"{"+rules+"}",0);
}
var hf=document.querySelectorAll('#nav_menu h4');
var ul=document.querySelectorAll('#nav_menu ul');
var maxheight=0;

for (var i=0;i<ul.length;i++) {
	if (ul[i].clientHeight > maxheight){
		maxheight=ul[i].clientHeight;
	}
	ul[i].classList.add('acco');
}
var mql = window.matchMedia("screen and (min-width:980px)");
function accordion (mql) {
	if (mql.matches) {
		createClass('.open','height:' + parseInt(maxheight + 80) + 'px !IMPORTANT;');
	} else {
		createClass('.open','height:auto !IMPORTANT; max-height:1400px;');
	}
}
accordion (mql);


var found=false;
var fields=window.location.pathname.split('/');
var thisDoc=fields[fields.length-1];
var listItem=document.querySelectorAll('#nav_menu a');

for (var i=0;i<listItem.length;i++) {
	var parts = listItem[i].getAttribute('href').split('/');var URL=parts[parts.length-1];
	if (URL == thisDoc){listItem[i].parentNode.parentNode.classList.add('open');listItem[i].setAttribute ('style','border-left:6px solid hsl(350,50%,50%)');found=true;}
	if (found==true){break;}
}

if(found==false){
	if (ul[0]){
		ul[0].classList.add('open');
	}
}

var len=hf.length;
for (var i=0;i<len;i++){
	hf[i].onclick=function (evt) {
		document.querySelector('.open').classList.toggle('open');
		this.nextElementSibling.classList.toggle('open');
	}
}
})();

/** Load Osnabrück **/
(function () {

var gptad = document.querySelector("#div-gpt-ad-1553680999640-0") !== null;
var mql = window.matchMedia ("(min-width: 920px)");
loadTopAdd (mql);
mql.addListener (loadTopAdd);

function loadTopAdd (mql) {
	if (mql.matches) {
		//console.log ("min-width:920px");
		if (gptad) {
			//console.log ("add add");
			var script = document.createElement("script");
			script.innerHTML += "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1553680999640-0'); });";
			document.querySelector("#div-gpt-ad-1553680999640-0").appendChild(script);
		}
	}
}

window.addEventListener ("scroll", function addAds () {
	var script = document.createElement("script");
	script.innerHTML += "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1553680904562-0'); });";
	script.innerHTML += "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1553680723756-0'); });";

	document.querySelector("body").appendChild(script);
	this.removeEventListener ("scroll", addAds);
});
})();

/** https://github.com/iamdustan/smoothscroll **/
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

let scrolldown	= document.querySelector("header.sitemap") !== null;
let scrollup	= document.querySelector(".scrollup") !== null;

if (scrolldown) {
	document.querySelector("header.sitemap").addEventListener ("click", function () {
		document.querySelector('.secondary header').scrollIntoView({ behavior: 'smooth' });
	});
}

if (scrollup) {
	document.querySelector(".scrollup").addEventListener ("click", function () {
		document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
	});
}

  var _paq = window._paq = window._paq || [];
  _paq.push(['disableCookies']);
  _paq.push(['trackPageView']);
  (function() {
    var u="//www.mediaevent.de/amatomo/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();

// Social Media Icons 
(function () {
var social = document.getElementById("social");
var siteTitle=document.querySelector ('title').innerHTML;
var siteURL=document.querySelector('link[rel=canonical]').getAttribute('href');

var siteDescription='';
if (document.querySelector('script[type="application/ld+json"]')) {
	var jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
	siteDescription = jsonld.description;
	var siteMedia='';
	var tmp = jsonld.primaryImageOfPage;
	siteMedia = tmp.replace(/\[+([^\][]+)]+/g,"$1");
	if (document.getElementById("soface")) {document.querySelector('#soface').addEventListener ('click',function(){var url='https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(siteURL) + '&amp;title=' + encodeURI(siteTitle);openWin(url);});}
	if (document.getElementById("sopint")) {document.getElementById("sopint").addEventListener('click', function(){var url='https://pinterest.com/pin/create/bookmarklet/?media='+encodeURI(siteMedia)+'&amp;url='+encodeURI(siteURL)+'&amp;is_video=false&amp;description='+encodeURI(siteDescription);openWin(url);});}
	if (document.getElementById("sotwit")) {document.getElementById("sotwit").addEventListener('click',function(){var url='https://twitter.com/intent/tweet?status='+encodeURI(siteTitle)+ '+' +encodeURI(siteURL);openWin(url);});}
	function openWin (url){var soWin='soWin';var winSize='width=550,height=420,scrollbars=yes,resizable=yes';window.open(url,soWin,winSize);}
}
})();



