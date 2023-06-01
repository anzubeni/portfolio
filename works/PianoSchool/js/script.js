/*
main-navの開閉
================================================ */
const btn = document.querySelector('.btn-menu');

const nav = document.querySelector('.main-nav');

// ボタンをクリックするとメニュー部分に「open-menu」というクラスをつけたり外したりする
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');

    if (btn.innerHTML === 'Close') {
        btn.innerHTML = 'Menu';
    } else {
        btn.innerHTML = 'Close';
    }
});
// navをクリックするとメニュー部分に「open-menu」というクラスを外す
nav.addEventListener('click', () => {
    nav.classList.remove('open-menu');

    btn.innerHTML = 'Menu';

    if (btn.innerHTML === 'Close') {
        btn.innerHTML = 'Menu';
    } 
    else {
        btn.innerHTML = 'Menu';
    }
});

/*
スクロールしたら要素を動かす
================================================ */
function fadeAnime() {

    $('.fadeLeftTrigger').each(function() {
        var elemPos = $(this).offset().top-30;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeleft');
        } else {
            $(this).removeClass('fadeleft');
        }
    });

    $('.fadeRightTrigger').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('faderight');
        } else {
            $(this).removeClass('faderight');
        }
    });

};

// 画面をスクロールをしたら動かす
$(window).scroll(function() {
    fadeAnime();
});

/*
スクロールしたら要素を動かす(page-top)
================================================ */
jQuery(function() {
    var pagetop = $('.downMove');
    pagetop.hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function() {
    $('body,html').animate({
        scrollTop: 0
    });
    return false;
    });
});