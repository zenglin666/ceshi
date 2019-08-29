"use strict";!function(){function n(i,t){$.ajax({type:"post",url:"/search/shop",data:{nowPage:i,cityCode:t},dataType:"json",success:function(t){if(t.info.error<1){if(0<i)$(".W_shopList").find(".W_search").children("ul").html(t.html);else{$(".W_shopList").find(".W_search").html(t.html);var e=Math.ceil($("#total_goods").val()/6);$(".W_shopList").find(".W_page_num").find(".page_total").html(e),c()}s(t.data.list)}}})}function s(t,e){function i(t){l.setContent(t.target.content),l.open(n,t.target.getPosition())}var o,a,s;e=e||10,s=(o=t||$.parseJSON($(".W_shopListInfo").text()).shopListInfo.list).length?(a=o[0].longitude||"113.33574",o[0].latitude||"23.015405"):(a=o.longitude||"113.33574",o.latitude||"23.015405");var n=new AMap.Map("map-container",{resizeEnable:!0,center:[a,s],zoom:e,mapStyle:"amap://styles/normal"}),c=[],l=new AMap.InfoWindow({offset:new AMap.Pixel(-18,-35)});if(o.length)for(var p=0;p<o.length;p++){var r;o[p].longitude||(o[p].longitude="113.33574"),o[p].latitude||(o[p].latitude="23.015405"),(r=new AMap.Marker({position:[o[p].longitude,o[p].latitude],offset:new AMap.Pixel(-12,-24),zIndex:101,map:n})).content=o[p].shopName,r.on("click",i),c.push(r)}else(r=new AMap.Marker({position:[o.longitude,o.latitude],offset:new AMap.Pixel(-12,-24),zIndex:101,map:n})).content=o.shopName,r.on("click",i),c.push(r)}function c(){$(".W_shopList .list_page").pagination({callback:function(t){var e=$(".W_shopList .list_page span.active").text();e<=Math.ceil($("#total_goods").val()/6)&&n(e-1,l),$(".W_page_num").find(".page_now").html(e)},prevCls:"icon-d-click-left",nextCls:"icon-d-click-right",totalData:$("#total_goods").val(),showData:6,keepShowPN:!0,count:0})}var l;$(".W_service").on("click",function(){$(".W_right").find(".W_qrCode").stop().fadeIn()}),$(".W_banner").bxSlider({auto:!0,autoControls:!1,speed:800,useCSS:!0,pause:5e3,pager:!0,prevText:"",nextText:"",autoHover:!0,loop:!0}),$(".W_filter").on("click",".choose-province .input_form",function(){var t,e="";$(".W_provinceList").text()&&(t=$.parseJSON($(".W_provinceList").text()).provinceList),$.each(t,function(t){e+='<li value="'+this.provinceCode+'" data-province_id="'+t+'" >'+this.provinceName+"</li>"}),$(".choose-province").find("ul").html(e).slideToggle()}).on("click",".choose-province ul li",function(){var t,e=$(this),i=e.html(),o=e.index(),a="",s=$(".W_provinceList").text();s&&(t=$.parseJSON(s).provinceList),$(".choose-province").find(".input_form").text(i).siblings("ul").slideUp(),$.each(t[o].citys,function(t){a+='<li value="'+this.cityCode+'" data-province_id="'+t+'" >'+this.cityName+"</li>"}),$(".choose-city").find("ul").slideUp().html(a).siblings(".input_form").html(t[o].citys[0].cityName),l=t[o].citys[0].cityCode,n(0,t[o].citys[0].cityCode)}).on("click",".choose-city .input_form",function(){$(".choose-city").find("ul").slideToggle()}).on("click",".choose-city ul li",function(){var t=$(this);t.parents("ul").slideUp(),n(0,t.attr("value")),l=t.attr("value"),$(".choose-city").find(".input_form").html(t.html())}),$(".W_shopBox").on("click",".W_search ul li span.detail",function(){var t=$(this);$.ajax({type:"post",url:"/shop/detail",data:{shopCode:t.parents("li").attr("data-shop-code")},dataType:"json",success:function(t){if(t.info.error<1){var e="";e+='<i class="icon-d-o-close05"></i><div class="W_shopDetail"><div class="shopDetail-fl rl"><h4>'+t.data.shopName+"</h4>",e+="<p><em>地址：</em><span>"+t.data.address+"</span></p>",e+="<p><em>服务电话：</em><span>"+t.data.shopPhone+"</span></p>",e+="<p><em>营业时间：</em><span>"+t.data.openTime+"</span></p></div>",e+='<div class="shopDetail-fr fr"><p class="p1"><span class="sp1"><img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/'+t.data.qrcodeUrl+'" alt=""></span>',e+='<span class="sp2">店铺编号'+t.data.plaque+'</span></p><p class="p2">扫描二维码，预约维修方便快捷</p></div></div>',$("#W_shopDetail").html(e),layer.open({type:1,title:"<i class='icon-a-o-close05'></i>",closeBtn:"true",skin:"Wb_confirm_780 W_shop_detail",content:$("#W_shopDetail").html(),resize:!1,zIndex:layer.zIndex,success:function(t){layer.setTop(t)}})}}})}).on("click",".W_search ul li",function(){var t=$(this);t.addClass("on").siblings("li").removeClass("on"),t.find("span.detail").removeClass("h").siblings("i").addClass("icon-d-pos-select"),t.siblings("li").find("span.detail").addClass("h").siblings("i").removeClass("icon-d-pos-select"),$.ajax({type:"post",url:"/shop/detail",data:{shopCode:t.attr("data-shop-code")},dataType:"json",success:function(t){t.info.error<1&&s(t.data,15)}})}),function(){c(),s();var t=$(".choose-province").find(".input_form").text();if("省份"!=t){var e,i="",o=$(".W_provinceList").text();o&&(e=$.parseJSON(o).provinceList);for(var a=0;a<e.length;a++)e[a].provinceName==t&&($.each(e[a].citys,function(t){i+='<li value="'+this.cityCode+'" data-province_id="'+t+'" >'+this.cityName+"</li>"}),$(".choose-city").find("ul").slideUp().html(i).siblings(".input_form").html(e[a].citys[0].cityName),l=e[a].citys[0].cityCode,n(0,e[a].citys[0].cityCode))}}(),$(".shop").each(count),$(".city").each(count),$(".provice").each(count),$(".person").each(count),new wb.GnTab({tabNavId:"#tabnav",tabConId:"#tabcontent",callback:function(t){}})}();