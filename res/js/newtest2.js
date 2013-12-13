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
function signUpBox(){
	var signUpBox = window.parent.document.getElementById("signUpBox");
	signUpBox.style.display = "block";
}