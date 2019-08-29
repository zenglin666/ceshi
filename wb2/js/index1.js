var oBanner = document.getElementById("banner");
var aLi = document.querySelectorAll("#banner>ul>li");
var oDir = document.querySelector(".direction");
var aA = oDir.getElementsByTagName("a");
var aBtn = document.querySelector(".btn-lunbo").getElementsByTagName("a");
var iNow = 0;
var Next = 0;
var timer = null;
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}




function move(obj,json,fn){
	//第一步关闭定时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			//取元素的值
			//1、透明度  2、有单位的px
			var iCur = 0;
			if(attr=="opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)
			}else{
				iCur = parseInt(getStyle(obj,attr));//有单位
			}

			//算速度
			var speed = (json[attr]-iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			//判断是否全部到达
			if(iCur !=json[attr]){
				bStop = false;
			}
			//判断是透明度还是普通的值
			if(attr == "opacity"){	
				obj.style.opacity = (iCur+speed)/100;
				obj.style.filter = "alpha(opacity"+(iCur+speed)+")";
			}else{
				obj.style[attr] = iCur+speed+"px";
			}
		}

		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},30)
}
for(var i=0;i<aBtn.length;i++){
	aBtn[i].index = i;
	aBtn[i].onmouseover = function(){
		for(var j=0;j<aBtn.length;j++){
			aBtn[j].className = '';
		}
		this.className = "active";
		move(aLi[iNow],{"opacity":0});
		move(aLi[this.index],{"opacity":100});
		//同步操作
		Next = this.index
		iNow = Next;
	}	
}


//左右点击按钮
aA[0].onclick = function(){
	if(Next==0){
		Next = aLi.length-1;
	}else{
		Next--;
	}
	toImg()
}

aA[1].onclick = function(){
	if(Next==aLi.length-1){
			Next = 0;
	}else{
		Next++;
	}
	toImg()
}


//轮播停止
oBanner.onmouseover = function(){
	clearInterval(timer)
}
//轮播开始
oBanner.onmouseout = function(){
	autoPlay()
}


autoPlay()
//自动轮播
function autoPlay(){
	timer = setInterval(function(){
		if(Next==aLi.length-1){
			Next = 0;
		}else{
			Next++;
		}
		toImg()
	},1000)
}

//淡入淡出轮播的原理
function toImg(){
	move(aLi[iNow],{"opacity":0});
	move(aLi[Next],{"opacity":100});
	iNow = Next;
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].className = '';
	}
	aBtn[Next].className = "active";
}




			var pinaa=document.querySelectorAll(".main11-c>a");
			var pindiv=document.querySelectorAll(".main11-div div")
			console.log(pinaa)
			console.log(pindiv)
			console.log(pinaa.length)
			console.log(pindiv.length)
			for( var i=0;i<pinaa.length;i++){
				pinaa[i].index=i;
				pinaa[i].onmouseover=function(){
					console.log(pindiv[i])
					for(var j=0;j<pinaa.length;j++){
						pinaa[j].className="";
						pindiv[j].style.display="none";
						console.log(pindiv[j]);
					}
					
				
				this.className="xuanzhong";
				pindiv[this.index].style.display="block";
			}
		}	