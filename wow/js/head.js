$(function () {
    // 导航栏游戏的点击事件
    $(".nav-game-btn").click(function () {

        $(".game-modals").toggle();
        if ($(".game-modals").css("display") == "block") {
            $(".nav-game-btn svg").css({
                "transform": "rotate(180deg)"
            });

            // 图片依次加载 jQuery版
            var imgs = $(".games-imgs").children();
            var ani = {
                "top": 0
            }
            imgsAnimate(imgs.eq(0), ani, 100)

            // 图片依次加载，jquery+css版
        } else {
            $(".nav-game-btn svg").css({
                "transform": "rotate(0deg)"
            });

            $(".games-imgs a").css("top", -40);
        }


    });

    // 图片依次加载函数
    function imgsAnimate(doc, animation, time) {
        doc.animate(animation, time || "normal", "linear", function () {
            if (doc.next().length) {
                imgsAnimate(doc.next(), animation, time);
            }
        });
    }

    // 导航栏带脑子竞技的点击事件
    $(".nav-esports-btn").click(function () {

        $(".eSports-modals").toggle();

        if ($(".eSports-modals").css("display") == "block") {

            $(".nav-esports-btn svg").css({
                "transform": "rotate(180deg)"
            });
            // modal层显示时展示动画
            var imgs = $(".eSports-box").children();
            var ani = {
                "top": 0
            }
            imgsAnimate(imgs.eq(0), ani, 100)

        } else {
            $(".nav-esports-btn svg").css({
                "transform": "rotate(0deg)"
            });

            $(".eSports-box a").css("top", -60);

        }


    });

    // 导航栏游戏的点击事件
    $(".nav-account-btn").click(function () {

        $(".account-modals").toggle();

        if ($(".account-modals").css("display") == "block") {
            $(".nav-account-btn svg").css({
                "transform": "rotate(180deg)"
            });
        } else {
            $(".nav-account-btn svg").css({
                "transform": "rotate(0deg)"
            });
        }
    });

    // 游戏下拉菜单中图片的hover
    $(".games-imgs a").hover(function () {
        $(this).css("filter", "brightness(150%)");
    }, function () {
        $(this).css("filter", "brightness(100%)");
    });

    // 电子竞技下拉菜单中图片的hover
    $(".eSports-box a").hover(function () {
        $(this).children("img").css("filter", "brightness(150%)");
    }, function () {
        $(this).children("img").css("filter", "brightness(100%)");
    });
})