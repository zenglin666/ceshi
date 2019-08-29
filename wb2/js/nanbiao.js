/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 11:56:45
 * @LastEditTime: 2019-08-29 14:38:50
 * @LastEditors: Please set LastEditors
 */
$(function() {
  var mli = $(".mlb ul li");
  var index = 0;
  setInterval(() => {
    if (index == 3) {
      index = 0;
    } else {
      index++;
    }
    mli
      .eq(index)
      .fadeIn()
      .siblings()
      .fadeOut();
  }, 2500);

  var mli2 = $(".mlb2 ul");
  console.log(mli2[0])
  var i = 0;
  setInterval(() => {
    if (i == 4) {
      i = 1;
      mli2[0].style.left = 0;
    } else {
      i++;
    }

    mli2.animate({
        left: -204 * i
      });
  }, 2500);
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
  // <div class="fenqi">免息分期</div>
  //   <div class="mbotton"></div>
  // $('.libiao').on('mouseover', function () { 
  //   $('.mbotton')[0].style.display = 'block';
  //   $('.fenqi')[0].style.display = 'none';
    
  // })
});
