; $(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
            $(".box3").fadeIn()
        } else {
            $(".box3").fadeOut()
        }
        $(".box3").click(function () {
            $('html,body').animate({ scrollTop: 0 }, 500);
            $(".right_top").addClass("red")
        })
    })
    $(".right").children().click(function () {
        $(this).addClass("red").siblings().removeClass("red")
    })
    $(".right_top").click(function(){
        if($(".right_fix").width()==37){
            $(".right_fix").animate({
                width:"267px"
            },500);
            $(".hot").css({
                "z-index":1
            });
            $(".pinpai").css({
                "z-index":0
            });
            $(".hid").animate({
                right:"0"
            },500)
        }else{     
            $(".right_fix").animate({
                width:"37px"
            },500);
            $(".hid").animate({
                right:"-230px"
            },500)
        }
    })
       
    $(".right_center").click(function(){
        if($(".right_fix").width()==37){
            $(".right_fix").animate({
                width:"267px"
            },500);
            $(".pinpai").css({
                "z-index":1
            });
            $(".hot").css({
                "z-index":0
            });
            $(".hid").animate({
                right:"0"
            },500)
        }else{
            $(".right_fix").animate({
                width:"37px"
            },500);
            $(".hid").animate({
                right:"-230px"
            },500)
        }
    })
   
    $(".right_img").mouseenter(function(){
        $(this).next().show().animate({
            left:"-100px"
        },500);
    })
    $(".right_img").mouseleave(function(){
                $(this).next().hide().animate({
                    left:"-120px"
                },1)
            })
    
    $(".right_img1").mouseenter(function(){
        $(this).next().show().animate({
            left:"-150px"
        },500);
    })
    $(".right_img1").mouseleave(function(){
        $(this).next().hide().animate({
            left:"-180px"
        });
    })
    $(".zhuxiao").click(function(){
        removeCookie("id");
        removeCookie("username");
        removeCookie("pid");
        removeCookie("token");
        location.reload();
    })
    let username=getCookie("username");
    if(username==undefined){
        $(".project").text("欢迎登录名鞋库");
    }else{
        $(".project").text("欢迎"+username);
    }
}, jQuery)