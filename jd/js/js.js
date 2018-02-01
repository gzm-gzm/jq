$(function () {
    /*切换城市*/
    $(".map_wrap").hover(function () {
        $(".map_show").show();
        $(".map").css("background", "#fff")
    }, function () {
        $(".map_show").hide();
        $(".map").css("background", "#e3e4e5")
    });
    $(".map_show span").click(function () {
        $(".map span").html($(this).text());//将.map span等于当前点击的值
        $(".map_show").hide()
    })

    /*我的订单*/
    $(".top_right_4").hover(function () {
        $(".jd_1show").show()
    }, function () {
        $(".jd_1show").hide()
    })

    $(".top_right_4").hover(function () {
        $(".jd_1show").show()
    }, function () {
        $(".jd_2show").hide()
    })


    /*鼠标经过的菜单的时候显示 并且移动到隐藏的地方也显示*/
    $(".menu li").hover(function () {//鼠标经过左边菜单的时候
        /*  $(".menu_show").css("display","block");*/
        $(".menu_show_right").css("display", "block");//右边的显示
        /*申明一个变量 index=当前的值*/
        var index=$(this).index();
        $(".menu_show_right .a1").eq(index).css("display", "block").siblings().css("display", "none")
    });
    /*鼠标移除的时候 当前隐藏*/
    $('.menu_show_right').mouseleave(function () {
        $(this).hide();
    })

})