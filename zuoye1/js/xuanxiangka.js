var headNavList=document.getElementsByClassName("head_nav_list");
for(var Ni=0;Ni<headNavList.length;Ni++){
    headNavList[Ni].onclick=function(){
        for(var Nk=0;Nk<headNavList.length;Nk++){
            headNavList[Nk].style.background="#fff";
            headNavList[Nk].style.color="#000";
        }
        this.style.background="#ef4238";
        this.style.color="#fff";
    }
}