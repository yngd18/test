$(function () {

  /*=================================================
    ハンバーガーメニュー
  ===================================================*/
  $(".toggle-btn, .toggle_btn").on("click", function () {
    $("header, #header").toggleClass("open");
  });

  $("nav a, #navi a, #mask").on("click", function () {
    $("header, #header").toggleClass("open");
  });


  /*=================================================
    スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });


  /*=================================================
    ファーストビュー_animation
  ===================================================*/
  setTimeout(() => {
    const el = document.getElementById("fv-animation");
    if (el) {
      el.style.display = "none";
    }
  }, 7000);


  /*=================================================
    お申し込みボタン
  ===================================================*/
  let ctabtn = $(".cta-btn");
  ctabtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      ctabtn.fadeIn();
    } else {
      ctabtn.fadeOut();
    }
  });


  /*=================================================
    受講生の声、作品集スライダー
  ===================================================*/

  $(".voice-slider").slick({
    arrows: true,
    prevArrow: '<button type="button" class="slide-arrow prev-arrow"><span class="slide-arrow__arrow prev-arrow__arrow"></span></button>',
    nextArrow: '<button type="button" class="slide-arrow next-arrow"><span class="slide-arrow__arrow next-arrow__arrow"></span></button>',
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });


  $(".collection-slider").slick({
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
          centerPadding: "50px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });




  /*=================================================
    スクロール時の画像フェード表示
  ===================================================*/
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


  /*=================================================
    プロナビの強み（テキスト & 画像）
  ===================================================*/
  const openBtns = document.querySelectorAll('.sp-btn, .small-page-img');
  const pages = document.querySelectorAll('.page-modal, .page-modal-img');
  const modalBg = document.getElementById('modal-bg');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      modalBg.style.display = 'block';
      modalBg.onclick = closeAll;
      document.body.classList.add('modal-open');

      pages.forEach(p => {
        p.classList.remove('show');
        p.style.display = 'none';
      });

      const page = document.getElementById(target);
      page.style.display = 'block';
      setTimeout(() => page.classList.add('show'), 10);
    });
  });

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', closeAll);
  });

  function closeAll() {
    modalBg.style.display = 'none';
    document.body.classList.remove('modal-open');

    pages.forEach(p => {
      p.classList.remove('show');
      p.style.display = 'none';
    });
  }


  /*=================================================
    アコーディオンメニュー
  ===================================================*/
  $('.list-question').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.list-answer').slideToggle(200);
  });

});