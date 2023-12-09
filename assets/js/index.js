$(document).ready(function () {
    $("#icon-btn").click(function () {
        $(".trailer-ampliado").fadeIn();
        $(".fundo-ampliada").fadeIn();
    });

    $(".trailer-ampliado").click(function () {
        $(".fundo-ampliada").fadeOut();
        $(".trailer-ampliado").fadeOut();
    });
});