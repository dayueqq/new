// JavaScript Document
//���getElementById��IE��ʧЧ�ĺ���
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
//ͼƬ͸���ɰ�
 function openVessel(strId)
    {
        document.getElementById(strId).style.display = "block";
    }
 function closeVessel(strId)
    {
        document.getElementById(strId).style.display = "none";
    }


//������������Ի���
function signUpBox(brandId,secondBrandId,series,province){//����ΪcarID������ID
	var signUpBox = window.parent.document.getElementById("signUpBox");
	$(signUpBox).fadeIn("normal");
	window.parent.sureBrand(brandId,secondBrandId,series);
	window.parent.sureArea(province);
}
