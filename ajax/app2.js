/**
 * Created by Administrator on 2017/8/22.
 */
window.onload = function(){
    imgLocation("contains","box")
}
function imgLocation(parent,content){
    var cparent = document.getElementById(parent);

    var ccontent = getchild(cparent,content);
    var imgwidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
    cparent.style.cssText = "width:"+imgwidth*cols+"px;margin: 0px auto;";
    var boxheightarr = [];
    for(var i=0;i<ccontent.length;i++){
        if(i<cols){
            boxheightarr[i] = ccontent[i].offsetHeight;
        }else{
            var minheight = Math.min.apply(null,boxheightarr);
            var minindex = getminheightlocation(boxheightarr,minheight);
            ccontent[i].style.position="absolute";
            ccontent[i].style.top = minheight+"px";
            ccontent[i].style.left =ccontent[minindex].offsetLeft+"px";
            boxheightarr[minindex] = boxheightarr[minindex]+ccontent[i].offsetHeight;
        }
    }
}
function getminheightlocation(boxheightarr,minheight){
    for(var i in boxheightarr){
        if(boxheightarr[i]==minheight){
            return i;
        }
    }
}

function getchild(parent,content){
    var contentarr = [];

    var allcontent = parent.getElementsByTagName("*");
    for(var i = 0;i<allcontent.length;i++){
        if(allcontent[i].className ==content){
            contentarr.push(allcontent[i]);
        }
    }
    return contentarr;
}