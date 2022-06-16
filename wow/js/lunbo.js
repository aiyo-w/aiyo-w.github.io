$(function () {
    // 动画间隔时间
    var time = 5000;

    // 鼠标放在轮播区域时显示左右切换按钮
    $(".content-lunbo").hover(function () {
        $(".lunbo-btnbox").show();

        // 停止自动播放
        clearInterval(autoplatTimer);
    }, function () {
        $(".lunbo-btnbox").hide();

        // 开启自动播放
        autoplatTimer = setInterval(function () {
            $(".nextbtn").trigger("click");
        }, time);
    });

    // 将进度条与背景图绑定
    var imgboxList = $(".lunbo-imgbox").children("section");
    imgboxList.each(function (index, ele) {
        // 根据有多少个图片创建对应的进度条
        var progressbarHTML = $('<div class="progressbar"><div></div></div>');
        $(".lunbo-progressbox").append(progressbarHTML);
        // 添加自定义属性
        $(".progressbar").eq(index).attr('data-index', index);
    });

    // 点击进度条，对应的图片显示
    var progressbarList = $(".lunbo-progressbox").children(".progressbar");
    progressbarList.each(function (index, ele) {
        // 点击事件
        $(ele).click(function () {

            // 获取被点击的元素index值
            var curIndex = $(this).data('index');
            curShowIndex = curIndex;

            imageToogle(curIndex);
        });
    });

    // 点击左右按钮切换图片
    var curShowIndex = 0;
    $(".prebtn").click(function () {
        if (curShowIndex == 0) {
            // 当播放到第一张时候，点击上一张为最后一张
            curShowIndex = imgboxList.length;
        }
        curShowIndex -= 1;
        imageToogle(curShowIndex);
    });
    $(".nextbtn").click(function () {
        if (curShowIndex == imgboxList.length - 1) {
            // 当播放到第一张时候，点击上一张为最后一张
            curShowIndex = -1;
        }
        curShowIndex += 1;
        imageToogle(curShowIndex);
    });

    // 自动播放图片
    // 默认情况下显示第一张图片
    imageToogle(curShowIndex);
    var autoplatTimer = setInterval(function () {
        // 手动调用切换下一张按钮
        $(".nextbtn").trigger("click");
    }, time);

    function imageToogle(index) {

        // 图片切换
        imgboxList.eq(index).css("opacity", 1).siblings("section").css("opacity", 0);

        // 对应度条切换
        progressbarList.eq(index).css({
            "background": "#0086ca",
            "transform": "scaleY(2)"
        }).siblings(".progressbar").css({
            "background": "rgba(255, 255, 255, .5)",
            "transform": "scaleY(1)"
        });
        progressbarList.eq(index).siblings(".progressbar").children("div").removeClass("progressbar-current");
        progressbarList.eq(index).children("div").addClass("progressbar-current");

        // 进度条加载的动画效果
        $(".progressbar-current").animate({
            "width": "100%"
        }, time, function () {
            progressbarList.eq(index).children("div").css("width", 0)
        });

        // 文字动画效果
        var contenttime = 1000;
        imgboxList.eq(index).children().eq(0).children().each(function (i, ele) {
            $(this).css({
                "opacity": 0,
                "margin-left": "40px"
            });
            $(this).animate({
                "opacity": 1,
                "marginLeft": 0
            }, contenttime);
            contenttime += 100;
        });

        // 背景图移动
        imgboxList.eq(index).animate({
            "backgroundPositionX": "-40px"
        }, time, function () {
            imgboxList.eq(index).css("background-position-x", "0");
        });
    }

})