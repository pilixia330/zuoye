var inpU=document.getElementById("inp_user");
var inp2U=document.getElementById("inp2_user");
var denglu=document.getElementById("denglu");
var tishi=document.getElementsByClassName("tishi");

denglu.onclick=function(){
    var dlajax=new XMLHttpRequest;
    dlajax.open("post","../php/1.php",true);
    dlajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    dlajax.send("user="+inpU.value+"&pas="+inp2U.value);
    dlajax.onreadystatechange=function(){
        if(dlajax.readyState===4&&dlajax.status===200){
            var dlres=JSON.parse(dlajax.responseText);
            if(dlres.code===0){
                tishi[0].style.display="block";
                tishi[0].style.color="red";
                tishi[0].style.border="1px solid red";
                tishi[0].innerText="用户名不存在"; 
            }else if(dlres.code===1){
                tishi[0].style.display="block";
                tishi[0].style.color="red";
                tishi[0].style.border="1px solid red";
                tishi[0].innerText="密码错误";
            }else{
                window.location.href="../index.html"
            }
        }
    }
}