
//---------------------------------------------电话

var tel=document.getElementById("tel_inp");
var tishi=document.getElementsByClassName("tel_tishi");
var duihao=document.getElementsByClassName("duihao");

tel.onfocus=function(){
    tel.style.borderColor="blue";
}

function shouji(){
    var tela=/^1\d{10}$/;
    var telb=tela.test(tel.value);
    return telb
}

tel.onblur=function(){
    if(shouji()){
        tel.style.borderColor="blue";
        duihao[0].style.display="block"
        tishi[0].style.display="none"
    }else{
        duihao[0].style.display="none"
        tel.style.borderColor="red";
        tishi[0].style.display="block"
    }
}
//---------------------------------------------电话


//---------------------------------------------验证码
var yanzhen=document.getElementById("yanzhen");
var yanNum=document.getElementById("yan_num");
var yzarr=["a","b","c","d","e","f","g","1","2","3","4","5","6","A","B","C"]
yanzhen.onclick=function(){
    var yzstr=""
    for(var yzi=0;yzi<6;yzi++){
        var yzk=Math.floor(yzarr.length*Math.random());
        yzstr+=yzarr[yzk]
    }
    yanNum.innerText=yzstr;
}


var dxinp=document.getElementById("duanxin_inp");

dxinp.onfocus=function(){
    dxinp.style.borderColor="blue";
}

function fnyanzhen(){
    return yanNum.innerText===dxinp.value||yanNum.innerText.toUpperCase()===dxinp.value.toUpperCase();     
}

dxinp.onblur=function(){
    if(fnyanzhen()){
        dxinp.style.borderColor="blue";
        duihao[1].style.display="block";
        tishi[1].style.display="none";
    }else{
        duihao[1].style.display="none";
        dxinp.style.borderColor="red";
        tishi[1].style.display="block";
    }
}

//---------------------------------------------验证码


//---------------------------------------------密码
var pass=document.getElementById("pass_inp");
var qingdu=document.getElementsByClassName("qingdu");

pass.onfocus=function(){
    pass.style.borderColor="blue";
}

function mima(){
    var passa=/^\w{6,18}$/;
    var passb=passa.test(pass.value);
    return passb
}


pass.onblur=function(){
    if(mima()){
        dxinp.style.borderColor="blue";
        duihao[2].style.display="block"
        tishi[2].style.display="none"
             var passc=/^[a-z0-9]{6,18}$/;
             var passd=/\d/;
             var passd2=/[a-z]/
             var passd3=/[A-Z]/
             var passe=/^[0-9]{6,18}$/;
             var passzhong=passd.test(this.value)&&passd2.test(this.value);
             var passgao=passd.test(this.value)&&passd2.test(this.value)&&passd3.test(this.value);
             var passxiao=passe.test(this.value)
             if(passzhong){
                qingdu[1].style.background="orange";
                qingdu[0].style.background="#eee";
                qingdu[2].style.background="#eee";
             }
             if(passgao){
                qingdu[2].style.background="green";
                qingdu[1].style.background="#eee";
                qingdu[0].style.background="#eee";
             }
             if(passxiao){
                qingdu[0].style.background="blue";
                qingdu[2].style.background="#eee";
                qingdu[1].style.background="#eee";
             }
    }else{
        duihao[2].style.display="none";
        dxinp.style.borderColor="red";
        tishi[2].style.display="block";
        qingdu[0].style.background="#eee";
        qingdu[2].style.background="#eee";
        qingdu[1].style.background="#eee";
    }
}


//---------------------------------------------密码


//---------------------------------------------确认密码

var qrpass=document.getElementById("qrpass_inp");

qrpass.onfocus=function(){
    qrpass.style.borderColor="blue";
}

function qrmima(){
    var add=pass.value===qrpass.value
    return add
}


qrpass.onblur=function(){
    if(qrmima()){
        qrpass.style.borderColor="blue";
        duihao[3].style.display="block";
        tishi[3].style.display="none";
    }else{
        duihao[3].style.display="none";
        qrpass.style.borderColor="red";
        tishi[3].style.display="block";
    }
}
//---------------------------------------------确认密码



//---------------------------------------------跳转

var queren=document.getElementById("queren");
queren.onclick=function(){
    if(shouji()&&fnyanzhen()&&mima()&&qrmima()){
        queren.href="../html/login.html"
    }else{
        queren.style.background="#eee";
    }
}

//---------------------------------------------跳转