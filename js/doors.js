"use strict";

$(document).ready(function(){
    var o=document.querySelectorAll(".door"),
    r=document.querySelectorAll(".door__sales"),
    c=(document.querySelector(".door__wrapper"),
    document.querySelector(".spin-result-wrapper")),
    i=(document.querySelector(".pop-up-button"),
    document.querySelector(".order_block"),
    document.getElementById("door__1")),
    u=document.getElementById("door__2"),
    l=document.getElementById("door__3"),
    s=document.getElementById("door__sales1"),
    a=document.getElementById("door__sales2"),
    d=document.getElementById("door__sales3"),
    p=$("#discount").text();
    
    function m(e){
        e.currentTarget.classList.add("open"),
        setTimeout(function(){c.style.display="block"},2500),
        r.forEach(function(e){
            i.classList.contains("open")?(s.innerHTML=p+"50%",a.innerHTML="35%",d.innerHTML="30%"):u.classList.contains("open")?(a.innerHTML=p+"50%",s.innerHTML="10%",d.innerHTML="35%"):l.classList.contains("open")&&(s.innerHTML="35%",d.innerHTML=p+"50%",a.innerHTML="20%")
        });
        
        for(var t=0;t<o.length;t++)!function(e){
            o[e].classList.contains("open")||setTimeout(function(){o[e].classList.add("open")},1500)
        }(t);
        
        for(var n=0;n<o.length;n++)o[n].removeEventListener("click",m)
        for(var n=0;n<o.length;n++)o[n].removeEventListener("touchend",m)
    }
    
    o.forEach(function(e){
        e.addEventListener("click",m)
    });


    let flag = 1;
    $('.box').click(function () {
        setTimeout(function(){
            $('.hide-block').hide();
            $(".door__wrapper").hide(),$(".order_block").show();
            setTimeout(function(){
                if ($(window).width() < 767) {
                    $('#scroll-point').hide();
                }
            },5e3)
        },3e3);

            if (flag) {
                setTimeout(function(){start_timer()},5e3)
                flag = 0;
            }
    });

    $(".close-popup, .pop-up-button").click(function(e){
        e.preventDefault(),$(".spin-result-wrapper").fadeOut()
    });

    var intr,time=600;

    function start_timer(){
        intr=setInterval(tick,1e3)
    }

    function tick(){
        if(0<time){
            time-=1;
            var e=Math.floor(time/60),
                t=10<=(t=time-60*e)?t:"0"+t;
            if(e<0&&(e=0),$("#min").html("0"+e),$("#sec").html(t),0==e&&0==t)return clearInterval(intr),!1
        }
    }

    $(" a, .pop-up-button, .close-popup, .vtgoodlink").click(function(e){
        if ($('#form-block').is(':visible')) $("html,body").animate({scrollTop:$("#form-block").offset().top - ($(window).height() - $("#form-block").outerHeight(true))},1e3)
        else $("html,body").animate({scrollTop:$("#scroll-point").offset().top},1e3)
        return e.preventDefault(),
            $(".spin-result-wrapper").fadeOut(),
            !1
    })
})
