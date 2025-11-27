$(function () {
  /*=================================================
  スマホメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    ($("#header").toggleClass("open"));
  });
  // headerに対してopenクラスを追加または削除する。
  // クラスの追加と削除は、ハンバーガーメニューの表示と非表示を切り替えるために使用される。

  // toggleClassメソッドを使用することで、hamburgerクラスにopenクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる


  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("#header").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $("#header").toggleClass("open");
  });


  // 以下のようにまとめてかくとコードが簡略化する

  // $(".toggle_btn , #mask , #navi a").on("click", function () {

  //     ($("#header").toggleClass("open"));
  // });



  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // aタグのhref属性の値が#で始まる要素をクリックした時に実行する
    // 'a[href^=#]'：「aタグのhref属性で値が#で始まる要素だったとき」

    // リンクを取得 クリックされたaタグのhref属性の中身をhrefという変数に代入する （#menuなど）をhrefという変数に代入する
    let href = $(this).attr("href");
    // this: クリックされたaタグ $('a[href^=#]')
    // .attr()は、要素の属性の値を取得する

    // ジャンプ先のid名をセット href == "#" 】 変数hrefの値が"#"【 || 】 または【href == ""】  であれば（【？】）
    // 【 $('html'); 】 へのリンク（≒ページトップ）,そうでなければ（【:】）【 $(href); 】 変数hrefの中身が到着地点になる
    let target = $(href == "#" || href == "" ? "html" : href);

    // トップからジャンプ先の要素までの距離を取得 （id=menuなどがページの一番上から何pxかを取得）
    let position = target.offset().top;
    // offset()は表示位置を取得する offset().topでページの一番上から何pxかを取得

    // animateでスムーススクロールを行う ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  // {scrollTop:position}で、ページトップからposition分だけスクロールするという指定をしているいる。
  // linear：常に同じ速さで動く swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
  // 出発地点をクリックすると、URLの末尾にIDタグ(例.https://coffee.com#menu)が付与されてしまう。
  // これを防ぐために、最後に１文return falseを追加します。






  /*=================================================
  受講生の声、作品集スライダー
  ===================================================*/
  // 受講生の声
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
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });


  // 作品集
  $(".collection-slider").slick({
    arrows: false,
    centerMode: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
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
  // スクロール時のイベント
  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fadein").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });




  /*=================================================
  プロナビの強み
  ===================================================*/
  const openBtns = document.querySelectorAll('.sp-btn');
  const pages = document.querySelectorAll('.page-modal');
  const modalBg = document.getElementById('modal-bg');

  // モーダルを開く
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      // 背景有効化
      modalBg.style.display = 'block';

      // 背景クリックで閉じる
      modalBg.onclick = closeAll;

      // 全ページ非表示
      pages.forEach(p => {
        p.classList.remove('show');
        p.style.display = 'none';
      });

      // 対象ページ表示
      const page = document.getElementById(target);
      page.style.display = 'block';
      setTimeout(() => page.classList.add('show'), 10);
    });
  });

  // ×で閉じる
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', closeAll);
  });

  // 閉じる処理
  function closeAll() {
    modalBg.style.display = 'none';
    pages.forEach(p => {
      p.classList.remove('show');
      p.style.display = 'none';
    });
  }


  /*=================================================
  アコーディオンメニュー
  ===================================================*/
  $(function () {
    $('.list-question').on('click', function () {
      $(this).next('.list-answer').slideToggle(200);
    });
  });

});