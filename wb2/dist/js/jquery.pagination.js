"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n){"function"!=typeof define||!define.amd&&!define.cmd||jQuery?"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(t,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),n(e),e}:n(jQuery):define(["jquery"],n)}(function(o){function a(t,e){var s,p=e,i=o(document),r=o(t);this.setPageCount=function(t){return p.pageCount=t},this.getPageCount=function(){return p.totalData&&p.showData?Math.ceil(parseInt(p.totalData)/p.showData):p.pageCount},this.getCurrent=function(){return s},this.filling=function(t){var e="";s=parseInt(t)||parseInt(p.current);var n=this.getPageCount();if(p.keepShowPN||1<s?e+='<a href="javascript:;" class="'+p.prevCls+'">'+p.prevContent+"</a>":0==p.keepShowPN&&r.find("."+p.prevCls)&&r.find("."+p.prevCls).remove(),s>=p.count+2&&1!=s&&n!=p.count){var a=p.coping&&p.homePage?p.homePage:"1";e+=p.coping?'<a href="javascript:;" data-page="1">'+a+"</a><span>...</span>":""}for(var i=s-p.count<=1?1:s-p.count,o=s+p.count>=n?n:s+p.count;i<=o;i++)i<=n&&1<=i&&(e+=i!=s?'<a href="javascript:;" data-page="'+i+'">'+i+"</a>":'<span class="'+p.activeCls+'">'+i+"</span>");if(s+p.count<n&&1<=s&&n>p.count){o=p.coping&&p.endPage?p.endPage:n;e+=p.coping?'<span>...</span><a href="javascript:;" data-page="'+n+'">'+o+"</a>":""}p.keepShowPN||s<n?e+='<a href="javascript:;" class="'+p.nextCls+'">'+p.nextContent+"</a>":0==p.keepShowPN&&r.find("."+p.nextCls)&&r.find("."+p.nextCls).remove(),e+=p.jump?'<input type="text" class="'+p.jumpIptCls+'"><a href="javascript:;" class="'+p.jumpBtnCls+'">'+p.jumpBtn+"</a>":"",r.empty().html(e)},this.eventBind=function(){var n=this,a=n.getPageCount(),t=1;r.off().on("click","a",function(){if(o(this).hasClass(p.nextCls)){if(r.find("."+p.activeCls).text()>=a)return o(this).addClass("disabled"),!1;t=parseInt(r.find("."+p.activeCls).text())+1}else if(o(this).hasClass(p.prevCls)){if(r.find("."+p.activeCls).text()<=1)return o(this).addClass("disabled"),!1;t=parseInt(r.find("."+p.activeCls).text())-1}else if(o(this).hasClass(p.jumpBtnCls)){if(""===r.find("."+p.jumpIptCls).val())return;t=parseInt(r.find("."+p.jumpIptCls).val())}else t=parseInt(o(this).data("page"));n.filling(t),"function"==typeof p.callback&&p.callback(n)}),r.on("input propertychange","."+p.jumpIptCls,function(){var t=o(this),e=t.val(),n=/[^\d]/g;n.test(e)&&t.val(e.replace(n,"")),parseInt(e)>a&&t.val(a),0===parseInt(e)&&t.val(1)}),i.keydown(function(t){if(13==t.keyCode&&r.find("."+p.jumpIptCls).val()){var e=parseInt(r.find("."+p.jumpIptCls).val());n.filling(e),"function"==typeof p.callback&&p.callback(n)}})},this.init=function(){this.filling(p.current),this.eventBind(),(p.isHide&&"1"==this.getPageCount()||"0"==this.getPageCount())&&r.hide()},this.init()}var i={totalData:0,showData:0,pageCount:9,current:1,prevCls:"prev",nextCls:"next",prevContent:"<",nextContent:">",activeCls:"active",coping:!1,isHide:!1,homePage:"",endPage:"",keepShowPN:!1,count:3,jump:!1,jumpIptCls:"jump-ipt",jumpBtnCls:"jump-btn",jumpBtn:"跳转",callback:function(){}};o.fn.pagination=function(t,e){"function"==typeof t?(e=t,t={}):(t=t||{},e=e||function(){});var n=o.extend({},i,t);return this.each(function(){var t=new a(this,n);e(t)})}});