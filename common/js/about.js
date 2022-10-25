$(window).on("load", function () {
  var $win = $(window); //브라우저
  var ww = $("html").width();

  // 재무정보 클릭
  var tabMenu = $(".finance .tab_menu > ul > li");
  var financeInner = $(".finance .finance_cont_wrap .finance_inner");

  tabMenu.click(function () {
    //탭 클릭
    var idx = $(this).index(); //현재 탭의 인덱스
    tabMenu.removeClass("on"); //탭 on 지우기
    $(this).addClass("on"); //현재 탭의 on 붙이기
    financeInner.removeClass("on"); //내용 지우기
    financeInner.eq(idx).addClass("on"); //현재 내용 보이기
  });

  //메인화면 시작시 매이메이션
  setTimeout(function () {
    main_load();
  }, 500);
  movesvg1(); //svg1
  movesvg2(); //svg2
  movesvg3(); //svg3
  movesvg4(); //svg4
  movesvg5(); //svg5
  movesvg6(); //svg6

  movescroll(); //메뉴 클릭시 스크롤 이동

  // 스크롤 이벤트
  $win.scroll(function () {
    var scroll = $win.scrollTop();
    var ww = $("html").width();

    //var nav = $('.nav');  //네비게이션

    if (ww > 1024) {
      //pc
      history_pc(); //연혁
    } else if (ww > 600 && ww <= 1024) {
      history_pc(); //연혁
    } else {
      //모바일인 경우
      history_mobile(); //연혁
    }

    /* 애니메이션 */
    var maintxt = $(".about_cont .about_txt .txt_wrap .subtit").offset().top; //메인 텍스트영역
    var menuli = $(".m_nav ul li"); //네비게이션
    var headerhh = $("header").height(); //header 높이
    var m_menuhh = $(".m_nav").height(); //네비게이션 높이
    var subs = headerhh + m_menuhh + 1;
    var menuww = $(".m_nav").width(); //네비게이션 너비
    var vision = $(".vision").offset().top; //비전 영역
    var cit = $(".logo_wrap").offset().top; //ci 위치
    var hist = $(".em_history").offset().top; //history 위치
    var groupt = $(".group").offset().top; //group 위치
    var vscont2 = $(
      ".vision .alltxt_wrap .txt_wrap:nth-child(2) .subtit:nth-child(3)"
    ).offset().top; //비전 도전 지날 때
    var logot = $(".logo_wrap").offset().top; //로고텍스트 영역
    var hiscont1 =
      $(".em_history_inner .contents .history_cont:first-child").offset().top -
      300; //연혁 첫번째
    var hiscont2 =
      $(".em_history_inner .contents .history_cont:nth-child(2)").offset().top -
      300; //연혁 두번째
    var hiscont3 =
      $(".em_history_inner .contents .history_cont:nth-child(3)").offset().top -
      300; //연혁 세번째
    var hislastimg = $(
      ".em_history_inner .contents .history_cont:last-child .img_wrap"
    ).offset().top; //연역 마지막 이미지
    //맨아래 체크
    var scrollHeight = $(document).height();
    var ht = $win.height();
    var contactG = scroll + ht;

    //메인 텍스트영역 지날 때
    if (scroll > maintxt) {
      $(".vision .txt_wrap:first-child h1").css("left", "0");
      $(".vision .txt_wrap:first-child .subtit").css("left", "0");
      $(".vision .txt_wrap:first-child p").css("left", "0");
      $(".vision .txt_wrap:first-child .txt_cont").css("left", "0");
      $(".vision .txt_wrap:nth-child(2) h1").css("right", "0");
      $(".vision .txt_wrap:nth-child(2) .subtit").css("right", "0");
    }
    //비전영역 지날 때
    if (scroll > vision) {
      $(".logo_wrap .inner > h1").css("left", "0");
      $(".logo_wrap .emoney_logo_wrap").css("opacity", "1");
      $(".logo_wrap .logo_txt_wrap").css("opacity", "1");
      $(".logo_wrap .down_wrap").css("opacity", "1");
      $(".vision .alltxt_wrap .txt_wrap .subtit .img_wrap").css("opacity", "1");
    }
    //비전 도전 지날 때
    if (scroll > vscont2) {
      $(".logo_wrap .inner .logo_txt_wrap p span").addClass("scrolled");
    }
    //로고텍스트 지날 때
    if (scroll > logot) {
      $(".em_history .em_history_inner .title .title_inner h1").css(
        "left",
        "0"
      );
      $(".em_history .em_history_inner .his_graph").css("opacity", "1");
      // $('.em_history .em_history_inner .contents').css('opacity','1');
    }
    //연혁 첫번째 지날 때
    if (scroll > hiscont1) {
      $(
        ".em_history_inner .contents .history_cont:first-child .img_wrap figure"
      ).css("right", "0");
      $(
        ".em_history_inner .contents .history_cont:first-child .img_wrap figure img"
      ).css("right", "0");
    }
    //연혁 두번째 지날 때
    if (scroll > hiscont2) {
      $(
        ".em_history_inner .contents .history_cont:nth-child(2) .img_wrap figure"
      ).css("right", "0");
      $(
        ".em_history_inner .contents .history_cont:nth-child(2) .img_wrap figure img"
      ).css("right", "0");
    }
    //연혁 세번째 지날 때
    if (scroll > hiscont3) {
      $(
        ".em_history_inner .contents .history_cont:nth-child(3) .img_wrap figure"
      ).css("right", "0");
      $(
        ".em_history_inner .contents .history_cont:nth-child(3) .img_wrap figure img"
      ).css("right", "0");
    }
    //연혁 마지막 이미지 영역 지날 때
    if (scroll > hislastimg) {
      $(".finance .txt_wrap h1 span").css("left", "0");
      $(".finance .tab_menu").css("opacity", "1");
      $(".finance .finance_cont_wrap").css("opacity", "1");
    }

    // 네비게이션 표시
    if (scroll < vision - subs) {
      menuli.removeClass("on");
      menuli.eq(0).addClass("on");
      $(".m_nav ul").stop().animate({ scrollLeft: 0 }, 800);
    } else if (scroll >= vision - subs && scroll < cit - subs) {
      menuli.removeClass("on");
      menuli.eq(1).addClass("on");
    } else if (scroll >= cit - subs && scroll < hist - subs) {
      menuli.removeClass("on");
      menuli.eq(2).addClass("on");
    } else if (scroll >= hist - subs && scroll < groupt - subs) {
      menuli.removeClass("on");
      menuli.eq(3).addClass("on");
      $(".m_nav ul").stop().animate({ scrollLeft: menuww }, 800);
    } else if (scroll >= groupt - subs) {
      menuli.removeClass("on");
      menuli.eq(4).addClass("on");
    }

    if (contactG == scrollHeight) {
      menuli.removeClass("on");
      menuli.eq(4).addClass("on");
    }
  });
  /* 그룹사 슬라이드 */
  if (ww <= 600) {
    group_mobile(); //그룹사 모바일
  } else {
    groupSlide(); //그룹사 태블릿 및 pc
  }
});
//svg1
function movesvg1() {
  // text 변경
  var text1 = Snap.select("#svg1");
  var text2 = Snap.select("#svg2");

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
//svg2
function movesvg2() {
  // text 변경
  var text1 = Snap.select("#svg3");
  var text2 = Snap.select("#svg4");

  var text1Points = text1.node.getAttribute("d");
  var text2Points = text2.node.getAttribute("d");

  toSecond();

  //원
  function toFirst() {
    text1.animate({ d: text1Points }, 3500, mina.linear, toSecond);
  }
  function toSecond() {
    text1.animate({ d: text2Points }, 3500, mina.linear, toFirst);
  }
}
//svg3
function movesvg3() {
  // text 변경
  var text1 = Snap.select("#svg5");
  var text2 = Snap.select("#svg6");

  var text1Points = text1.node.getAttribute("d");
  var text2Points = text2.node.getAttribute("d");

  toSecond();

  //원
  function toFirst() {
    text1.animate({ d: text1Points }, 3500, mina.linear, toSecond);
  }
  function toSecond() {
    text1.animate({ d: text2Points }, 3500, mina.linear, toFirst);
  }
}
//svg4
function movesvg4() {
  // text 변경
  var text1 = Snap.select("#svg7");
  var text2 = Snap.select("#svg8");

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
//svg5
function movesvg5() {
  // text 변경
  var text1 = Snap.select("#svg9");
  var text2 = Snap.select("#svg10");

  var text1Points = text1.node.getAttribute("d");
  var text2Points = text2.node.getAttribute("d");

  toSecond();

  //원
  function toFirst() {
    text1.animate({ d: text1Points }, 3500, mina.linear, toSecond);
  }
  function toSecond() {
    text1.animate({ d: text2Points }, 3500, mina.linear, toFirst);
  }
}
//svg6
function movesvg6() {
  // text 변경
  var text1 = Snap.select("#svg11");
  var text2 = Snap.select("#svg12");

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

//그룹사 슬라이드
function groupSlide() {
  /* 그룹사 */
  var groupslidecont = $(
    ".group .group_inner .slide_wrap .all_slide_wrap > div"
  ); //슬라이드들
  var allslide = $(".all_slideList .carousel_wrap"); //전체
  var itslide = $(".it_slideList .carousel_wrap"); //it
  var financeslide = $(".finance_slideList .carousel_wrap"); //finance
  var contslide = $(".cont_slideList .carousel_wrap"); //content
  var busislide = $(".busi_slideList .carousel_wrap"); //business
  var itnav = $(".it_slideList .all_progress");

  itnav.css("display", "none");

  // 첫번째 슬라이드 보이기
  groupslidecont.hide(); //슬라이드들 숨기기
  groupslidecont.eq(0).show(); //첫번째 슬라이드 보이기

  /* it 슬라이드 */
  itslide.slick({
    dots: true,
    arrow: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  /* finance 슬라이드 */
  financeslide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $(
        "div.finance_slideList .all_progress .all_progress_st"
      );
      var progressEnd = $(
        "div.finance_slideList .all_progress .all_progress_end"
      );
      var progressBar = $(
        "div.finance_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  financeslide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: true,
  });
  /* cont 슬라이드 */
  contslide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $("div.cont_slideList .all_progress .all_progress_st");
      var progressEnd = $("div.cont_slideList .all_progress .all_progress_end");
      var progressBar = $(
        "div.cont_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  contslide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  /* busi 슬라이드 */
  busislide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $("div.busi_slideList .all_progress .all_progress_st");
      var progressEnd = $("div.busi_slideList .all_progress .all_progress_end");
      var progressBar = $(
        "div.busi_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  busislide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  //그룹사 메뉴
  var grTabMenu = $(
    ".group .group_inner .slide_wrap .group_tap_wrap ul.group_menu li"
  ); //그룹사 메뉴
  var grSlide = $(".group .group_inner .slide_wrap .all_slide_wrap > div"); //그룹사 슬라이드

  //그룹사 메뉴 클릭
  grTabMenu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    grTabMenu.removeClass("on"); //탭 on 지우기
    $(this).addClass("on"); //현재 탭의 on 붙이기
    grSlide.hide(); //내용 지우기
    grSlide.eq(idx).show(); //현재 내용 보이기

    if (idx == 0) {
      //2번째
      itslide.slick("setPosition");
    } else if (idx == 1) {
      //3번째
      financeslide.slick("setPosition");
    } else if (idx == 2) {
      //4번째
      contslide.slick("setPosition");
    } else if (idx == 3) {
      //5번째
      busislide.slick("setPosition");
    }
  });
}

//그룹사 슬라이드 모바일 버젼
function group_mobile() {
  /* 그룹사 */
  var groupslidecont = $(
    ".group .group_inner .slide_wrap .all_slide_wrap > div"
  ); //슬라이드들
  var allslide = $(".all_slideList .carousel_wrap"); //전체
  var itslide = $(".it_slideList .carousel_wrap"); //it
  var financeslide = $(".finance_slideList .carousel_wrap"); //finance
  var contslide = $(".cont_slideList .carousel_wrap"); //content
  var busislide = $(".busi_slideList .carousel_wrap"); //business
  var itnav = $(".it_slideList .all_progress");

  itnav.css("display", "none");

  // 첫번째 슬라이드 보이기
  groupslidecont.hide(); //슬라이드들 숨기기
  groupslidecont.eq(0).show(); //첫번째 슬라이드 보이기

  /* it 슬라이드 */
  itslide.slick({
    dots: true,
    arrow: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  /* finance 슬라이드 */
  financeslide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $(
        "div.finance_slideList .all_progress .all_progress_st"
      );
      var progressEnd = $(
        "div.finance_slideList .all_progress .all_progress_end"
      );
      var progressBar = $(
        "div.finance_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  financeslide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
  });
  /* cont 슬라이드 */
  contslide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $("div.cont_slideList .all_progress .all_progress_st");
      var progressEnd = $("div.cont_slideList .all_progress .all_progress_end");
      var progressBar = $(
        "div.cont_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  contslide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  /* busi 슬라이드 */
  busislide.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var progressSt = $("div.busi_slideList .all_progress .all_progress_st");
      var progressEnd = $("div.busi_slideList .all_progress .all_progress_end");
      var progressBar = $(
        "div.busi_slideList .all_progress .all_progress_bar p"
      );

      var i = (currentSlide ? currentSlide : 0) + 1;
      var per = (i / slick.slideCount) * 100;

      progressEnd.text("0" + slick.slideCount);
      progressSt.text("0" + i);
      progressBar.css("width", per + "%");
    }
  );
  busislide.slick({
    dots: true,
    arrow: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  //그룹사 메뉴
  var grTabMenu = $(
    ".group .group_inner .slide_wrap .group_tap_wrap ul.group_menu li"
  ); //그룹사 메뉴
  var grSlide = $(".group .group_inner .slide_wrap .all_slide_wrap > div"); //그룹사 슬라이드

  //그룹사 메뉴 클릭
  grTabMenu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    grTabMenu.removeClass("on"); //탭 on 지우기
    $(this).addClass("on"); //현재 탭의 on 붙이기
    grSlide.hide(); //내용 지우기
    grSlide.eq(idx).show(); //현재 내용 보이기

    if (idx == 0) {
      //2번째
      itslide.slick("setPosition");
    } else if (idx == 1) {
      //3번째
      financeslide.slick("setPosition");
    } else if (idx == 2) {
      //4번째
      contslide.slick("setPosition");
    } else if (idx == 3) {
      //5번째
      busislide.slick("setPosition");
    }
  });
}

// 연혁
function history_pc() {
  /* 연혁 */
  var $win = $(window); //브라우저
  var scroll = $win.scrollTop(); //현재 스크롤 위치
  var history = $(".em_history").offset().top; //연혁 위치
  var historyset = history + 100;
  // var finance = $('.finance').offset().top; //재무정보 위치
  // var financeset = finance - 200;
  var group = $(".group").offset().top; //재무정보 위치
  var groupset = group - 200;
  var history_inner = $(".em_history .em_history_inner"); //연혁 타이틀부분
  var history_title = $(".em_history .em_history_inner .title"); //연혁 타이틀부분
  var history_cont = $(".em_history .em_history_inner .contents"); //연혁 cont

  var contHei = $(".em_history").outerHeight(); //연혁 높이
  var winHei = $win.outerHeight(); //창 높이
  var height = contHei - winHei; //연혁 높이 - 창 높이
  var starthei = scroll - historyset; //시작점
  var bar = (starthei / height) * 100; //indi

  //스크롤이 연혁과 재무사이에 있는경우
  if (scroll > historyset && scroll < groupset) {
    //history .on 추가
    history_inner.addClass("on");

    $("#history_indi").css("width", bar + "%"); //연혁 인디케이터

    /* 연혁 영역 */
    if (bar > 48) {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(2)"
      ).addClass("on");
    } else {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(2)"
      ).removeClass("on");
    }
    if (bar > 98) {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(3)"
      ).addClass("on");
    } else {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(3)"
      ).removeClass("on");
    }
  } else {
    history_inner.removeClass("on"); //history .on 제거

    $("#history_indi").css("width", "");
  }
}

//연혁 모바일
function history_mobile() {
  var $win = $(window); //브라우저
  var scroll = $win.scrollTop(); //현재 스크롤 위치
  var history = $(".em_history").offset().top; //연혁 위치
  var historyset = history + 100;
  // var finance = $('.finance').offset().top; //재무정보 위치
  // var financeset = finance - 200;
  var group = $(".group").offset().top; //재무정보 위치
  var groupset = group - 200;
  var history_inner = $(".em_history .em_history_inner"); //연혁 타이틀부분

  var contHei = $(".em_history").outerHeight(); //연혁 높이
  var winHei = $win.outerHeight(); //창 높이
  var height = contHei - winHei; //연혁 높이 - 창 높이
  var starthei = scroll - historyset; //시작점
  var bar = (starthei / height) * 100; //indi

  //스크롤이 연혁과 재무사이에 있는경우
  if (scroll > history && scroll < groupset) {
    //history .on 추가
    history_inner.addClass("on");

    $("#history_indi").css("width", bar + "%"); //연혁 인디케이터

    /* 연혁 영역 */
    if (bar > 48) {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(2)"
      ).addClass("on");
    } else {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(2)"
      ).removeClass("on");
    }
    if (bar > 98) {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(3)"
      ).addClass("on");
    } else {
      $(
        ".em_history .em_history_inner .his_graph span.circle:nth-child(3)"
      ).removeClass("on");
    }
  } else {
    history_inner.removeClass("on"); //history .on 제거

    $("#history_indi").css("width", "");
  }
}

//메인화면 시작시 매이메이션
function main_load() {
  var main_span = $(".about_cont .about_txt .title span"); //about 경로
  var main_h1 = $(".about_cont .about_txt .txt_wrap h1"); //about h1
  var main_subtit = $(".about_cont .about_txt .txt_wrap .subtit"); //서브타이블
  var main_txt = $(".about_cont .about_txt .txt_wrap div"); //설명
  var main_img = $(".about_cont .about_img > img"); //M이미지
  var main_img2 = $(".about_cont .about_img > img:first-child"); //M이미지2
  var main_img3 = $(".about_cont .back_img img"); //M이미지3
  var skw_h1 = $(".skw_wrap .txt_wrap h1"); //skw

  main_span.css("left", "0");
  main_h1.css("left", "0");
  main_subtit.css("left", "0");
  main_txt.css("left", "0");
  main_img.css("top", "0");
  main_img2.css({ opacity: "1", top: "-8%" });
  main_img3.css("right", "0");
  skw_h1.css("opacity", "1");
}

//메뉴 클릭시 스크롤 이동
function movescroll() {
  var menu = $(".m_nav ul li");
  menu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var headerhh = $("header").height();
    var m_menuhh = $(".m_nav").height();
    var menuww = $(".m_nav").width();
    var subs = headerhh + m_menuhh;
    var visiont = $(".vision").offset().top; //비전
    var cit = $(".logo_wrap").offset().top; //ci 위치
    var hist = $(".em_history").offset().top; //history 위치
    var groupt = $(".group").offset().top; //group 위치

    if (idx == 0) {
      $("html, body").stop().animate({ scrollTop: 0 }, 800);
      $(".m_nav ul").stop().animate({ scrollLeft: 0 }, 800);
    } else if (idx == 1) {
      $("html, body")
        .stop()
        .animate({ scrollTop: visiont - subs }, 800);
    } else if (idx == 2) {
      $("html, body")
        .stop()
        .animate({ scrollTop: cit - subs }, 800);
    } else if (idx == 3) {
      $("html, body")
        .stop()
        .animate({ scrollTop: hist - subs }, 800);
      $(".m_nav ul").stop().animate({ scrollLeft: menuww }, 800);
    } else if (idx == 4) {
      $("html, body")
        .stop()
        .animate({ scrollTop: groupt - subs }, 800);
    }
  });
}
