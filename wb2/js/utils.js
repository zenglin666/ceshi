/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 08:53:29
 * @LastEditTime: 2019-08-28 09:52:26
 * @LastEditors: Please set LastEditors
 */
// import * as del from './network';
var list;
var mlist;
function doinput(allcheckbox, mcheckbox) {
   list = document.querySelectorAll(mcheckbox);
   mlist = $(mcheckbox);
  for (let i = 0; i < list.length; i++) {
    if ($(mlist[i]).prop("checked")) {
      $(allcheckbox).prop({ checked: true });
    } else {
      $(allcheckbox).prop({ checked: false });
    }
    list[i].onclick = function() {
      if ($(mlist[i]).prop("checked")) {
        $(mlist[i]).prop({ checked: true });
        if (i % 2 == 0) {
          i++;
          $(mlist[i]).prop({ checked: true });
          i--;
        } else {
          i -= 1;
          $(mlist[i]).prop({ checked: true });
          i++;
        }
      } else {
        $(mlist[i]).prop({ checked: false });
        if (i % 2 == 0) {
          i += 1;
          $(mlist[i]).prop({ checked: false });
          i--;
        } else {
          i -= 1;
          $(mlist[i]).prop({ checked: false });
          i++;
        }
      }
      var len = jQuery.parseJSON(showlist()).datalist.length;
      for (let i = 0; i < len*2; i++) {
        if ($(mlist[i]).prop("checked")) {
          $(allcheckbox).prop({ checked: true });
        } else {
          $(allcheckbox).prop({ checked: false });
          // break;
        }
      }
      taketotalcost();
    };
  }
}
// function checkboxAll(chname) {
// 	jQuery("[name='" + chname + "']").each(function() {
// 		jQuery(this).attr("checked", true);
// 	});
// }
function taketotalcost() {
  var totalcost = 0;
  var total = 0;
  for (let i = 0; i < list.length; i++) {
    if ($(mlist[i]).prop("checked")) {
      if (!(i % 2 == 0)) {
        totalcost += Number(list[i].parentNode.children[7].innerText);
        $(".mpaycost span:nth-of-type(2)")[0].innerText = totalcost;
      }
    } else {
      total++;
      if (total == list.length) {
        $(".mpaycost span:nth-of-type(2)")[0].innerText = 0;
      }
    }
  }
}
var count = 0;
var price = 0;
var a = "";
function countchange(leastr, addstr, mlilist) {
  //
  var mulxqlist = document.querySelectorAll(mlilist);
  for (let i = 0; i < mulxqlist.length; i++) {
    mulxqlist[i].onclick = function(eve) {
      var e = eve || event;
      var target = e.target || e.srcElement;
      if (target.className == leastr) {
        price = Number(target.parentNode.parentNode.children[4].innerText); //找位置取值
        a = target.nextElementSibling.innerText; //找位置取值
        count = a * 1;
        if (count == 1) {
          count = 1;
        } else {
          count--;
        }
        target.parentNode.nextElementSibling.nextElementSibling.innerText =
          price * count; //找位置赋值
        target.nextElementSibling.innerText = count; //找位置赋值
        taketotalcost();//拿到总额
      }
      if (target.className == addstr) {
        a = target.parentNode.children[1].innerText;
        price = Number(
          target.parentNode.nextElementSibling.nextElementSibling.innerText
        );
        count = a * 1;
        price /= count;
        count++;
        target.parentNode.children[1].innerText = count;
        target.parentNode.nextElementSibling.nextElementSibling.innerText =
			  price * count;
			  taketotalcost(); //拿到总额
      }
      if (target.innerHTML == "删除") {
        //根据id删除数据库
        var msetid = target.nextElementSibling.nextElementSibling.innerText;
        console.log(msetid)
        deldata(msetid);//删除数据库
        target.parentNode.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode.parentNode); //删除样式
        console.log(jQuery.parseJSON(showlist()).datalist[0]);
        if(jQuery.parseJSON(showlist()).datalist[0] == null){ 
          $('.mcontent2')[0].style = 'display:none';
          $('.mcontent3')[0].style = 'display:none';
          $('.shopnull')[0].style = "display: block";

        }
      }
    };
  }
}

function init(arrlist) {
  //拿到数据然后放进去
  var lichild = $(".mulxq li")
    .eq(0)
    .clone(); //克隆第一个
  lichild[0].style = "";
  lichild.prependTo($(".mulxq")); //插入放在第一个
  $(".mlistdetail img")[0].src = arrlist.wb_img;
  $(".mstorename")[0].innerText = arrlist.wb_name;
  $(".mxq span:nth-of-type(1)")[0].innerText = arrlist.wb_detail;
  $(".mxq span:nth-of-type(2)")[0].innerText = arrlist.wb_caizhi;
  $(".cost")[0].innerText = arrlist.wb_price;
  $(".cost2")[0].innerText = arrlist.wb_price * arrlist.wb_num;
  $(".maddspan2")[0].innerText = arrlist.wb_num;
  $(".msetid")[0].innerText = arrlist.wb_id;//设置id 删除时用
}

function array_diff(a, b) {
  //这个方法是两个数组去重 num数量再相加
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[j].wb_id == b[i].wb_id) {
        b[i].wb_num += a[j].wb_num; //如果已有数据 两个num相加
        a.splice(j, 1);
        j = j - 1;
      }
    }
  }
  return b.concat(a);
}
