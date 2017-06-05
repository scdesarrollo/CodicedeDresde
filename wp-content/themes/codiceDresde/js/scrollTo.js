$(".txt_go_to").click(function() {
    $('html, body').animate({
        scrollTop: $(".Creditos").offset().top
    }, 1500);
});