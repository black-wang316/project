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
    $(".right_top").click(function () {
        if ($(".right_fix").width() == 37) {
            $(".right_fix").animate({
                width: "267px"
            }, 500);
            $(".hot").css({
                "z-index": 1
            });
            $(".pinpai").css({
                "z-index": 0
            });
            $(".hid").animate({
                right: "0"
            }, 500)
        } else {
            $(".right_fix").animate({
                width: "37px"
            }, 500);
            $(".hid").animate({
                right: "-230px"
            }, 500)
        }
    })

    $(".right_center").click(function () {
        if ($(".right_fix").width() == 37) {
            $(".right_fix").animate({
                width: "267px"
            }, 500);
            $(".pinpai").css({
                "z-index": 1
            });
            $(".hot").css({
                "z-index": 0
            });
            $(".hid").animate({
                right: "0"
            }, 500)
        } else {
            $(".right_fix").animate({
                width: "37px"
            }, 500);
            $(".hid").animate({
                right: "-230px"
            }, 500)
        }
    })

    $(".right_img").mouseenter(function () {
        $(this).next().show().animate({
            left: "-100px"
        }, 500);
    })
    $(".right_img").mouseleave(function () {
        $(this).next().hide().animate({
            left: "-120px"
        })
    })

    $(".right_img1").mouseenter(function () {
        $(this).next().show().animate({
            left: "-150px"
        }, 500);
    })
    $(".right_img1").mouseleave(function () {
        $(this).next().hide().animate({
            left: "-180px"
        });
    })

    let id = getCookie("pid")
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id:id
    }, data => {
        console.log(data)
        let str = "";
        str += `
    <div class="left">
            <img src="${data.data.pimg}" alt="">
        </div>
        <div class="you">
            <div class="you_top">
                <h2>${data.data.pname}</h2><a href="project.html" target="_blank"><span>阿迪达斯</span></a>
            </div>
            <div class="you_center1">
                <p>吊 牌 价：<del>￥${data.data.pdesc}</del></p>
                <p>销 售 价：<span>￥${parseInt(data.data.pprice)}</span></p>
                <p>好评度：</p>
                <p>运费：名鞋库会员满99包邮（不包括货到付款）</p>
            </div>
            <div class="you_center2">
                <span>促销信息</span>
                <span>99包邮</span>
                <span>限购3件</span>
            </div>
            <div class="you_center3">
                <p>　　尺码：<span>s</span><span>l</span></p>
                <p>　　颜色：<span><img src="" alt=""></span><span><img src="" alt=""></span><span><img src="" alt=""></span></p>
                <p>购买数量：<span id="jian">-</span><input type="text" value="1" id="val"><span id="jia">+</span></p>
            </div>
            <div class="shop">
                <p>您将购买<i class="num">1</i>件 <span></span> 白色</p>
                <input type="button" value="加入购物车" id="btn" data-id="${data.data.pid}">
                <input type="button" value="立即购买">
                <p></p>
                <p class="add"></p>
            </div>
            <div class="baozheng">
                <i>名鞋库保障：</i>
                &nbsp;
                <img src="img/zheng.png">&nbsp;<span>正品认证</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="img/tui.png">&nbsp;<span>自由退货</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="img/mian.png">&nbsp;<span>全场满99免邮</span>&nbsp;&nbsp;&nbsp;&nbsp;

            </div>
        </div>
    `;
        $(".content").append(str);
        let val = $("#val").val();
        $("#jian").click(function () {
            val--;
            if (val <= 0) {
                val = 1
            }
            $("#val").val(val);
            $(".num").text($("#val").val());
        })
        $("#jia").click(function () {
            val++;
            $("#val").val(val);
            $(".num").text($("#val").val());
        })
        
        $("#btn").click(function () {
            let uid=getCookie("id")
            let pid = $(this).attr("data-id");
            let num = $("#val").val();
            console.log(pid, num,uid)
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php?uid="+uid+"&pid="+pid+"&pnum="+num
                // uid: id,
                // pid: pid,
                // pnum: num
            , data => {
                console.log(data)
            })
            location.href = "shopping.html"
        })
    })
    let username=getCookie("username");
    if(username==undefined){
        $(".project").text("欢迎登录名鞋库");
    }else{
        $(".project").text("欢迎"+username);
    }
}, jQuery)