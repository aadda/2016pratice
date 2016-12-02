/**
 * Created by YeYu on 2016/11/8.
 */
var oHeader1 = document.getElementById("header-top");
var oTab1 = document.getElementById("tab1");
oHeader1.onmouseover = function(){
  oTab1.style.display = "block";
};
oHeader1.onmouseout = function(){
    oTab1.style.display = "none";
};
var oContainer = document.getElementById("container");
var oContent = document.getElementById("content");
var aImg = oContent.getElementsByTagName("img");
var oTab = document.getElementById("tab"),
    aLi = oTab.getElementsByTagName("li");
var iNow = 0;
for(var i=0; i<aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        changeImg(this.index);
        iNow = this.index;
    };
}
function changeImg(a){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className = "";
    }
    aLi[a].className = "s2";
    animate(oContent, {left: -aImg[0].offsetWidth*a});
}

var timer;
timer = setInterval(function(){
        changeImg(iNow++);
    if(iNow == aLi.length){
        iNow = 0;
    }
},2500);
/*
oContainer.onmouseover = function(){
    clearInterval(timer);
};
oContainer.onmouseout = function(){
    timer = setInterval(function(){
        changeImg(iNow++);
        if(iNow == aLi.length){
            iNow = 0;
        }
    },2000);
};*/

var oNews1 = document.getElementById("news1");
var aLi1 = oNews1.getElementsByTagName("li");
var oNews = document.getElementById("news");
var aDiv = oNews.getElementsByTagName("div");
for(var j=0; j<aLi1.length-1; j++){
    aLi1[j].index = j;
    aLi1[j].onmouseover = function(){
        for(var j=0; j<aLi1.length-1; j++){
            aLi1[j].className = "";
            aDiv[j].className = "";
        }
        aLi1[this.index].className = "n1";
        aDiv[this.index].className = "divs";
    }
}
var oVt = document.getElementById("v-type");
var aLi2 = oVt.getElementsByTagName("li");
var oVi = document.getElementById("v-img");
var aImg1 = oVi.getElementsByTagName("img");
for(var k=0; k<aLi2.length; k++){
    aLi2[k].index = k;
    aLi2[k].onmouseover = function(){
        for(var k=0; k<aLi2.length; k++){
            aLi2[k].className = "";
            aImg1[k].className = "";
        }
        aLi2[this.index].className = "v1";
        aImg1[this.index].className = "v2";
    }
}
