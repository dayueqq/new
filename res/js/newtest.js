// JavaScript Document
//ͼƬ͸���ɰ�
 function openVessel(strId)
    {
        document.getElementById(strId).style.display = "block";
    }
 function closeVessel(strId)
    {
        document.getElementById(strId).style.display = "none";
    }
	
//�л�����
function changeAera(num){
	var iframe = document.getElementById("carMainBox");
	if(num == 1){
		iframe.src = "dongguan.html";
		//var carBrand = document.getElementById("left-ul");
		//var linkTarget = carBrand.getElementsByTagName("a");
		//for(var i=0 ; i < linkTarget.length; i++)
		 	//linkTarget[i].href="dongguan.html#"+i;
	}else if(num == 2){
		iframe.src = "huizhou.html";
		//var carBrand = document.getElementById("left-ul");
		//var linkTarget = carBrand.getElementsByTagName("a");
		//for(var i=0 ; i < linkTarget.length; i++)
		 //	linkTarget[i].href="huizhou.html#"+i;
	}
}


//�۸�ɸѡ
function selectPrice(price){//1:10W����; 2��10W-20W; 3:20W-40W; 4:40W-60W; 5:60W-80W; 6:80W-100w; 7:100W����
	var sonPage = document.getElementById("carMainBox").contentWindow;
	var carBoxAll = sonPage.document.getElementsByClassName("car-list-card-middle");
	var carBoxShow = sonPage.document.getElementsByClassName(price);
	if(carBoxShow.length==0 && price != 0){
		alert("����ɸѡ�ļ�λ���޻���ͣ�");
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
				sonPage.window.onload();
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
				sonPage.window.onload();	 
		}
	}
   }

//�رձ�������
function closeSignUpBox(){
	var signUpBox = document.getElementById("signUpBox");
	$(signUpBox).fadeOut("fast"); 
}

//��˸����1
function flashBoxUp(){
	var flashElement = document.getElementById("flashBox");
	$(flashElement).fadeIn("slow");
	$(flashElement).fadeOut("slow");
}












