// ドロワーメニュー
jQuery("#js-button-drawer").on("click", function() {
    jQuery("#js-drawer").slideToggle();
});

// トップへ戻るボタン
jQuery("#js-button-top").on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

jQuery(window).scroll(function () {
    if(jQuery(this).scrollTop() > 80) {
        jQuery("#js-button-top").fadeIn(300);
    } else {
        jQuery("#js-button-top").fadeOut(300);
    }
});

// Menu画像のモーダル
jQuery(".js-menu-modal").click(function () {
    var imgSrc = jQuery(this).find("img").attr("src");
    jQuery("#js-modal-wrapper").html("<img src='" + imgSrc + "'>");
    jQuery("#js-modal-wrapper").fadeIn();
    jQuery("body").toggleClass("is-fixed");
});
jQuery("#js-modal-wrapper").click(function () {
    jQuery("#js-modal-wrapper").fadeOut();
    jQuery("body").removeClass("is-fixed");

});