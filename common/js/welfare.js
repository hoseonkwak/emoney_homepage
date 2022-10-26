$(window).on("load", function () {
  var $win = $(window); //브라우저

  //시작애니메이션
  setTimeout(function () {
    startani();
  }, 300);

  movescroll(); //메뉴 클릭시 스크롤 이동

  // best 복지
  var welfareMenu = $(".best_welfare .welfare_list ul li");
  welfareMenu.click(function () {
    var idx = $(this).index(); //현재 인덱스
    var welcont = $(".welfare_list_cont");

    welfareMenu.removeClass("on");
    welcont.removeClass("on");
    $(this).addClass("on");

    if (idx == 0) {
      welcont.eq(0).addClass("on");
    } else if (idx == 1) {
      welcont.eq(1).addClass("on");
    }
  });

  //스크롤 이벤트
  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 위치
    var maintxt = $(".welfare_cont .title > h3").offset().top; //maintxt 영역
    var bestcont = $(".best_welfare").offset().top; //best 영역
    var listh1 = $(".welfare_list h1").offset().top; //리스트 제목 영역
    var welfarecont1 = $(".welfare_list .cont.health").offset().top; //건강 영역
    var welfarecont2 = $(".welfare_list .cont.self_devel").offset().top; //자기개발 영역
    var welfarecont4 = $(".welfare_list .cont.work_environment").offset().top; //근무환경 영역
    var menuli = $(".m_nav ul li"); //네비게이션
    var headerhh = $("header").height(); //header 높이
    var m_menuhh = $(".m_nav").height(); //네비게이션 높이
    var subs = headerhh + m_menuhh + 1;
    var bestT = $(".best_welfare").offset().top; //베스트 복지
    var welfareT = $(".welfare_list h1").offset().top; // 복지 리스트

    //메인 txt 지날 때
    if (scroll > maintxt) {
      $(".welfare_list h1").css("left", "0");
      $(".welfare_list .cont.health").css("left", "0");
      $(".welfare_list .cont.health h2 span").addClass("scrolled");
    }
    //best 지날 때
    if (scroll > bestcont + 200) {
      $(".welfare_list .cont.self_devel").css("left", "0");
      $(".welfare_list .cont.self_devel h2 span").addClass("scrolled");
    }
    //리스트 제목 영역 지날 때
    if (scroll > listh1) {
      $(".welfare_list .cont.leisure").css("left", "0");
      $(".welfare_list .cont.leisure h2 span").addClass("scrolled");
    }
    //건강영역 지날 때
    if (scroll > welfarecont1 + 300) {
      $(".welfare_list .cont.work_environment").css("left", "0");
      $(".welfare_list .cont.work_environment h2 span").addClass("scrolled");
    }
    //자기개발 지날 때
    if (scroll > welfarecont2 + 200) {
      $(".welfare_list .cont.life_support").css("left", "0");
      $(".welfare_list .cont.life_support h2 span").addClass("scrolled");
    }
    //근무환경 지날 때
    if (scroll > welfarecont4) {
      $(".welfare_list .cont.reward").css("left", "0");
      $(".welfare_list .cont.reward h2 span").addClass("scrolled");
    }

    // 네비게이션 표시
    if (scroll < bestT - subs) {
      menuli.removeClass("on");
      menuli.eq(0).addClass("on");
    } else if (scroll >= bestT - subs && scroll < welfareT - subs) {
      menuli.removeClass("on");
      menuli.eq(1).addClass("on");
    } else if (scroll >= welfareT - subs) {
      menuli.removeClass("on");
      menuli.eq(2).addClass("on");
    }
  });
});

//시작애니메이션
function startani() {
  $(".welfare_cont .title span").css("left", "0");
  $(".welfare_cont .title > h1").css("left", "0");
  $(".welfare_cont .title > h3").css("left", "0");
  $(".welfare_cont .title .img_wrap img").css({ right: "0", opacity: "1" });
  $(".best_welfare").css("opacity", "1");
}

//메뉴 클릭시 스크롤 이동
function movescroll() {
  var menu = $(".m_nav ul li");
  menu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var headerhh = $("header").height();
    var m_menuhh = $(".m_nav").height();
    var subs = headerhh + m_menuhh;
    var bestT = $(".best_welfare").offset().top; //베스트 복지
    var welfareT = $(".welfare_list h1").offset().top; // 복지 리스트

    if (idx == 0) {
      $("html, body").stop().animate({ scrollTop: 0 }, 800);
      $(".m_nav ul").stop().animate({ scrollLeft: 0 }, 800);
    } else if (idx == 1) {
      $("html, body")
        .stop()
        .animate({ scrollTop: bestT - subs }, 800);
    } else if (idx == 2) {
      $("html, body")
        .stop()
        .animate({ scrollTop: welfareT - subs }, 800);
    }
  });
}
