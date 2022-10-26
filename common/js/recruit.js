$(window).on("load", function () {
  var $win = $(window); //브라우저

  //시작 애니메이션
  setTimeout(function () {
    startani();
  }, 300);

  movescroll(); //메뉴 클릭시 스크롤 이동

  $win.resize(function () {
    var tablehh = $(".recruit_info .recruit_tb").height();
    $(".tabledim").css({ height: tablehh, lineHeight: tablehh + "px" });
  });
  var tablehh = $(".recruit_info .recruit_tb").height();
  $(".tabledim").css({ height: tablehh, lineHeight: tablehh + "px" });
  //채용 공고 정보
  setTimeout(function () {
    $(".recruit_info .recruit_tb").css("opacity", "1");
    $(".tabledim").css("opacity", "1");
    $(".recruit_info .recruit_btn").css("opacity", "1");
  }, 500);

  // 팝업 열고 닫기
  var recruit_btn = $(".recruit_info .recruit_tb td:first-child a");
  var recruit_close_btn = $(".recruit_pop .back .w_back .btn_wrap button.close_btn");
  recruit_btn.click(function () {
    $(".recruit_pop").css("display", "block");
  });
  recruit_close_btn.click(function () {
    $(".recruit_pop").css("display", "");
  });

  //입력 받은 요소의 자식 노드를 모두 삭제하는 함수
  function removeAllchild(div) {
    while (div.hasChildNodes()) {
      div.removeChild(div.firstChild);
    }
  }

  //스크롤 애니메이션
  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 위치
    var tabletop = $(".recruit_info .recruit_tb").offset().top; //공고 테이블 영역
    var processtop = $(".process .inner").offset().top; //면접 프로세스 영역
    var menuli = $(".m_nav ul li"); //네비게이션
    var headerhh = $("header").height(); //header 높이
    var m_menuhh = $(".m_nav").height(); //네비게이션 높이
    var subs = headerhh + m_menuhh + 1;
    var processT = $(".process").offset().top; //프로세스
    var peopleT = $(".people").offset().top; // 인재상

    //공고 테이블 지날 때
    if (scroll > tabletop) {
      $(".process .inner h1").css("left", "0");
      $(".process .inner span").css("left", "0");
    }
    if (scroll > tabletop + 200) {
      $(".process .inner .process_list ul li").css({ top: "0", opacity: "1" });
    }
    //면접 프로세스 지날 때
    if (scroll > processtop) {
      $(".people .inner h1").css("left", "0");
      $(".people .inner > span").css("left", "0");
      $(".people .inner .people_cont").css("opacity", "1");
    }
    if (scroll > processtop + 200) {
      $(".people .inner .people_cont .inr_cont .txt_wrap span").addClass("scrolled");
    }

    // 네비게이션 표시
    if (scroll < processT - subs) {
      menuli.removeClass("on");
      menuli.eq(0).addClass("on");
    } else if (scroll >= processT - subs && scroll < peopleT - subs) {
      menuli.removeClass("on");
      menuli.eq(1).addClass("on");
    } else if (scroll >= peopleT - subs) {
      menuli.removeClass("on");
      menuli.eq(2).addClass("on");
    }
  });
});

//시작 애니메이션
function startani() {
  $(".recruit_cont .title span").css("left", "0");
  $(".recruit_cont .title h1").css("left", "0");
  $(".recruit_cont .title h3").css("left", "0");
  $(".recruit_cont .img_wrap .logo_p").css("opacity", "1");
  $(".recruit_cont .img_wrap .human_p").css({ opacity: "1", right: "18%" });
}

//메뉴 클릭시 스크롤 이동
function movescroll() {
  var menu = $(".m_nav ul li");
  menu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var headerhh = $("header").height();
    var m_menuhh = $(".m_nav").height();
    var subs = headerhh + m_menuhh;
    var processT = $(".process").offset().top; //프로세스
    var peopleT = $(".people").offset().top; // 인재상

    if (idx == 0) {
      $("html, body").stop().animate({ scrollTop: 0 }, 800);
      $(".m_nav ul").stop().animate({ scrollLeft: 0 }, 800);
    } else if (idx == 1) {
      $("html, body")
        .stop()
        .animate({ scrollTop: processT - subs }, 800);
    } else if (idx == 2) {
      $("html, body")
        .stop()
        .animate({ scrollTop: peopleT - subs }, 800);
    }
  });
}
