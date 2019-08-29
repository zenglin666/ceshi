/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 18:05:18
 * @LastEditTime: 2019-08-27 19:33:07
 * @LastEditors: Please set LastEditors
 */



var verifyCode = new GVerify("v_container");
var btn=document.getElementsByClassName("register")[0];
var mobi=document.getElementById("mobile");
var yzm=document.getElementById("imgCaptchaInput");
var password1=document.getElementById("password");
var password2=document.getElementById("password2");
var box=document.getElementsByClassName("box");
var zhuce = document.getElementsByClassName("register")[0];



var reg1=/^1[3456789]\d{9}$/;
var reg2=/^\w{6,20}$/;

var f1=false,f2=false,f3=false,f4=false,f5=false;

	mobi.onblur=function(){
		
		var Nmobi=mobi.value;
		if(reg1.test(Nmobi)){
			f1=true;
			box[0].children[1].style.display="none";	
		}else{
			 box[0].children[1].style.display="block";
		}

	}
	
	yzm.onblur=function(){
		
		var Nyzm=yzm.value;
		var res = verifyCode.validate(Nyzm);
		// console.log(res);
		if(res==false){
			box[1].children[2].style.display="block";	
		}else{
			f2=true;
			 box[1].children[2].style.display="none";
		}
	}
		// 验证码
		
		password1.onblur=function(){
			
			var Npas1=password1.value;
			if(reg2.test(Npas1)){
				f3=true;
				box[3].children[1].style.display="none";	
			}else{
				 box[3].children[1].style.display="block";
			}
			
		}
		password2.onblur=function(){
			
			var Npas1=password1.value;
			var Npas2=password2.value;
			if(Npas1==Npas2){	
				f4=true;
				box[4].children[1].style.display="none";	
			}else{
				 box[4].children[1].style.display="block";
			}
			 
			
			
		}
		// 密码确认
		function setCookie(username, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+ d.toUTCString();
		    document.cookie = username + "=" + cvalue + ";" + expires + ";path=/";;
		}
		// 设置cookie
		function getCookie(cname) {
		    var name = cname + "=";
		    
		    var decodedCookie = decodeURIComponent(document.cookie);
		    
		    var ca = decodedCookie.split(';');
			// console.log(ca);
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
					 c=ca[i].trim();
					c = c.split('=');
					 for(j=0;j<2;j++){
					  var uValue=mobi.value;
					  var pValue=password1.value;
					 if(uValue==c[0]&&pValue==c[1]){
						 console.log("ok");
					 }		  
				 }         
		     }
		}
	// 得到cookie
	if(f1&&f2&&f3&&f4){
		f5=true;	
		console.log("true");
	}
	zhuce.onclick=function(){
		var Nmobi=mobi.value;
		var Npas1=password1.value;
		if(f1&&f2&&f3&&f4){
			f5=true;	
			// console.log("true");
		}
		console.log("f5"+f5)
		if(f5){
			var xhr=new XMLHttpRequest;
			xhr.open("POST","http://localhost/wb2/php/login.php");
			xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
			xhr.send("username="+Nmobi+"&password="+Npas1);
			
			
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					var result=xhr.responseText;
					console.log(xhr.responseText);
					
				}
			}
			
			
			
			setCookie(Nmobi, " ", 10);
			 window.location.href="http://localhost/wb2/denglu.html";	
		}else{
			console.log("请输入正确信息")
		}
		
		
		
	}
	
	
	

