// JavaScript Document
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
	if(num == 1){
		iframe.src = "dongguan.html";
		var carBrand = document.getElementById("left-ul");
		var linkTarget = carBrand.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++)
		 	linkTarget[i].href="dongguan.html#"+i;
	}else if(num == 2){
		iframe.src = "huizhou.html";
		var carBrand = document.getElementById("left-ul");
		var linkTarget = carBrand.getElementsByTagName("a");
		for(var i=0 ; i < linkTarget.length; i++)
		 	linkTarget[i].href="huizhou.html#"+i;
	}
}


//价格筛选
function selectPrice(price){//0:10W以下; 1：10W-20W; 2:20W-40W; 3:40W-60W; 4:60W-80W; 5:80W-100w; 6:100W以上
	var sonPage = document.getElementById("carMainBox").contentWindow;
	var carBoxAll = sonPage.document.getElementsByClassName("car-list-card-middle");
	var carBoxShow = sonPage.document.getElementsByClassName(price);
	
	if(price == 0){
		for(var i=0; i<carBoxAll.length; i++){
			carBoxAll[i].style.display = "block";
		}
		sonPage.window.onload();
	}else{
		for(var i=0; i<carBoxAll.length; i++){
			carBoxAll[i].style.display = "none";
		}
		for(var i=0; i<carBoxShow.length; i++){
			carBoxShow[i].style.display = "block";
		}
		sonPage.window.onload();
	}
}

//关闭报名弹框
function closeSignUpBox(){
	var signUpBox = document.getElementById("signUpBox");
	signUpBox.style.display = "none"
}