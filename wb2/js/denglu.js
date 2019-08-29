/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 18:05:18
 * @LastEditTime: 2019-08-27 19:32:17
 * @LastEditors: Please set LastEditors
 */
 
var verifyCode = new GVerify("v_container");

var numyzm=document.getElementsByClassName("lyzm1")[0];
var btn1=document.getElementById("ljsbtn1");
var btn2=document.getElementsByClassName("span1")[0];
var ewm=document.getElementsByClassName("lsmdl")[0];
var downloadApp=document.getElementById("downloadApp");
var lapp=document.getElementById("lapp");
var mfzc=document.getElementById("mfzc");
var dl=document.getElementById("user_login2");
var uname=document.getElementsByClassName("phone_num")[0];
var pas=document.getElementsByClassName("phone_num")[1];
var dlts=document.getElementById("dlts");
var lyzts=document.getElementById("lyzti");
var vip=document.getElementsByClassName("vip")[0];
var banner=document.getElementsByClassName("banner")[0];
var pos1=document.getElementsByClassName("pos1")[0];
var ldlb=document.getElementsByClassName("ldlb")[0];
// console.log(111);
// console.log(numyzm);
	var f2=false;
numyzm.onblur=function(){
		
		var Nyzm=numyzm.value;
		var res = verifyCode.validate(Nyzm);
		
		if(res==false){
			f2=false;
			lyzts.style.display="block";	
		}else{
			f2=true;
			console.log(111);
			 lyzts.style.display="none";
		}
	}



btn1.onclick=function(){
	btn1.style.color="#cc5252";
	btn2.style.color="grey";
	ewm.style.display="block";
}
btn2.onclick=function(){
	btn2.style.color="#cc5252";
	btn1.style.color="grey";
	ewm.style.display="none";
	lapp.style.display="none";
	downloadApp.innerHTML="下载万表APP";
	appFalg=true;
}
var appFalg=true;
downloadApp.onclick=function(){
	if(appFalg){
		downloadApp.innerHTML="关闭二维码";
		appFalg=false;
		lapp.style.display="block";
	}else{
		downloadApp.innerHTML="下载万表APP";
		appFalg=true;
		lapp.style.display="none";
	}	
}
	
	dl.onclick=function(){
		var Nname=uname.value;
		var Npas = pas.value;
		var Nyzm=numyzm.value;
		var xhr=new XMLHttpRequest;
		xhr.open("POST","http://localhost/wb2/php/denglu.php");
		xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
		xhr.send("username="+Nname+"&password="+Npas);
		
		
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result=xhr.responseText;
				var res = verifyCode.validate(Nyzm);
				if(result==1&&res==true){
					dlts.style.display="none";
					console.log("登录成功");
					location.href="http://localhost/wb2/index.html";
				}else{
					console.log("登录失败");
					dlts.style.display="block";
				}
				
			}
		}
		
		
		
		
		
	}
	
// pos1.onclick=function(){
// 	var box=vip.cloneNode(true);
// 	var chi=box.childNodes[9];
// 	var chi13=box.childNodes[13];
// 	// console.log(chi2);
// 	chi13.style.marginLeft="-55px";
// 	chi.style.marginLeft="0px";
// 	box.style.position="absolute";
// 	box.style.left="55px";
// 	box.style.top="67px";
// 	box.style.zIndex="5";
// 	box.style.backgroundColor="pink";
// 	ldlb.appendChild(box);
// 	
// 	
// }





// mfzc.onclick=function(){
// 	location.href='../zhuce.html';
// }