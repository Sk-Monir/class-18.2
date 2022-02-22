$(function(){
    // slideUp,slideDown,SlideToggle start
    $('.SlideUp').click(function(){
        $('.slide').slideUp(1000);
    });
    $('.SlideDown').click(function(){
        $('.slide').slideDown(1000);
    });
    $('.SlideToggle').click(function(){
        $('.slide').slideToggle(1000);
    });
    // slideUp,slideDown,SlideToggle End
});