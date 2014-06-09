
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */jQuery.cookie=function(e,t,n){if(typeof t=="undefined"){var a=null;if(document.cookie&&document.cookie!=""){var f=document.cookie.split(";");for(var l=0;l<f.length;l++){var c=jQuery.trim(f[l]);if(c.substring(0,e.length+1)==e+"="){a=decodeURIComponent(c.substring(e.length+1));break}}}return a}n=n||{};if(t===null){t="";n.expires=-1}var r="";if(n.expires&&(typeof n.expires=="number"||n.expires.toUTCString)){var i;if(typeof n.expires=="number"){i=new Date;i.setTime(i.getTime()+n.expires*24*60*60*1e3)}else i=n.expires;r="; expires="+i.toUTCString()}var s=n.path?"; path="+n.path:"",o=n.domain?"; domain="+n.domain:"",u=n.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),r,s,o,u].join("")};


 /*
 * jqModal - Minimalist Modaling with jQuery
 *   (http://dev.iceburg.net/jquery/jqModal/)
 *
 * Copyright (c) 2007,2008 Brice Burgess <bhb@iceburg.net>
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * $Version: 07/06/2008 +r13
 */(function(e){e.fn.jqm=function(r){var i={overlay:78,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:s,ajaxText:"",target:s,modal:s,toTop:s,onShow:s,onHide:s,onLoad:s};return this.each(function(){if(this._jqm)return n[this._jqm].c=e.extend({},n[this._jqm].c,r);t++;this._jqm=t;n[t]={c:e.extend(i,e.jqm.params,r),a:s,w:e(this).addClass("jqmID"+t),s:t};i.trigger&&e(this).jqmAddTrigger(i.trigger)})};e.fn.jqmAddClose=function(e){return c(this,e,"jqmHide")};e.fn.jqmAddTrigger=function(e){return c(this,e,"jqmShow")};e.fn.jqmShow=function(t){return this.each(function(){e.jqm.open(this._jqm,t)})};e.fn.jqmHide=function(t){return this.each(function(){e.jqm.close(this._jqm,t)})};e.jqm={hash:{},open:function(t,o){var a=n[t],l=a.c,c="."+l.closeClass,h=parseInt(a.w.css("z-index")),h=h>0?h:3e3,p=e("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":h-1,opacity:l.overlay/100});if(a.a)return s;a.t=o;a.a=!0;a.w.css("z-index",h);if(l.modal){r[0]||f("bind");r.push(t)}else l.overlay>0?a.w.jqmAddClose(p):p=s;a.o=p?p.addClass(l.overlayClass).prependTo("body"):s;if(i){e("html,body").css({height:"100%",width:"100%"});if(p){p=p.css({position:"absolute"})[0];for(var d in{Top:1,Left:1})p.style.setExpression(d.toLowerCase(),"(_=(document.documentElement.scroll"+d+" || document.body.scroll"+d+"))+'px'")}}if(l.ajax){var v=l.target||a.w,m=l.ajax,v=typeof v=="string"?e(v,a.w):e(v),m=m.substr(0,1)=="@"?e(o).attr(m.substring(1)):m;v.html(l.ajaxText).load(m,function(){l.onLoad&&l.onLoad.call(this,a);c&&a.w.jqmAddClose(e(c,a.w));u(a)})}else c&&a.w.jqmAddClose(e(c,a.w));l.toTop&&a.o&&a.w.before('<span id="jqmP'+a.w[0]._jqm+'"></span>').insertAfter(a.o);l.onShow?l.onShow(a):a.w.show();u(a);return s},close:function(t){var i=n[t];if(!i.a)return s;i.a=s;if(r[0]){r.pop();r[0]||f("unbind")}i.c.toTop&&i.o&&e("#jqmP"+i.w[0]._jqm).after(i.w).remove();if(i.c.onHide)i.c.onHide(i);else{i.w.hide();i.o&&i.o.remove()}return s},params:{}};var t=0,n=e.jqm.hash,r=[],i=e.browser.msie&&e.browser.version=="6.0",s=!1,o=e('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),u=function(t){i&&(t.o?t.o.html('<p style="width:100%;height:100%"/>').prepend(o):e("iframe.jqm",t.w)[0]||t.w.prepend(o));a(t)},a=function(t){try{e(":input:visible",t.w)[0].focus()}catch(n){}},f=function(t){e()[t]("keypress",l)[t]("keydown",l)[t]("mousedown",l)},l=function(t){var i=n[r[r.length-1]],s=!e(t.target).parents(".jqmID"+i.s)[0];s&&a(i);return!s},c=function(t,r,i){return t.each(function(){var t=this._jqm;e(r).each(function(){if(!this[i]){this[i]=[];e(this).click(function(){for(var e in{jqmShow:1,jqmHide:1})for(var t in this[e])n[this[e][t]]&&n[this[e][t]].w[e](this);return s})}this[i].push(t)})})}})(jQuery);



  /*
 * my stuff
 */$(function(){

    		function daysUntil(year, month, day) {
			  var now = new Date(),
			      dateEnd = new Date(year, month - 1, day), // months are zero-based
			      days = (dateEnd - now) / 1000/60/60/24;   // convert milliseconds to days

			  return Math.round(days);
			}

			console.log(daysUntil(2014, 7, 27)); // 19 days!!

			$(document.head).append('<style>.jqmWindow{display:none;position:fixed;top:17%;left:50%;margin-left:-475px;width:950px;color:#333;padding:12px;text-align:center}#header-nnl{font-family:"Palatino Linotype","Book Antiqua",Palatino,serif;color:#fff;font-size:1.6em;display:inline-block;margin-bottom:30px}#sub-header-nnl{font-family:"Palatino Linotype","Book Antiqua",Palatino,serif;color:#fff;font-size:1.125em;display:inline-block;margin-bottom:30px}#action-nnl{display:inline-block;margin-bottom:30px;color:#5BB75B;font-family:Arial,Helvetica,sans-serif;font-size:1em;font-weight:700}#continue-nnl{background-color:#5BB75B;color:#fff;width:150px;padding:15px 12px;text-decoration:none;border-radius:2px;display:block;margin-left:auto;margin-right:auto;font-family:Arial,Helvetica,sans-serif;font-size:1em;font-weight:700}#progress-nnl{background-color:#fff;width:477px;height:44px;padding:4.5px;border-radius:2px;margin-left:auto;margin-right:auto;margin-bottom:30px}#bar-nnl{background-color:#CF3C4E;width:60%;height:44px;border-radius:2px}.jqmOverlay{background-color:#000}</style>');

    		$(document.body).append('<div class="jqmWindow jqmID1" id="dialog"><span id="header-nnl">Sorry, your internet service provider put this website in the slow lane.</span><div id="progress-nnl"><div id="bar-nnl"></div></div><span id="sub-header-nnl">This is a drill. But in ' + daysUntil(2014, 7, 27) + ' days this will become a reality unless you take action.</span><a href="http://act.freepress.net/sign/internet_fcc_nprm_oliver/" target="_blank" id="action-nnl">Click Here to Tell the FCC Net Neutrality Is Important to You</a><a href="#" id="continue-nnl" class="jqmClose">Continue to Site</a></div>');
    		
    		var modalCookie = "modal_cookie";
    		var options = { path: '/', expires: 365 };
    		
    		var shouldOpen = $.cookie(modalCookie);
    		
    		$("#setCookieButton").click(function(){
    			$.cookie(modalCookie, 'no', options);
    			return false;
    		});
    		$("#deleteCookieButton").click(function(){
    			$.cookie(modalCookie, null, options);
    			return false;
    		});
    		
    		$('#dialog').jqm();
    		if (shouldOpen != "no") {
    			$('#dialog').jqmShow();
    			$.cookie(modalCookie, 'no', options);
    		};
    	});