; $(function () {
    let id = getCookie("id");
    if(id==undefined){

    }else{
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id: id
    }, data => {
        let str = "";
        for (let i = 0; i < data.data.length; i++) {
            str += `
            <ul class="b">
            <li><input type="checkbox"  class="dan"><br></li>
            <li data-id="${data.data[i].pid}"><img src="${data.data[i].pimg}" alt=""></li>
        <li>￥${parseInt(data.data[i].pprice)}</li>
        <li>${data.data[i].pnum}</li>
        <li class="price">${(data.data[i].pnum) * (parseInt(data.data[i].pprice))}</li>
        <li><input type="button" value="删除" class="btn" data-id="${data.data[i].pid}"></li>
        <li><input type="button" value="添加" class="btn2"  data-id=""></li>
        </ul>
            `;
        }
        $(".wrap").append(str);
        $("#all").on('click', function () {
            $(".dan").prop("checked", this.checked);
            getTotal();
        });

        $(".dan").on('click', function () {
            var $subs = $(".dan");
            $("#all").prop("checked", $subs.length == $subs.filter(":checked").length ? true : false);
            getTotal();
        });
        function getTotal() {
            var sum =  0;
            $(".dan").each(function () {
              if(this.checked == true){
                  var id  =  $(this).parent().siblings(".price").text();
                  sum += Number(id);
              }
          })
          $(".zongjia").text(sum);
      }



        //删除
        $(".btn").click(function () {
            let pid = $(this).attr("data-id");
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                uid: id,
                pid: pid
            }, data => {
                $(this).parent().parent().remove();
                getTotal();
            })
            // location.reload();
        })
        $(".btn2").click(function () {
            location.href = "project.html"
        })
    })
}
    let username=getCookie("username");
    if(username==undefined){
        $(".project").text("欢迎登录名鞋库");
    }else{
        $(".project").text("欢迎"+username);
    }
}, jQuery)