/*
 * @Description: In User Settings Edit$
 * @Author: your name
 * @Date: 2019-08-26 08:53:29
 * @LastEditTime: 2019-08-27 16:02:24
 * @LastEditors: Please set LastEditors
 */


 
$(function () {
  var obj = jQuery.parseJSON(showlist());
  var newlist = [];
  var datalist = obj.datalist;
  console.log(datalist);
  console.log(datalist[0]==null);
if (!(datalist[0]==null)) {
  $('.mcontent2')[0].style = 'display:block';
  $('.mcontent3')[0].style = 'display:block';
  $('.shopnull')[0].style = "display: none";
}
  
  datalist = array_diff(datalist, newlist);

  for (let i = 0; i < datalist.length; i++) {
    if (!(datalist[0] == null)) {
      init(datalist[i]);//遍历赋值
    } 
    
  }
  // console.log(datalist);
  var list = document.querySelectorAll(".mcheckbox");
  var mlist = $(".mcheckbox");
  var totalcost = 0;
  $(".allcheckbox").on("click", function() {
    if ($(this).prop("checked")) {
      $(".allcheckbox").prop({ checked: true }); //设置全部
      $(".mcheckbox").prop({ checked: true }); //
      totalcost = 0;
      for (let i = 0; i < list.length; i++) {
        if ($(mlist[i]).prop("checked")) {
          if (!(i % 2 == 0)) {
            totalcost += Number(list[i].parentNode.children[7].innerText);
            $(".mpaycost span:nth-of-type(2)")[0].innerText = totalcost;
          }
        }
      }
    } else {
      $(".allcheckbox").prop({ checked: false });
      $(".mcheckbox").prop({ checked: false });
      $(".mpaycost span:nth-of-type(2)")[0].innerText = 0;
    }
  });
  doinput(".allcheckbox", ".mcheckbox"); //封装的方法 第一个给全选的input classname 第二个给子input classname
  //第一个给 减的classname 第二个给 加的classname 第三个给外边 li选择器的string
  countchange("maddspan1", "maddspan3", ".mulxq li");
});
