/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 18:05:18
 * @LastEditTime: 2019-08-27 19:21:23
 * @LastEditors: Please set LastEditors
 */

function getCookie2() {
		    var decodedCookie = decodeURIComponent(document.cookie);
		    
		    var ca = decodedCookie.split(';');
			// console.log(ca);
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
					 c=ca[i].trim();
					c = c.split('=');
					c=c[0];
					console.log(c);
					var xhr=new XMLHttpRequest;
					xhr.open("POST","http://localhost/wb/php/ck.php");
					xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
					xhr.send("username="+c);
					
					
					xhr.onreadystatechange=function(){
						if(xhr.readyState==4&&xhr.status==200){
							var result=xhr.responseText;
							if(result==1){
								location.href="http://localhost/wb2/index.html";
							}
							
						}
					}
	 		  
				 }         
		     }
			 
		
function checkCookie2(){
	var user=getCookie();
	if (user!=""){
		console.log("欢迎 " + user + " 再次访问");
	}

}
				
if(document.cookie){
	getCookie2();
	
}