/*
header ドロワー
================================================ */
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").slideToggle();
  jQuery("body").toggleClass("is-fixed");
});

//スムーススクロール
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  if (window.innerWidth <= 850) {
    jQuery("#js-drawer-icon").removeClass("is-checked");
    jQuery("#js-drawer-content").slideToggle();
    jQuery("body").removeClass("is-fixed");
  }
});

const drawerContent = document.getElementById("js-drawer-content");
const drawerIcon = document.getElementById("js-drawer-icon");

function checkWindowSize() {
  if (window.innerWidth >= 850) {
    // 画面幅が850px以上なら
    jQuery("body").removeClass("is-fixed");
    if (
      drawerContent.style.display === "none" ||
      drawerContent.style.display === "block"
    ) {
      // display: none; または display: block; なら
      drawerContent.style.display = "flex";
    }
  }
  if (window.innerWidth < 850) {
    // 画面幅が850px未満なら
    if (drawerIcon.classList.contains("is-checked")) {
      // drawerIconにis-checkedがついているなら
      drawerContent.style.display = "block";
      jQuery("body").toggleClass("is-fixed");
    } else if (drawerContent.style.display === "flex") {
      // display: flex; なら
      drawerContent.style.display = "none";
      jQuery("body").removeClass("is-fixed");
    }
  }
}

// ウィンドウのリサイズイベントを監視
window.addEventListener("resize", checkWindowSize);

// ページ読み込み時にもチェックを実行
checkWindowSize();

/*
about スライダー
================================================ */
const aboutSwiper = new Swiper("#js-about-swiper", {
  width: 430,
  spaceBetween: 10, // スライド間の余白
  slidesPerView: 4, //表示させる枚数
  loop: true, // 無限ループ
  speed: 3000, // スピード
  allowTouchMove: false,
  autoplay: {
    delay: 0, // スライドが止まる時間
    disableOnInteraction: false, // 自動再生を止めない
  },
  breakpoints: {
    // 550px以上のオプション
    550: {
      width: 900,
      spaceBetween: 15,
      slidesPerView: 7,
    },

    850: {
      width: 1500,
      spaceBetween: 20,
      slidesPerView: 7,
    },
  },
});

/*
prizes モーダル
================================================ */
jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  jQuery("html").css("overflow-y", "hidden");
  var dialog_id = jQuery(this).data("dialog-id");
  document.getElementById(dialog_id).showModal();
});
jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery(this).closest("dialog")[0].close();
  jQuery("html").css("overflow-y", "scroll");
});

/*
spots スライダー
================================================ */
const spotsSwiper = new Swiper("#js-spots-swiper", {
  spaceBetween: 16,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.5273,

  mousewheel: {
    forceToAxis: true,
    thresholdDelta: 30,
  },

  breakpoints: {
    650: {
      slidesPerView: 2.5,
      spaceBetween: 32,
      centeredSlides: true,
    },

    850: {
      slidesPerView: 2.5,
      centeredSlides: false,
      spaceBetween: 32,
      navigation: {
        nextEl: "#js-spots-next",
        prevEl: "#js-spots-prev",
      },
    },

    1200: {
      slidesPerView: 3.2234,
      spaceBetween: 32,
      centeredSlides: false,
      navigation: {
        nextEl: "#js-spots-next",
        prevEl: "#js-spots-prev",
      },
    },
  },
});

/*
faq アコーディオン
================================================ */
document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});

const setUpAccordion = () => {
  const details = document.querySelectorAll(".js-faq-details");
  const RUNNING_VALUE = "running"; // アニメーション実行中のときに付与する予定のカスタムデータ属性の値

  details.forEach((element) => {
    const summary = element.querySelector(".js-faq-summary");
    const content = element.querySelector(".js-faq-box-content");

    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();

      // 連打防止用。
      if (element.dataset.animStatus === RUNNING_VALUE) {
        return;
      }

      if (element.open) {
        // アコーディオンを閉じるときの処理
        const closingAnim = content.animate(
          closingAnimKeyframes(content),
          animTiming
        );
        element.dataset.animStatus = RUNNING_VALUE;

        closingAnim.onfinish = () => {
          element.removeAttribute("open");
          element.dataset.animStatus = "";
        };
      } else {
        // アコーディオンを開くときの処理
        element.setAttribute("open", "true");

        const openingAnim = content.animate(
          openingAnimKeyframes(content),
          animTiming
        );
        element.dataset.animStatus = RUNNING_VALUE;

        openingAnim.onfinish = () => {
          element.dataset.animStatus = "";
        };
      }
    });
  });
};

// アニメーションの時間とイージング
const animTiming = {
  duration: 400,
  easing: " ease-out",
};

// アコーディオンを閉じるときのキーフレーム;
const closingAnimKeyframes = (content) => {
  const height = content.scrollHeight;
  return [
    { height: `${height}px`, opacity: 1 },
    { height: "0px", opacity: 0 },
  ];
};

// アコーディオンを開くときのキーフレーム
const openingAnimKeyframes = (content) => {
  const height = content.scrollHeight;
  return [
    { height: "0px", opacity: 0 },
    { height: `${height}px`, opacity: 1 },
  ];
};

/*
PAGE TOP PC表示
================================================ */
const pageTop = document.querySelector("#js-pagetop");
window.addEventListener("scroll", function () {
  if (300 < this.window.scrollY) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});
