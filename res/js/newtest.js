// JavaScript Document
//解决getElementById在IE下失效的函数 
 function getElementsByClassName(classname){  
                    var d=document;  
                    var e=d.getElementsByTagName('*');  
                    var c=new RegExp('\\b'+classname+'\\b');  
                    var r=[];  
                      
                    for(var i=0,l=e.length;i<l;i++){  
                        var cn=e[i].className;  
                        if(c.test(cn)){  
                            r.push(e[i]);  
                        }  
                    }  
                    return r;  
     }  
    if(typeof document.getElementsByClassName !='function'){  
         document.getElementsByClassName=getElementsByClassName;  
    }  
//图片透明蒙版
 function openVessel(strId)
    {
        document.getElementById(strId).style.display = "block";
    }
 function closeVessel(strId)
    {
        document.getElementById(strId).style.display = "none";
    }
	
//切换地区
function changeAera(num){
	var iframe = document.getElementById("carMainBox");
	var div = document.getElementById("right-ul-box");
	var liSelected = document.getElementsByClassName("selected");
	if(liSelected.length != 0 )
	liSelected[0].className = 'unselected';
	if(num == 1){
		iframe.src = "http://gd.qq.com/zt2013/gyh_dongguan/index.htm";
		var li = document.getElementById("dongguan");
		li.className = 'selected';
		var carPrice = document.getElementById("price-ul");
		var linkTarget = carPrice.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++){
		linkTarget[i].href="http://gd.qq.com/zt2013/gyh_dongguan/index.htm#"+i;
		}
		$.scrollTo(800, 300);
		
	}else if(num == 2){
		iframe.src = "http://gd.qq.com/zt2013/tgyh/index.htm";
		var li = document.getElementById("guangzhou");
		li.className = 'selected';
		var carPrice = document.getElementById("price-ul");
		var linkTarget = carPrice.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++){
		linkTarget[i].href="http://gd.qq.com/zt2013/tgyh/index.htm#"+i;
		}
		$.scrollTo(800, 300);
		
	}else if(num == 3){
		iframe.src = "http://gd.qq.com/zt2013/gyh_huizhou/index.htm";
		var li = document.getElementById("huizhou");
		li.className = 'selected';
		var carPrice = document.getElementById("price-ul");
		var linkTarget = carPrice.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++){
		linkTarget[i].href="http://gd.qq.com/zt2013/gyh_huizhou/index.htm#"+i;
		}
		$.scrollTo(800, 300);
	}else if(num == 4){
		iframe.src = "http://gd.qq.com/zt2014/gyh_dzhuhai/index.htm";
		var li = document.getElementById("zhuhai");
		li.className = 'selected';
		var carPrice = document.getElementById("price-ul");
		var linkTarget = carPrice.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++){
		linkTarget[i].href="http://gd.qq.com/zt2014/gyh_dzhuhai/index.htm#"+i;
		}
		$.scrollTo(800, 300);		
	}else if(num == 5){
		alert("敬请期待！");
	}else if(num == 6){
	   iframe.src = "http://gd.qq.com/zt2013/gyh_foshan/index.htm";
		var li = document.getElementById("foshan");
		li.className = 'selected';
		var carPrice = document.getElementById("price-ul");
		var linkTarget = carPrice.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++){
		linkTarget[i].href="http://gd.qq.com/zt2013/gyh_foshan/index.htm#"+i;
		}
		$.scrollTo(800, 300);
	}else if(num == 7){
		alert("敬请期待！");
	}else if(num == 8){
		alert("敬请期待！");
	}else if(num == 9){
		alert("敬请期待！");
	}
}


//价格筛选
function selectPrice(price){//1:10W以下; 2：10W-20W; 3:20W-40W; 4:40W-60W; 5:60W-80W; 6:80W-100w; 7:100W以上
	var sonPage = document.getElementById("carMainBox").contentWindow;
	var carBoxAll = sonPage.document.getElementsByClassName("car-list-card-middle");
	var carBoxShow = sonPage.document.getElementsByClassName(price);
	if(carBoxShow.length==0 && price != 0){
		alert("您所筛选的价位暂无活动车型！");
	}
	else{
		if(price == 0){
//				flashBoxUp();
//				for(var i=0; i<carBoxAll.length; i++){
//	                //$(carBoxAll[i]).fadeOut(399);
//					carBoxAll[i].style.display = "none";
//				}
				for(var i=0; i<carBoxAll.length; i++){
					//$(carBoxAll[i]).fadeIn("normal");
					carBoxAll[i].style.display = "block";
				}
				sonPage.window.onload(1);
				$.scrollTo(800, 300);
		}
		else{
				for(var i=0; i<carBoxAll.length; i++){
	                //$(carBoxAll[i]).fadeOut(399);
					carBoxAll[i].style.display = "none";
				}
				flashBoxUp();
				for(var i=0; i<carBoxShow.length; i++){
	                //$(carBoxShow[i]).fadeIn(399);
					carBoxShow[i].style.display = "block";
				}
				//setTimeout(function(){sonPage.window.onload();},500);
				sonPage.window.onload(1);	 
				$.scrollTo(800, 300);
		}
	}
   }

//关闭报名弹框
function closeSignUpBox(){
	var signUpBox = document.getElementById("signUpBox");
	$(signUpBox).fadeOut("fast"); 
}

//闪烁函数1
function flashBoxUp(){
	var flashElement = document.getElementById("flashBox");
	$(flashElement).fadeIn("slow");
	$(flashElement).fadeOut("slow");
}

//欢迎函数
function welcome(){
	alert("赶紧报名抢购您的心仪座驾吧！大礼等着您！");
	$.scrollTo(800, 300);
}










