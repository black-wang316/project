; $(function () {
    $("#tet").change(function () {
        var reg = /^[a-zA-Z]{5,14}$/g;
        var val = $("#tet").val();
        if (reg.test(val)) {
            $(this).next().css({
                "color": "green",
            }).text("格式正确");
        } else {
            $(this).next().css({
                "color": "red",
            }).text("格式错误！")
        }
    })
    $("#psd").change(function () {
        var reg = /^\d{8,16}$/g;
        var val = $("#psd").val();
        if (reg.test(val)) {
            $(this).next().css({
                "color": "green",
            }).text("格式正确");
        } else {
            $(this).next().css({
                "color": "red",
            }).text("格式错误！")
        }
        $("#psd2").change(function () {
            var val1 = $("#psd2").val();
            if (val1 != val) {
                $("#psd2").next().css({
                    "color": "red",
                }).text("两次密码不同！")
            } else {
                $("#psd2").next().css({
                    "color": "green",
                }).text("正确")
            }
        })
    })
    $(".txt").text("" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10))
    $(".txt").next().click(function () {
        $(".txt").text("" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10) + "" + parseInt(Math.random() * 10))
    })
    $("#yz").change(function () {
        if ($("#yz").val() != $(".txt").text()) {
            $(".txt").next().next().next().text("验证码错误")
        } else {
            $(".txt").next().next().next().css({
                "color": "green",
            }).text("验证码正确")
        }
    })
    $("#btn").click(function () {
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            username: $("#tet").val(),
            password: $("#psd").val()
        }, data => {
            if(data.code==0){
                alert("用户名已存在")
                return;
            }
            if ($("#tet").val() == "") {
                alert("请输入用户名")
            }
            else if ($("#psd").val() == "") {
                alert("请输入密码")
            }
            else if ($("#yz").val() == "") {
                alert("请输入验证码")
            } else {
                window.open("denglu.html")
                console.log(data)
            }
        })
    })
}, jQuery)