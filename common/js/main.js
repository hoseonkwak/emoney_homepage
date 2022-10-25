$(window).on("load", function () {
  var $win = $(window); //브라우저

  var stMainh = $win.outerHeight();
  var bnht = $(".adbn .adbn_inner").height();
  var stMainht = stMainh - bnht;

  $(".main").css("height", stMainht);

  //resize
  $win.resize(function () {
    $(".adbn_inner .slideList").slick("init"); //새로고침
    var stMainh = $win.outerHeight();
    var bnht = $(".adbn .adbn_inner").height();
    var stMainht = stMainh - bnht;

    $(".main").css("height", stMainht);
  });

  //메인 원 애니메이션
  movcircle1();
  movcircle2();
  movcircle3();

  function movcircle1() {
    // text 변경
    var text1 = Snap.select("#circle1");
    var text2 = Snap.select("#circle2");

    var text1Points = text1.node.getAttribute("d");
    var text2Points = text2.node.getAttribute("d");

    toSecond();

    //원
    function toFirst() {
      text1.animate({ d: text1Points }, 3000, mina.linear, toSecond);
    }
    function toSecond() {
      text1.animate({ d: text2Points }, 3000, mina.linear, toFirst);
    }
  }

  function movcircle2() {
    // // 실선
    var text1 = Snap.select("#circle3");
    var text2 = Snap.select("#circle4");

    var text1Points = text1.node.getAttribute("d");
    var text2Points = text2.node.getAttribute("d");

    toSecond();

    //실선
    function toFirst() {
      text1.animate({ d: text1Points }, 3500, mina.linear, toSecond);
    }
    function toSecond() {
      text1.animate({ d: text2Points }, 3500, mina.linear, toFirst);
    }
  }

  function movcircle3() {
    //옅은 원
    var text1 = Snap.select("#circle5");
    var text2 = Snap.select("#circle6");

    var text1Points = text1.node.getAttribute("d");
    var text2Points = text2.node.getAttribute("d");

    toSecond();

    //옅은 원
    function toFirst() {
      text1.animate({ d: text1Points }, 4000, mina.linear, toSecond);
    }
    function toSecond() {
      text1.animate({ d: text2Points }, 4000, mina.linear, toFirst);
    }
  }

  /* 메인메뉴 */
  var mainMenu = $(".main_menu ul li");
  mainMenu.hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );
  var mainMenyWrap = $(".main_menu ul");
  mainMenyWrap.mouseenter(function () {
    $(".main_menu ul li:first-child").removeClass("on");
  });
  mainMenyWrap.mouseleave(function () {
    $(".main_menu ul li:first-child").addClass("on");
  });

  /* 슬라이드배너 */
  $(".adbn_inner .slideList").slick({
    dots: true,
    arrow: false,
    autoplay: false,
  });

  // 카카오지도
  kakaomap();
  function kakaomap() {
    var ww = $win.width(); //브라우저 너비
    var wwMinus = ww - 200;
    new daum.roughmap.Lander({
      timestamp: "1611288939842",
      key: "2434i",
      mapWidth: wwMinus,
      mapHeight: "450",
    }).render();
  }

  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 위치
    var eminfotxt = $(
      ".cont .em_info .em_info_bg .em_info_inner .txt_wrap"
    ).offset().top;

    if (scroll > eminfotxt) {
      $(".cont .em_location h1").css("left", "0");
      $(".cont .em_location > span").css("opacity", "1");
      $(".cont .em_location .kakaoMap").css("opacity", "1");
    }
  });
});
