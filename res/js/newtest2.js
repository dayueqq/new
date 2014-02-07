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


//点击报名弹出对话框
function signUpBox(brandId,secondBrandId,series,province){//参数为carID，地区ID
	var signUpBox = window.parent.document.getElementById("signUpBox");
	$(signUpBox).fadeIn("normal");
	window.parent.sureBrand(brandId,secondBrandId,series);
	window.parent.sureArea(province);
}
