$(document).ready(function() {
    $(".btn").click(function() {
        $(".input").toggleClass("active").focus().val("");
        $(this).toggleClass("animate");
    });
});