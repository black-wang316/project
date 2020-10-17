; $(function () {
    let a=getCookie("id");
    if(a==undefined){

    }else{
    $.get("http://jx.xuzhixiang.top/ap/api/allproductlist.php", {
        uid: a
    }, data => {
        console.log(data)
        let str = "";
        for (let i = 0; i < data.data.length; i++) {
            str += `
            <li  data-id="${data.data[i].pid}">
                    <div class="box9">
                        <dl>
                            <dt class="shangpin"><img src="${data.data[i].pimg}"></dt>
                            <dd>
                                <p class="name">${data.data[i].pname}</p>
                                <p class="price">￥${parseInt(data.data[i].pprice)}</p>
                                <del class="desc">￥${data.data[i].pdesc}</del>
                                <span class="del">删除</span>
                            </dd>
                        </dl>
                    </div>
                </li>
            `;
        }
            $(".wrap").append(str);

        $(".shangpin").click(function () {
            let id=$(this).parent().parent().parent().attr("data-id");
            
            setCookie("pid",id,7)
            location.href="xiangqing.html"
        })
        // let id = getCookie("id");
        let token = getCookie("token");
        //删除
        $(".del").click(function () {
            $.get(" http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php", {
                pid: $(this).parent().parent().parent().parent().attr("data-id"),
                uid: a,
                token: token
            }, data => {
                return token;
            })
            location.reload();


        })
        // //修改

        // $(".xiugai").click(function () {
        //     $("#name").val($(this).parent().find(".name").text());
        //     $("#price").val($(this).parent().find(".price").text().replace(/[^0-9]/ig,""));
        //     $("#deprice").val($(this).parent().find(".desc").text().replace(/[^0-9]/ig,""));
        //     $("#img").val(parseInt($(this).parent().parent().find("dt").find("img").attr("src").replace(/[^0-9]/ig, "")));
        //         $.get("http://jx.xuzhixiang.top/ap/api/goods/goods-update.php", {
        //             pid: $(this).parent().parent().parent().parent().attr("data-id"),
        //             pname: $("#name").val(),
        //             pprice: $("#price").val(),
        //             pdesc: $("#deprice").val(),
        //         }, data => {
        //             $(this).text($("#name").val());
        //             $(this).siblings(".price").text("￥"+$("#price").val());
        //             $(this).siblings(".desc").text("￥"+$("#deprice").val());
        //             console.log(data)
        //         })
        //         // location.reload();
        // })
    })
    }
    //添加
    let id = getCookie("id");
    $("#btn3").click(function(){
        $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
            pimg: "img/鞋2.jpg",
            pname: "阿迪达斯男服卫衣运动套头休闲运动服",
            pprice: "727",
            pdesc: "1299",
            uid: id
        },
            data => {
                console.log(pimg)
                console.log(data)
            })
            location.reload();
    })


    $("#btn").click(function () {
        if ($("#img").val() == "" || $("#name").val() == "" || $("#price").val() == "" || $("#deprice").val() == "") {

        } else {
            $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
                pimg: "img/图" + $("#img").val() + ".jpg",
                pname: $("#name").val(),
                pprice: $("#price").val(),
                pdesc: $("#deprice").val(),
                uid: getCookie("id")
            },
                data => {
                    console.log(pimg)
                    console.log(data)
                })
        }
        location.reload();
    })
   

    let username=getCookie("username");
    if(username==undefined){
        $(".project").text("欢迎登录名鞋库");
    }else{
        $(".project").text("欢迎"+username);
    }
}, jQuery)