/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 16:06:38
 * @LastEditTime: 2019-08-27 17:06:32
 * @LastEditors: Please set LastEditors
 */
//轮播图
window.onload = function () {
	
	
	var aaa = document.getElementById("a");
	var bbb = document.getElementById("b");
	aaa.onmouseover = function() {
		bbb.style.display = "block";
		console.log('111')
	};
	aaa.onmouseout = function() {
	  bbb.style.display = "none";
	};
	bbb.onmouseover = function() {
	  bbb.style.display = "block";
	};
	bbb.onmouseout = function() {
	  bbb.style.display = "none";
	};



  var banner = document.getElementById("nbanner");
  var imgList = document.getElementById("img-list");
  var imgLi = imgList.children;
  var navList = document.getElementById("banner-nav-list");
  var listLi = navList.children;
  var index = 0;
  var timer = setInterval(auto, 2000);
  function auto() {
    if (index == 2) {
      imgList.style.left = 0;
      index = 1;
    } else {
      index++;
    }
    for (var i = 0; i < listLi.length; i++) {
      listLi[i].className = "";
    }
    listLi[index == 2 ? 0 : index].className = "active";
    animate(imgList, { left: -1200 * index }, 10);
  }

  banner.onmouseover = function() {
    clearInterval(timer);
  };
  banner.onmouseout = function() {
    timer = setInterval(auto, 2000);
  };
  for (let i = 0; i < listLi.length; i++) {
    listLi[i].onclick = function() {
      for (var j = 0; j < listLi.length; j++) {
        listLi[j].className = "";
      }
      index = i;
      animate(imgList, { left: -1200 * index }, 10);
      listLi[index].className = "active";
    };
  }

  //主要品牌
  band.onmouseover = function(eve) {
    var e = eve || event;
    var target = e.target || e.srcElement;
    var aa = target.getAttribute("aa");
    if (target.getAttribute("aaa") == "bbb") {
      target.src = "./img/" + aa + ".png";
      target.style.border = "1px solid #d9c582";
    }
  };

  band.onmouseout = function(eve) {
    var e = eve || event;
    var target = e.target || e.srcElement;
    var aa = target.getAttribute("aa");
    if (target.getAttribute("aaa") == "bbb") {
      target.src = "./img/nav" + aa + ".jpg";
      target.style.border = "none";
    }
  };

  //人气商品
  var shoptest = document.getElementById("shoptest");
  shoptest.onmouseover = function(eve) {
    var e = eve || event;
    var target = e.target || e.srcElement;
    if (target.getAttribute("ccc") == "ddd") {
      target.style.border = "1px solid #f2f2f2";
    }
  };
  shoptest.onmouseout = function(eve) {
    var e = eve || event;
    var target = e.target || e.srcElement;
    if (target.getAttribute("ccc") == "ddd") {
      target.style.border = "none";
    }
  };

};
