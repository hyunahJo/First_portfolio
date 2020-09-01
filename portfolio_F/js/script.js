const nav = $("#gnb ul li");
const cont = $("#contents > section");
const more = $(".more");

nav.click(function(e){
    e.preventDefault();
    const target = $(this);
    const index = target.index();
    const section = cont.eq(index);
    const offset = section.offset().top;
    $("html,body").animate(
        {scrollTop: offset},
        600,
        "easeInOutExpo"
    );
});

$(window).scroll(function() {
    const wScroll = $(this).scrollTop();

    if (wScroll >= cont.eq(0).offset().top) {
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if (wScroll >= cont.eq(1).offset().top) {
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if (wScroll >= cont.eq(2).offset().top) {
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if (wScroll >= cont.eq(3).offset().top) {
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
});

more.click(function(){
    $('html, body').animate({
        scrollTop: $('.section3').offset().top
    });
});

jQuery(function($) {
    $(".menu_toggle_btn").click(function(){
        $("#gnb").stop().slideToggle("fast");
    });
});