/**
 * Created by bolaj on 02/02/2017.
 */

//animated scrolling
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function(){
    //tabs
    $('ul.tabs').tabs();
    //line clamp
    $clamp(clamp3, {clamp: 5});
});
$(document).ready(function () {
    //modal
    $('.modal').modal();
});