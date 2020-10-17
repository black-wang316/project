; $(function () {
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
        $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
                username:$("#tet").val(),
                password:$("#psd").val()
            },data=>{
                console.log(data);
                console.log(data.code);
                if ($("#tet").val() == "") {
                    alert("请输入用户名")
                }
                else if ($("#psd").val() == "") {
                    alert("请输入密码")
                } else if(data.code==0){
                    alert("用户名或密码错误")
                }else{
                    // if(data.data.id==43362){
                    // location.href="project.html"
                    // }else{
                        location.href="index.html"
                    // }
                }
                let id=data.data.id;
                let token=data.data.token;
                let username=data.data.username;
                setCookie("id",id,3);
                setCookie("token",token,3);
                setCookie("username",username,3);
            })
            
        })
}, jQuery)