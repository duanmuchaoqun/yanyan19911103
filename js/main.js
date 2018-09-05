$(document).ready(function () {

    $(".icon-right").click(function () {
        $(this).toggleClass("right-icon-active");
        $(this).siblings(".tree-second").slideToggle();
    });
    $(".second-icon-right").click(function () {
        $(this).toggleClass("right-icon-active");
        $(this).siblings(".tree-third").slideToggle();
    });
// jigou-tree

});