// Initialize pseudo-navbar's wrapper so elements below don't jump upon fixing it to the top
$(".pseudo-nav-wrapper").height($(".pseudo-nav").height());

var tn = $(".pseudo-nav");
var tns = "test-nav-scrolled";
var height = $(".pseudo-nav").position().top;

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        tn.addClass(tns);
        //$(".pseudo-nav-wrapper").addClass("wrapper-adjust");
        $(".nav-bg").addClass("bg-white");
    } else {
        tn.removeClass(tns);
        //$(".pseudo-nav-wrapper").removeClass("wrapper-adjust");
        $(".nav-bg").removeClass("bg-white");
    }
});
    