var cajax=new XMLHttpRequest;
cajax.open("get","case.php",true);
cajax.send(null);
cajax.onreadystatechange=function(){
    if(cajax.readyState===4&&cajax.status===200){
        var cdata=JSON.parse(cajax.responseText);
		
        var cstr="";
        for(var casei=0;casei<cdata.length;casei++){
            cstr+=`
            <div class="case_section">
                <a href="fenye.html">
                    <img class="case_img" src="${cdata[casei].imgurl}">
                </a>
                    <div class="case_txt">
                        <p class="case_nameTxt"><a href="fenye.html">${cdata[casei].cont}</a><span class="case_nameTxt_2D">2D</span></p>
                        <p class="case_pingfen">观众评分<em>${cdata[casei].pingfen}</em></p>
                        <p class="case_yanyuan"><a href="fenye.html">${cdata[casei].yanyuan}</a></p>
                        <p class="case_time"><a href="fenye.html">${cdata[casei].country}|${cdata[casei].time}</a></p>
                    </div>
                    <div class="goupiao"><a href="fenye.html">购票</a></div>
            </div>
            `
        }
        caseLeft.innerHTML=cstr
        caseRight.innerHTML=cstr
    }
}