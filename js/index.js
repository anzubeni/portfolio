// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function () {
    $(this).toggleClass("is-checked");
    $("#js-drawer").slideToggle();
    $("body").toggleClass("is-fixed");
});

// トップへ戻るボタン
jQuery("#js-button-top").on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
});