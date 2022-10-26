$(window).on("load", function () {
  var $win = $(window); //브라우저

  //startani
  setTimeout(function () {
    startani();
  }, 300);

  graReset(); //그래프 숨김
  movescroll(); //메뉴 클릭시 스크롤 이동

  // 메인 콘텐츠 호버시
  var contbox = $(".contents_cont .contents_main .box_wrap .box .box_cont");
  var conttxt = $(".contents_cont .contents_main .box_wrap .box .txt_wrap");
  var hovertxt = $(".contents_cont .contents_main .hovertxt_wrap .cont");
  //hovertxt.eq(1).show();
  contbox.hover(
    function () {
      $(this).parents(".box").addClass("on");
      $(this).find(".explain_txt").removeClass("off");
      $(this).find(".explain_txt").addClass("on");
    },
    function () {
      $(this).parents(".box").removeClass("on");
      $(this).find(".explain_txt").removeClass("on");
    }
  );

  //scroll
  var currentDirection = ""; // 현재의 방향을 나타내는 변수
  var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 높이
    var ww = $("html").width(); //창 너비
    //맨아래 체크
    var scrollHeight = $(document).height();
    var ht = $win.height();
    var contactG = scroll + ht;

    // 퀵 스탯 부분
    var quick = $(".quick").offset().top;
    var quickT = quick - 200;
    var quickT2 = quick - 100;
    // 퀵 그래프
    var gra_line = $(".quick .quick_graph .svg_cont .chart-line");
    var gra_fill = $(".quick .quick_graph .svg_cont .chart-fill");

    if (scroll > quickT && scroll < quick) {
      //카운팅
      var currentPos = $(this).scrollTop();
      if (currentPos > lastScrollTop) {
        //아래로 스크롤
        if (currentDirection != "down") {
          //마지막 방향 확인
          currentDirection = "down";
          total_count();
        }
      } else {
        //위로 스크롤
        if (currentDirection != "up") {
          currentDirection = "up";
          //total_count();
        }
      }
      lastScrollTop = currentPos; //방향을 구하기 위해 마지막 스크롤 지점을 저장
    }
    if (scroll > quickT) {
      //그래프
      gra_line.css("animation", "");
      gra_fill.css("animation", "");
    } else {
      graReset();
    }

    /* 애니메이션 */
    var boxtxt = $(".contents_cont .contents_main .box_wrap").offset().top; //box 영역
    var titleArea = $(".mobile_contents_wrap h1.title").offset().top; //title 영역
    var slideInner = $(
      ".mobile_contents_wrap .mobile_box_wrap .mobile_box .slide_inner"
    ).offset().top; //slide_inner 영역
    var systit = $(".system .tit_wrap").offset().top - 50; //sys tit 영역
    var syscont = $(".system .inner .cont:nth-child(2)").offset().top; //syscont cont 영역

    var menuli = $(".m_nav ul li"); //네비게이션
    var headerhh = $("header").height(); //header 높이
    var m_menuhh = $(".m_nav").height(); //네비게이션 높이
    var subs = headerhh + m_menuhh + 1;
    var systemT = $(".system").offset().top; //시스템
    var statsT = $(".quick").offset().top; // stats

    //타이틀 영역 지날 때
    if (scroll > boxtxt) {
      $(".system .tit_wrap > h1").css("left", "0");
      $(".system .tit_wrap span").css("left", "0");
    }
    if (scroll > titleArea) {
      $(".system .tit_wrap > h1").css("left", "0");
      $(".system .tit_wrap span").css("left", "0");
    }
    //box txt 영역 지날 때
    if (scroll > boxtxt) {
      $(".system .inner .cont:nth-child(2)").css({ opacity: "1", bottom: "0" });
    }
    if (scroll > slideInner) {
      $(".system .inner .cont:nth-child(2)").css({ opacity: "1", bottom: "0" });
    }
    //sys tit 지날 때
    if (scroll > systit) {
      $(".system .inner .cont:nth-child(3)").css({ opacity: "1", bottom: "0" });
    }
    //syscont service 영역 지날 때
    if (scroll > syscont) {
      $(".system .inner .cont:nth-child(4)").css({ opacity: "1", bottom: "0" });
    }

    // 태블릿 & 모바일 네비게이션 표시
    if (scroll < systemT - subs) {
      menuli.removeClass("on");
      menuli.eq(0).addClass("on");
    } else if (scroll >= systemT - subs && scroll < statsT - subs) {
      menuli.removeClass("on");
      menuli.eq(1).addClass("on");
    } else if (scroll >= statsT - subs) {
      menuli.removeClass("on");
      menuli.eq(2).addClass("on");
    }
    //맨 아래
    if (contactG == scrollHeight) {
      gra_line.css("animation", "");
      gra_fill.css("animation", "");
      total_count();
    }
  });

  /* 모바일 Swiper */
  let slideCount = document.querySelectorAll(
    ".mobile_contents_wrap .mobile_box_wrap .mobile_box"
  ).length; //slide count
  let total_slide = document.querySelector(".total_index");
  console.log(`0${slideCount}`);
  total_slide.innerText = `0${slideCount}`; // 총 슬라이드 개수

  const mainSwiper = new Swiper(".mobile_contents_wrap .swiper", {
    speed: 500,
    autoplay: {
      delay: 3000, // 시간
      disableOnInteraction: false,
    },
    on: {
      /* 슬라이드 프로그레스 바(진행) */
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
      activeIndexChange: function () {
        let now_slide = document.querySelector(".now_index");
        let index = (this.realIndex ? this.realIndex : 0) + 1;
        now_slide.innerText = `0${index}`;

        /* 슬라이드 배경 색 */
        document
          .querySelector(".mobile_box_wrap")
          .classList.remove("back_color1");
        document
          .querySelector(".mobile_box_wrap")
          .classList.remove("back_color2");
        document
          .querySelector(".mobile_box_wrap")
          .classList.remove("back_color3");
        document
          .querySelector(".mobile_box_wrap")
          .classList.remove("back_color4");
        document
          .querySelector(".mobile_box_wrap")
          .classList.remove("back_color5");

        if (this.realIndex === 0) {
          document
            .querySelector(".mobile_box_wrap")
            .classList.add("back_color1");
        } else if (this.realIndex === 1) {
          document
            .querySelector(".mobile_box_wrap")
            .classList.add("back_color2");
        } else if (this.realIndex === 2) {
          document
            .querySelector(".mobile_box_wrap")
            .classList.add("back_color3");
        } else if (this.realIndex === 3) {
          document
            .querySelector(".mobile_box_wrap")
            .classList.add("back_color4");
        } else if (this.realIndex === 4) {
          document
            .querySelector(".mobile_box_wrap")
            .classList.add("back_color5");
        }
      },
    },
    observer: true,
    observeParents: true,
    loop: false, // 슬라이드 반복 여부
  });
});

//startani
function startani() {
  $(".contents_cont .contents_main .title span").css("left", "0");
  $(".contents_cont .contents_main .title > h1").css("left", "0");
  $(".contents_cont .contents_main .box_wrap .box").css("bottom", "0");

  $(".mobile_contents_wrap h1.title").css("left", "5%");
  $(".mobile_contents_wrap .mobile_box_wrap .mobile_box").css("opacity", "1");
}

//그래프 숨김
function graReset() {
  var gra_line = $(".quick .quick_graph .svg_cont .chart-line");
  var gra_fill = $(".quick .quick_graph .svg_cont .chart-fill");

  gra_line.css("animation", "none");
  gra_fill.css("animation", "none");
}

//카운팅 토탈 함수
function total_count() {
  counter1("counter1", 29);
  counter2("counter2", 61);
  counter3("counter3", 1450);
  counter4("counter4", 13);
  counter5("counter5", 145);
}

// 숫자 자동 카운팅1
function counter1(target, number) {
  var num = 0;
  var max = number;
  var time = 100;
  var spanwrap = $("#" + target);

  var interval = setInterval(function () {
    num += 1;
    spanwrap.text(num);
    if (num >= max) clearInterval(interval);
  }, time);
}

// 숫자 자동 카운팅2
function counter2(target, number) {
  var num = 0;
  var max = number;
  var time = 80;
  var spanwrap = $("#" + target);

  var interval = setInterval(function () {
    num += 2;
    // spanwrap.text(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    spanwrap.text(num);
    if (num >= max) {
      clearInterval(interval);
    }
  }, time);
}
// 숫자 자동 카운팅3
function counter3(target, number) {
  var num = 0;
  var max = number;
  var time = 100;
  var spanwrap = $("#" + target);

  var interval = setInterval(function () {
    num += 50;
    //spanwrap.text(num);
    spanwrap.text(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    if (num >= max) clearInterval(interval);
  }, time);
}
// 숫자 자동 카운팅4
function counter4(target, number) {
  var num = 0;
  var max = number;
  var time = 100;
  var spanwrap = $("#" + target);

  var interval = setInterval(function () {
    num += 1;
    spanwrap.text(num);
    if (num >= max) {
      clearInterval(interval);
    }
  }, time);
}
// 숫자 자동 카운팅5
function counter5(target, number) {
  var num = 0;
  var max = number;
  var time = 80;
  var spanwrap = $("#" + target);

  var interval = setInterval(function () {
    num += 5;
    spanwrap.text(num);
    if (num >= max) {
      clearInterval(interval);
    }
  }, time);
}

//메뉴 클릭시 스크롤 이동
function movescroll() {
  var menu = $(".m_nav ul li");
  menu.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var headerhh = $("header").height();
    var m_menuhh = $(".m_nav").height();
    var subs = headerhh + m_menuhh;
    var systemT = $(".system").offset().top; //시스템
    var statsT = $(".quick").offset().top; // stats

    if (idx == 0) {
      $("html, body").stop().animate({ scrollTop: 0 }, 800);
      $(".m_nav ul").stop().animate({ scrollLeft: 0 }, 800);
    } else if (idx == 1) {
      $("html, body")
        .stop()
        .animate({ scrollTop: systemT - subs }, 800);
    } else if (idx == 2) {
      $("html, body")
        .stop()
        .animate({ scrollTop: statsT - subs }, 800);
    }
  });
}
