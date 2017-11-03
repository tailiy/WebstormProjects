/**
 * Created by Administrator on 2017/8/23.
 */
window.onload=function(){
    checkistop();
    setInterval(checkistop,500);
}


function checkistop(){
    var scscrollTop= getScrollTop();
    var toobar = document.getElementById("toobar");
    if(scscrollTop==0) {
        toobar.style.backgroundColor = "transparent";
      /*  var content = document.getElementsByClassName("right")[0];
        var ul  =content.getElementsByTagName("ul")[0];
        var li = ul.getElementsByTagName("li");
        var a = [];
        for(var i= 0;i<li.length;i++){
           a[i] = li[i].getElementsByTagName("a");
        }*/
        var a = document.getElementsByTagName("a");

        a[0].style.color = "#fff";
        a[1].style.color = "#fff";
        a[2].style.color = "#fff";
        a[3].style.color = "#fff";
        a[4].style.color = "#fff";
        a[5].style.color = "#fff";
        a[6].style.color = "#fff";
        a[7].style.color = "#fff";



    }else{
        toobar.style.backgroundColor = "#ffffff";
        /*var content = document.getElementsByClassName("right")[0];
        var ul  =content.getElementsByTagName("ul")[0];
        var li = ul.getElementsByTagName("li");
        for(var i in li){
            console.log(li);
            li[i].getElementsByTagName("a").class = "333";
        }*/
        var a = document.getElementsByTagName("a");
        a[0].style.color = "#333";
        a[1].style.color = "#333";
        a[2].style.color = "#333";
        a[3].style.color = "#333";
        a[4].style.color = "#333";
        a[5].style.color = "#333";
        a[6].style.color = "#333";
        a[7].style.color = "#333";
    }
}
function getScrollTop()//获取当前网页顶部的位置
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}