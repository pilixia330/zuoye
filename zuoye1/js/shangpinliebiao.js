



var hots=document.getElementById("hot_showing_list")
var coms=document.getElementById("coming_soon_list")
var cajax=new XMLHttpRequest;
cajax.open("get","php/2.php",true);
cajax.send(null);
cajax.onreadystatechange=function(){
    if(cajax.readyState===4&&cajax.status===200){
        var cdata=JSON.parse(cajax.responseText);
        var cstr="";
        var mstr="";
        for(var casei=0;casei<cdata.length;casei++){
            cstr+=`
                <Li>
                    <a href="html/xiangqing.html" class="showing_list_a">
                        <img class="showing_list_img" src="${cdata[casei].imgurl}">
                        <em class="IMAX">
                            2DIMAX
                        </em>
                        <div class="showing_list_txt" href="#">
                            <p class="name">${cdata[casei].cont}</p>
                            <p class="pingfen">${cdata[casei].pingfen}</p>
                        </div>
                    </a>
                    <a href="html/xiangqing.html" class="buy_ticket">
                        购票
                    </a>
                </Li>
            `
            mstr+=`
                <Li>
                    <a href="#" class="coming_soon_a">
                        <img class="coming_soon_img" src="${cdata[casei].imgurl}">
                        <div class="coming_soon_txt" href="#">
                            <p class="name">${cdata[casei].cont}</p>
                            <p class="pingfen">${cdata[casei].pingfen}</p>
                        </div>
                    </a>
                    <p class="look">431046人想看</p>
                    <a href="#" class="advance_notice">
                        预售
                    </a>
                    <p class="release_date">2月5日上映</p>
                </Li>
            `
        }
        hots.innerHTML=cstr;
        coms.innerHTML=mstr;
    }
}