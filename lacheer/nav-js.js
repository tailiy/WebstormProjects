/**
 * Created by Administrator on 2017/8/28.
 */
window.onload=function(){
    getwidth();
    checkistop();
    setInterval(checkistop,10);
}

function checkistop(){

    var scscrollTop= getScrollTop();
    console.log(scscrollTop);
    var navbox = document.getElementsByClassName("nav-box");
    if(scscrollTop>=200) {
        navbox[0].style.position = "fixed";
        navbox[0].style.top ="0";
    }else{
        navbox[0].style.position = "static";


    }
}
function getScrollTop()//��ȡ��ǰ��ҳ������λ��
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
function getwidth(){
    var winWidth=0;
    var winHeight=0;
//��ȡ���ڿ��
    if (window.innerWidth){
        winWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)){
        winWidth = document.body.clientWidth;
    }
//��ȡ���ڸ߶�
    if (window.innerHeight){
        winHeight = window.innerHeight;
    }else if((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }
//ͨ������Document�ڲ���body���м�⣬��ȡ���ڸ߶�
    if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth){
        winWidth  = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
        console.log(winWidth+winHeight);
    }
    $("body").css({"height":parseInt(winHeight),"width":parseInt(winWidth)});
    return winWidth;
}