$(window).on("load", function () {
  var $win = $(window);

  var nowMenu = $("nav .header_menu > li.depth1");
  var menu = $(".header_menu li.menu > .menu_btn");
  var depth2stat = $("header .header_wrap nav .header_menu li.menu");

  // 헤더 hover
  nowMenu.hover(
    function () {
      $(this).addClass("open");
      $("header").css("background-color", "white");
      //header li 호버시 메뉴 클래스 삭제
      depth2stat.removeClass("open");
      menu.removeClass("on");
    },
    function () {
      $(this).removeClass("open");
      $("header").css("background-color", "");
    }
  );

  // 메뉴클릭
  menu.click(function () {
    //버튼에 on 추가
    if ($(this).is(".on") == false) {
      $(this).addClass("on");
      depth2stat.addClass("open");
      $("header").css("background-color", "white");
    } else {
      $(this).removeClass("on");
      depth2stat.removeClass("open");
      $("header").css("background-color", "");
    }
  });

  $win.scroll(function () {
    var scroll = $win.scrollTop();
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
