window.addEventListener('load', function () {
    var mainContent = document.querySelector('.main-content');
    var footer = document.querySelector('.footer');

    // 导航栏resource点击事件
    var showResourceContent = false; // 控制点击按钮 true 为显示内容，false为隐藏内容
    var btnResource = document.querySelector('.navbar-ul-left li button');

    btnResource.addEventListener('click', function () {
        // 切换状态
        showResourceContent = !showResourceContent;

        var svgDown = btnResource.querySelector('svg');
        var recourceContet = document.querySelector('.navbar-resoures-content');
        var navbar = document.querySelector('.navbar');

        if (showResourceContent) {
            svgDown.style.transform = 'rotate(180deg)'; // 将箭头旋转向上
            recourceContet.style.display = 'block'; // 将内容区域显示
            navbar.style.backgroundColor = 'white'; //更改背景色
            mainContent.style.filter = 'blur(5px)';
            footer.style.filter = 'blur(5px)';

        } else {
            svgDown.style.transform = 'rotate(360deg)'; // 将箭头旋转向下
            recourceContet.style.display = 'none'; // 将内容区域隐藏
            navbar.style.backgroundColor = 'transparent'; //更改背景色
            mainContent.style.filter = 'none';
            footer.style.filter = 'none';
        }
    });

    // 内容区域文字滚动效果



    // 解决视频自动切换区域的高度塌陷问题
    var imgAnimation = document.querySelector('.img-animation');
    var video = document.querySelector('.img-animation img');

    var animationVideoHeight = video.offsetHeight;
    imgAnimation.style.height = animationVideoHeight + 'px';

    // 视频滚动区ul变换效果
    var lineBoxs = document.querySelectorAll('.main-content-video ul div');
    var contentVideoli = document.querySelectorAll('.main-content-video ul li');
    var spans = document.querySelectorAll('.main-content-video ul span');
    var currentSpanIndex = 0;
    spans[currentSpanIndex].classList.add('currentSpan');
    lineBoxs[currentSpanIndex].classList.add('currentLine');

    var num = 0;
    var spanindex = currentSpanIndex;
    var timerVideoUl = setInterval(() => {

        if (num < 100) {
            num++;
            lineBoxs[spanindex].classList.add('currentLine');
            lineBoxs[spanindex].style.width = num + '%';
        } else {
            // console.log(num);
            num = 0;
            if (spanindex >= spans.length - 1) {
                spanindex = 0;
            } else {
                spanindex++;
            }
            currentSpanIndex++;
            if (currentSpanIndex >= spans.length) {
                currentSpanIndex = 0;
            }

            for (var j = 0; j < spans.length; j++) {
                spans[j].classList.remove('currentSpan');
                lineBoxs[j].classList.remove('currentLine');
            }
            //字体变粗
            spans[currentSpanIndex].classList.add('currentSpan');
        }


        /* var j = 0;
        var timerLine = setInterval(() => {
            if (j < 100) {
                j++;
                lineBoxs[currentSpanIndex].style.width = j + '%';
            } else {
                console.log(j);
                j = 0;
                this.clearInterval(timerLine);
            }
        }, 30); */

        /* clearInterval(timerLine);
        j = 0;
        var timerLine = setInterval(lineChange, time); */

        /* var j = 1;
        var timerLine = setInterval(() => {
            if (j <= 100) {
                j++;
                lineBoxs[currentSpanIndex].style.width = j + '%';
            } else {
                j = 1;
                this.clearInterval(timerLine);
            }
        }, 30); */
        /*  for (var j = 1; j <= 100;) {
             j++;
             lineBoxs[currentSpanIndex].style.width = j + '%';
         } */
    }, 30);

    // 视频滚动效果
    /* 方法一 */
    /*  var timerVideo = setInterval(function () {
         //console.log(imgAnimation);
         var firstVideo = imgAnimation.firstElementChild;
         var cloneFirstVideo = firstVideo.cloneNode(true);

         imgAnimation.appendChild(cloneFirstVideo);
         imgAnimation.removeChild(firstVideo);

     }, 3000); */

    /* 方法二 */
    var imgVideoBox = document.querySelector('.img-animation');
    var videos = imgVideoBox.children;
    var startLeft = 0;
    var startIndex = 998;
    var startTransform = 1;
    var startOpacity = 1;
    for (var i = 0; i < videos.length; i++) {
        videos[i].style.left = startLeft + 120 * i + 'px';
        videos[i].style.zIndex = startIndex - 1 * i;
        var scale = startTransform - 0.05 * i;
        videos[i].style.transform = 'scale(' + scale + ')';
        videos[i].style.opacity = startOpacity - 0.2 * i;

    }

    // 获取trnasform中scale数值的正则
    var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
    var timerVideo1 = setInterval(function () {
        var uptTrans = 0;
        for (var i = 0; i < videos.length; i++) {
            var leftStr = getComputedStyle(videos[i], false)['left'];
            var leftInt = leftStr.substring(0, leftStr.length - 2);

            // 左移120px
            videos[i].style.left = leftInt - 120 + 'px';

            // 更改index
            // 更改缩放倍数
            var curTrans = getComputedStyle(videos[i], false)['transform'].match(matrixRegex);
            if (leftInt <= startLeft) {
                videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) - 1;
                // curTrans[1]为scaleX curTrans[2]为scaleY
                uptTrans = parseFloat(curTrans[1]) - 0.05;
                videos[i].style.transform = 'scale(' + uptTrans + ')';
                videos[i].style.opacity = parseFloat(getComputedStyle(videos[i], false)['opacity']) - 0.2;
            } else {
                videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) + 1;
                uptTrans = parseFloat(curTrans[1]) + 0.05;
                videos[i].style.transform = 'scale(' + uptTrans + ')';
                videos[i].style.opacity = parseFloat(getComputedStyle(videos[i], false)['opacity']) + 0.2;
            }
            // console.log(getComputedStyle(videos[i], false)['opacity']);
            // 当第一张图片移动三次后，所有图片回到原来的位置
            if (leftInt == startLeft - (videos.length - 1) * 120 && i == 0) {

                for (var j = 0; j < videos.length; j++) {
                    videos[j].style.left = startLeft + 120 * j + 'px';
                    videos[j].style.zIndex = startIndex - 1 * j;
                    var scale = startTransform - 0.05 * j;
                    videos[j].style.transform = 'scale(' + scale + ')';
                    videos[j].style.opacity = startOpacity - 0.2 * j;
                }
                break;
            }
            // console.log('第' + i + '次' + getComputedStyle(videos[i], false)['left'] + '+' + getComputedStyle(videos[i], false)['z-index']);
            // getComputedStyle(videos[0], false)["left"] 获取非行内样式
            /*  if (leftInt > startLeft - (videos.length - 1) * 120) {
                 videos[i].style.left = leftInt - 120 + 'px';
                 if (leftInt <= startLeft) {
                     videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) - 1;
                 } else {
                     videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) + 1;

                 }

             } else {
                 videos[i].style.left = startLeft + (videos.length - 1) * 120 + 'px';
             }

             leftStr = getComputedStyle(videos[i], false)['left'];
             leftInt = parseInt(leftStr.substring(0, leftStr.length - 2));

             console.log(leftInt + ':' + getComputedStyle(videos[i], false)['left'] + '+' + getComputedStyle(videos[i], false)['z-index']); */
            /*  if (leftInt == startLeft) {
                videos[i].style.zIndex = startIndex;
            } else if (leftInt < startLeft) {
                videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) - 1;

            } else if (leftInt == startLeft + (videos.length - 1) * 120) {
                videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']);
            } else {
                videos[i].style.zIndex = parseInt(getComputedStyle(videos[i], false)['z-index']) + 1;
            }

 */

            /* if (getComputedStyle(videos[i], false)['z-index'] < 998) {
                videos[i].style.zIndex = getComputedStyle(videos[i - 1], false)['z-index'];
                videos[i].style.transform = getComputedStyle(videos[i - 1], false)['transform'];
            } else {
                videos[i].style.zIndex = getComputedStyle(videos[i + 1], false)['z-index']
                videos[i].style.transform = getComputedStyle(videos[i + 1], false)['transform']
            }
            // videos[i].style.left = leftInt + 120 * (videos.length - 1) * 2 + 'px';
            // videos[i].style.zIndex = getComputedStyle(videos[i], false)['z-index'] == 998 ? getComputedStyle(videos[i], false)['z-index'] - 1 : getComputedStyle(videos[i], false)['z-index'] + 1;
            console.log(leftStr); */
        }
    }, 3000);

    // 鼠标滚动改变背景
    var mainBgimg = document.querySelector('.main-bgimage');
    var img = mainBgimg.querySelector('img');
    var imgUrl = img.getAttribute('src');
    var lastScrollTop = document.documentElement.scrollTop;

    var iconBox = document.querySelector('.imagebox');
    var parent = iconBox.offsetParent;
    var height1 = iconBox.offsetTop;
    var height2 = parent.offsetTop;
    var iconBoxToTop = height1 + height2;

    var iconBoxLeft = 0;

    window.addEventListener('scroll', function () {
        var currentScrollTop = document.documentElement.scrollTop;
        // console.log(document.documentElement.scrollTop); 

        // 当页面卷起高度超过浏览器内高时更改背景色
        if (currentScrollTop >= window.innerHeight) {
            img.src = '';
            mainBgimg.style.backgroundColor = 'white';
            // /*  mainContent.style.backgroundColor = 'white';
            //  footer.style.backgroundColor = 'white'; */
        } else {
            img.src = imgUrl;
            mainBgimg.style.backgroundColor = '#ffb387';
            // /*  mainContent.style.backgroundColor = 'transparent';
            //  footer.style.backgroundColor = 'transparent'; */
        }


        if (currentScrollTop >= iconBoxToTop - window.innerHeight && currentScrollTop <= iconBoxToTop + iconBox.offsetHeight) {

            // 判断滚轮是上滚动还是下滚动
            iconBoxLeft -= (currentScrollTop - lastScrollTop) / 2;
            iconBox.style.left = iconBoxLeft + 'px';

        }
        lastScrollTop = currentScrollTop;
    })


    // var iconBox = document.querySelector('.imagebox');
    // var parent = iconBox.offsetParent;
    // var height1 = iconBox.offsetTop;
    // var height2 = parent.offsetTop;
    // var iconBoxToTop = height1 + height2;

    // var iconBocLeft = 0;

    /* var imgboxMove = function (e) {
        e = e || window.event;

        // iconBox.style.left = 0;
        // if (document.documentElement.scrollTop >= iconBoxToTop - window.innerHeight && document.documentElement.scrollTop <= iconBoxToTop + iconBox.offsetHeight) {
        //     // 判断滚轮是上滚动还是下滚动
        //     if (e.wheelDelta) {
        //         if (e.wheelDelta > 0) {
        //             // 向上
        //             iconBocLeft += 10;
        //             iconBox.style.left = iconBocLeft + 'px';
        //         } else if (e.wheelDelta < 0) {
        //             // 向下
        //             iconBocLeft -= 10;
        //             iconBox.style.left = iconBocLeft + 'px';

        //         }

        //     } else if (e.detail) {
        //         if (e.detail > 0) {
        //             iconBocLeft += 10;
        //             iconBox.style.left = iconBocLeft + 'px';
        //         } else if (e.detail < 0) {
        //             iconBocLeft -= 10;
        //             iconBox.style.left = iconBocLeft + 'px';
        //         }
        //     }
        // }
    }


    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', imgboxMove, false);
    }
    window.onmousewheel = document.onmousewheel = imgboxMove; //IE/Opera/Chrome
 */
})