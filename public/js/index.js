window.onload = function () {
  /* window.addEventListener("wheel", function (e) {
    let evt = e || window.event;

    if (evt.deltaY > 0) {
      console.log("向上滚动");
    } else {
      console.log("向下滚动");
    }
    console.log(evt.deltaY);
  }); */
};

// $(function () {
//   var worksOffset = $(".works-container").offset();
//   var contents = document.querySelectorAll(".content");
//   // 鼠标滚动事件：每次滚动一屏
//   var scrollCount = 0;
//   /*  $(document).bind("mousewheel", function (e) {
//     if (e.originalEvent.wheelDelta / 120 > 0) {
//       scrollCount -= 1;
//       if (scrollCount < 0) scrollCount = 0;
//       $("html, body").scrollTop($(contents[scrollCount]).offset().top + 180);
//     } else {
//       scrollCount += 1;
//       if (scrollCount > contents.length - 1) scrollCount = contents.length - 1;
//       $("html, body").scrollTop($(contents[scrollCount]).offset().top - 180);
//     }
//     console.log($(contents[scrollCount]).offset().top);
//   }); */
//   $(document).on("mousewheel", function (e) {
//     if (e.deltaY == -1) {
//       scrollCount -= 1;
//       if (scrollCount < 0) scrollCount = 0;
//       $("body,html").scrollTop($(contents[scrollCount].offset().top));
//     } else {
//       scrollCount += 1;
//       if (scrollCount > contents.length - 1) scrollCount = contents.length - 1;
//       $("body,html").scrollTop($(contents[scrollCount].offset().top));
//     }
//     console.log(11);
//   });

//   document.querySelector(".works-btn");
//   // works 按钮的点击事件
//   $(".works-btn").click(function () {
//     $("html, body").scrollTop(worksOffset.top);
//   });
// });
