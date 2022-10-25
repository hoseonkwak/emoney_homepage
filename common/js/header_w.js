$(window).on("load", function () {
  var $win = $(window);
  // 1차메뉴 hover
  var nowMenu = $("nav .header_menu > li.depth1");
  var depth2 = $("header .header_wrap nav .header_menu li.menu");
  var menu = $("header .header_wrap nav .header_menu li.menu > .menu_btn");

  // 헤더 hover
  nowMenu.hover(
    function () {
      $(this).addClass("open");
      $("header").css("background-color", "rgba(255,255,255,0.3)");
      $("header").css("color", "rgba(255,255,255,0.7)");
      //header li 호버시 메뉴 클래스 삭제
      depth2.removeClass("open");
      menu.removeClass("on");
    },
    function () {
      $(this).removeClass("open");
      $("header").css("background-color", "");
      $("header").css("color", "");
    }
  );

  // 메뉴클릭
  menu.click(function () {
    var menustat = $(this).attr("class");
    var depth2stat = $("header .header_wrap nav .header_menu li.menu").attr(
      "class"
    );
    var headchk = $("header").attr("class");

    console.log(headchk);
    //버튼에 on 추가
    if (menustat.indexOf("on") == "-1") {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
    //서브메뉴 열기
    if (headchk == null || headchk.indexOf("scrolled") == "-1") {
      if (depth2stat.indexOf("open") == "-1") {
        depth2.addClass("open");
        $("header").css("background-color", "rgba(255,255,255,0.3)");
        $("header").css("color", "rgba(255,255,255,0.7)");
      } else {
        depth2.removeClass("open");
        $("header").css("background-color", "");
        $("header").css("color", "");
      }
    } else {
      if (depth2stat.indexOf("open") == "-1") {
        depth2.addClass("open");
        $("header").css("background-color", "#fff");
        $("header").css("color", "#000");
      } else {
        depth2.removeClass("open");
        $("header").css("background-color", "#fff");
        $("header").css("color", "#000");
      }
    }
  });

  //스크롤시
  $win.scroll(function () {
    var scroll = $win.scrollTop();
    // 서브메뉴
    var nowSub = $("nav .header_menu > li.depth1");
    var depth2 = $("header .header_wrap nav .header_menu li.menu");
    var menu = $("header .header_wrap nav .header_menu li.menu > .menu_btn");

    if (scroll == 0) {
      $("header .header_wrap nav .header_menu li.menu").removeClass("open");
      $("header .header_wrap nav .header_menu li").removeClass("open");
      $("header .header_wrap nav .header_menu li.menu > .menu_btn").removeClass(
        "on"
      );
    }

    if (scroll > 40) {
      //기본
      $("header").css("background-color", "#fff");
      $("header").css("color", "#000");
      $("header").addClass("scrolled");

      nowSub.hover(
        function () {
          $(this).addClass("open");
          $("header").css("background-color", "#fff");
          $("header").css("color", "#000");
          //header li 호버시 메뉴 클래스 삭제
          depth2.removeClass("open");
          menu.removeClass("on");
        },
        function () {
          $(this).removeClass("open");
          $("header").css("background-color", "#fff");
          $("header").css("color", "");
        }
      );
    } else {
      $("header").css("background-color", "");
      $("header").css("color", "");
      $("header").removeClass("scrolled");

      nowSub.hover(
        function () {
          $(this).addClass("open");
          $("header").css("background-color", "rgba(255,255,255,0.3)");
          $("header").css("color", "rgba(255,255,255,0.7)");
          //header li 호버시 메뉴 클래스 삭제
          depth2.removeClass("open");
          menu.removeClass("on");
        },
        function () {
          $(this).removeClass("open");
          $("header").css("background-color", "");
          $("header").css("color", "");
        }
      );
    }

    //top 버튼
    if (scroll > 300) {
      // top btn
      $(".top_btn").css("display", "block");
    } else {
      $(".top_btn").css("display", "");
    }
  });

  /* 맨위로 */
  $(".top_btn").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      500,
      "linear"
    );
    return false;
  });

  /* 모바일 메뉴 */
  var m_menu_btn = $("header .header_wrap nav .m_menu li .menu_btn");
  var m_menu_closeBtn = $(
    "aside.mobile_menu .menu_cont_wrap .header .close_btn_wrap"
  );

  m_menu_btn.click(function () {
    $("aside.mobile_menu").css("right", "0");
    $("aside.mobile_menu .dim").css("display", "block");
    $("aside.mobile_menu .menu_cont_wrap").css("right", "0");
  });

  m_menu_closeBtn.click(function () {
    $("aside.mobile_menu").css("right", "");
    $("aside.mobile_menu .dim").css("display", "");
    $("aside.mobile_menu .menu_cont_wrap").css("right", "");
  });
});
