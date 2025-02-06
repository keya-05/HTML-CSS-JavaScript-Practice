$(document).ready(function () {
    $("#NavbarToggler").blur(function () {
        var screenWidth = $(window).width();
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse("hide");
        }
    });
});
