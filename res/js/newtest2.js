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


//点击报名弹出对话框
function signUpBox(brandId,secondBrandId,series,province,city){//参数为carID，地区ID
	var signUpBox = window.parent.document.getElementById("signUpBox");
	signUpBox.style.display = "block";
	window.parent.sureBrand(brandId,secondBrandId,series);
	window.parent.sureArea(province,city);
}
